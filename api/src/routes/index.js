const { Router } = require("express");
const axios = require("axios");
const { Raza, Temperamento } = require("../db");
const { NUMBER } = require("sequelize");
require("dotenv").config();
const { ALLDOGS } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const allDogs = ALLDOGS;
const queryDogs = "https://api.thedogapi.com/v1/breeds/search?q=";

// Busca todos los perros de la API y los concatena con todos los perros de la DB
router.get("/dogs", async (req, res) => {
  try {
    const respuesta = await axios.get(allDogs);

    const format = respuesta.data.map((perro) => {
      const obj = {
        id: perro.id,
        nombre: perro.name,
        temperamento: perro.temperament,
        peso: perro.weight.metric.split(" "),
        imagen: perro.image.url,
      };

      return obj;
    });

    // const cosa = format.forEach((perro) => {
    //   .log(perro.peso);
    // });

    const db = await Raza.findAll({ include: [{ model: Temperamento }] });

    const todo = [...format, ...db];

    res.send(todo);
    //console.log(cosa);
  } catch (e) {
    console.log(e);
  }
});

// Busca perros buscando en la base de datos y la API ocupando un ID como parametro
router.get("/dogs/:idRaza", async (req, res) => {
  const { idRaza } = req.params;

  const respuesta = await axios.get(allDogs);

  const format = respuesta.data.map((perro) => {
    const obj = {
      id: perro.id,
      nombre: perro.name,
      temperamento: perro.temperament,
      peso: perro.weight.metric + " Kg",
      altura: perro.height.metric + " Cm",
      años_de_vida: perro.life_span,
      imagen: perro.image.url,
    };
    return obj;
  });

  if (idRaza.includes("a", "b")) {
    const resultado2 = await Raza.findByPk(idRaza, {
      include: [{ model: Temperamento }],
    });
    const aux = [resultado2];
    res.send(aux);
  } else {
    const resultado1 = format.filter((e) => e.id === parseInt(idRaza));
    res.send(resultado1);
  }
});

// Busca perros ocupando el end point de la api usando el nombre como parametro para la Query
router.get("/dog/:name", async (req, res) => {
  const { name } = req.params;
  if (!name) res.status(400).json({ msj: "no se ingreso una ID" });
  try {
    const respuesta = await axios.get(queryDogs + name);

    let format = respuesta.data.map((p) => {
      const obj = {
        id: p.id,
        name: p.name,
      };
      return obj;
    });

    if (format.length === 0)
      res.status(200).json({ msj: "No hay perros con el nombre ingresado" });

    res.send(format);
    //console.log(format);
  } catch (e) {
    console.log(e);
  }
});

// Postea perros y los relaciona con su temperamento segun la base de datos.
router.post("/dogs", async (req, res) => {
  const {
    nombre,
    temperamento,
    peso_maximo,
    peso_minimo,
    altura,
    años_de_vida,
  } = req.body;

  const obj = {
    nombre,
    peso_maximo,
    peso_minimo,
    peso: [peso_minimo, "-", peso_maximo],
    altura,
    años_de_vida,
  };

  const nuevoPerro = await Raza.create(obj);

  nuevoPerro.addTemperamento(temperamento);

  const aux = Raza.findByPk(nuevoPerro.id, {
    include: { model: Temperamento },
  });

  res.send(aux);
});

// Esta ruta debe traer la informacion de toda la base de datos

router.get("/temperaments", async (req, res) => {
  try {
    const db = await Temperamento.findAll();

    format = db.map((e) => {
      const obj = {
        id: e.id,
        nombre: e.nombre,
      };
      return obj;
    });

    //console.log(format);
    res.send(format);
  } catch (e) {
    console.log(e);
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Raza.destroy({ where: { id } });

    res.send("succesfull deleted");
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
