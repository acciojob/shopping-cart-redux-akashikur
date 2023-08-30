// reducers.js
const initialState = {
  cart: [],
  wishlist: [],
  coupon: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case "APPLY_COUPON":
      return {
        ...state,
        coupon: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
