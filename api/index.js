//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Temperamento } = require("./src/db");
const axios = require("axios");
const port = process.env.PORT || "8080";
require("dotenv").config();

const precharge = async function () {
  const perros = await axios.get("https://api.thedogapi.com/v1/breeds");

  const format = perros.data.map((e) => {
    const obj = {
      nombre: [],
    };
    if (e.temperament) obj.nombre.push(e.temperament.split(", "));
    return obj;
  });

  const resultado = format.reduce((allTemps, perro) => {
    return Array.from(new Set([...allTemps, ...perro.nombre]));
  }, []);
  const resultado2 = resultado.reduce((allTemps, temp) => {
    return Array.from(new Set([...allTemps, ...temp]));
  });
  let final = resultado2.map((e) => {
    const obj = {
      nombre: e,
    };
    return obj;
  });

  //console.log(final);

  Temperamento.bulkCreate(final);
};

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  precharge();
  server.listen(port, () => {
    console.log("%s listening at ", port); // eslint-disable-line no-console
  });
});
