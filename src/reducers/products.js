const initialState = {
  products: [],
  product: [],
  notFound: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_SUCCESS":
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case "PRODUCT_NOTFOUND":
      state = {
        ...state,
        notFound: action.payload.notFound,
      };
      break;
    case "PRODUCT_FAILURE":
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case "SINGLE_PRODUCT_SUCCESS":
      state = {
        ...state,
        product: action.payload.product,
      };
      break;
    case "SINGLE_PRODUCT_FAILURE":
      state = {
        ...state,
        error: action.payload.error,
      };
  }
  return state;
};
