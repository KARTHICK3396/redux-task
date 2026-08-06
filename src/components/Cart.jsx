import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>SUBTOTAL :</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>SHIPPING :</span>
          <span>FREE</span>
        </div>
        <hr />
        <div className="summary-row total">
          <span>TOTAL :</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="promo">Get Daily Cash With Nespola Card</div>
      </div>
    </div>
  );
};

export default Cart;
