import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={`/images/${item.id}.jpg`} alt={item.title} />
      </div>
      <div className="item-details">
        <div className="item-header">
          <h3>{item.title}</h3>
          <div className="item-price-qty">
            <div className="qty-control">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>
            <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
        <div className="item-description">
          <details open>
            <summary>Details & Core</summary>
            <p>{item.description}</p>
          </details>
          <details>
            <summary>Sustainability</summary>
            <p>Eco-friendly packaging</p>
          </details>
        </div>
        <div className="item-actions">
          <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
