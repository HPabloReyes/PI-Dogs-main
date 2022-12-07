import axios from "axios";

export function createDog(dog) {
  return async (dispatch) => {
    await axios.post("http://localhost:3001/dogs");
    dispatch({ type: "CREATE_DOG", payload: dog });
  };
}

export const getTemperaments = () => {
  return async (dispatch) => {
    let temperamentosDb = await axios.get("http://localhost:3001/temperaments");
    dispatch({ type: "GET_TEMPERAMENTS", payload: temperamentosDb.data });
  };
};

export const getDogs = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get("http://localhost:3001/dogs");
    dispatch({ type: "GET_DOGS", payload: pedidoApi.data });
  };
};

export const getDetails = (id) => {
  return async (dispatch) => {
    let info = await axios.get(`http://localhost:3001/dogs/${id}`);
    dispatch({ type: "GET_DETAILS", payload: info.data });
  };
};

export const cleanDetails = () => {
  return (dispatch) => {
    const detail = {};
    dispatch({ type: "CLEAN_DETAILS", payload: detail });
  };
};

export const ShowNav = () => {
  return (dispatch) => {
    const show = true;
    dispatch({ type: "SHOW_NAV", payload: show });
  };
};
