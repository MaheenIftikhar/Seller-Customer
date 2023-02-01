const initState = {
  name: "",
  email: "",
  role: "",
  id: "",
  error: "",
  token: null,
  auth: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        ...state,
      };
      break;
    case "LOGIN_SUCCESS":
      {
        state = {
          ...state,
          token: action.payload.token,
          name: action.payload.name,
          email: action.payload.email,
          id: action.payload.id,
          role: action.payload.role,
          auth: true,
        };
      }

      break;
    case "LOGIN_FAILURE":
      state = {
        ...state,
        error: action.payload.error,
      };

      break;
  }

  return state;
};
