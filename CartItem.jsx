jsx
// src/pages/CartItem.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, updateQuantity, removeItem } from '../redux/CartSlice.jsx';
import { Link } from 'react-router-dom';
import './CartItem.css';

export default function CartItem() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const onQtyChange = (id, value) => {
    const q = parseInt(value, 10);
    if (Number.isNaN(q)) return;
    dispatch(updateQuantity({ id, quantity: q }));
  };

  return (
    <section className="cart-container">
      <h2>Shopping Cart</h2>
      <p aria-live="polite"><strong>Total Amount:</strong> R {total.toFixed(2)}</p>
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="browse-link">Browse products</Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div>
            {items.map(it => (
              <article key={it.id} className="cart-item">
                <img src={it.image} alt={it.name} className="item-image" />
                <div>
                  <h3>{it.name}</h3>
                  <div>R {it.price.toFixed(2)}</div>
                </div>
                <div className="item-actions">
                  <label htmlFor={`qty-${it.id}`} className="sr-only">Quantity</label>
                  <input
                    id={`qty-${it.id}`}
                    type="number"
                    min="0"
                    value={it.quantity}
                    onChange={e => onQtyChange(it.id, e.target.value)}
                    className="quantity-input"
                  />
                  <button onClick={() => dispatch(removeItem(it.id))} className="remove-btn">
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
          <aside className="summary">
            <h3>Summary</h3>
            <div className="subtotal">
              <span>Subtotal</span>
              <strong>R {total.toFixed(2)}</strong>
            </div>
            <button disabled={items.length === 0} className="checkout-btn">
              Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
