// App.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addToWishlist, applyCoupon } from "./actions";
import CartItem from "./CartItem";
import WishlistItem from "./WishlistItem";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const coupon = useSelector((state) => state.coupon);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleApplyCoupon = (couponCode) => {
    dispatch(applyCoupon(couponCode));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <h2>Wishlist</h2>
      {wishlist.map((item, index) => (
        <WishlistItem key={index} item={item} />
      ))}
      <button onClick={() => handleAddToCart({ name: "Item 1" })}>
        Add Item to Cart
      </button>
      <button onClick={() => handleAddToWishlist({ name: "Item 1" })}>
        Add Item to Wishlist
      </button>
      <button onClick={() => handleApplyCoupon("DISCOUNT10")}>
        Apply Coupon
      </button>
      {coupon && <p>Coupon Applied: {coupon}</p>}
    </div>
  );
};

export default App;
