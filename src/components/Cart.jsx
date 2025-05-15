// 
import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const Cart = ({ cart = [], deleteCart, upDateQuantity }) => {
  const total = cart.reduce((total, item) => total + item.RS * item.quantity, 0);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="container w-75 shadow-lg border-1 border-dark bg-dark text-light border p-4 my-5">
      {cart.length === 0 ? (
        <h1 className="text-center">There is no item in your cart!</h1>
      ) : (
        <>
          {cart.map((item) => (
            <div className="row my-2" key={item.id}>
              <div className="col-md-8 d-flex">
                <img
                  className="img-fluid object-fit-cover"
                  style={{ width: '100px', height: '150px' }}
                  src={`${process.env.PUBLIC_URL}${item.img}`} // ✅ Proper image path
                  alt={item.produst}
                />
                <div className="ms-3">
                  <h4>{item.produst}</h4>
                  <p>${item.RS}</p>
                </div>
              </div>
              <div className="col">
                <div className="quantity-controls">
                  <button className="btn-sm btn" onClick={() => upDateQuantity(item.id, item.quantity + 1)}>+</button>
                  <p className="mt-3 fs-5 px-2">{item.quantity}</p>
                  <button className="btn-sm btn" onClick={() => upDateQuantity(item.id, item.quantity - 1)}>-</button>
                  <button className="btn btn-sm" onClick={() => deleteCart(item.id)}>DEL</button>
                </div>
              </div>
            </div>
          ))}

          <div className="summary mt-5">
            <h4 className="me-4">
              Total Price: <small className="fw-normal">${total}</small>
            </h4>
            <button className="btn btn-success w-100" onClick={() => setShowCheckout(true)}>
              Checkout
            </button>
          </div>
        </>
      )}

      {showCheckout && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={() => setShowCheckout(false)}></button>
              </div>
              <div className="modal-body">
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
