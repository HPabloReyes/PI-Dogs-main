const initialState = {
  perros: [],
  detail: {},
  temperamentos: [],
  show: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_DOG":
      return {
        ...state,
        perros: [...state.perros, { ...action.payload }],
      };
    case "GET_DOGS":
      return {
        ...state,
        perros: action.payload,
      };

    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperamentos: action.payload,
      };
    case "CLEAN_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "SHOW_NAV":
      return {
        ...state,
        show: action.payload,
      };

    default:
      return { ...state };
  }
}
