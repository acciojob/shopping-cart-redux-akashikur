// actions.js
export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const addToWishlist = (item) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: item,
  };
};

export const applyCoupon = (coupon) => {
  return {
    type: "APPLY_COUPON",
    payload: coupon,
  };
};
