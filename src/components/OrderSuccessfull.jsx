import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
 

const OrderSuccess = () => {
  return (
    <div className="container d-flex justify-content-center  align-items-center my-5 fade-in">
      <div className="card text-center p-4 shadow" style={{ maxWidth: "500px", borderRadius: "20px" }}>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2JuOTA1NXp2YW04dW90Z3RhYXR1dXZtOHE0eXJoeHdoeDl2azFqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/guTzsB48Pbm6oolIFE/giphy.gif" // Replace with your success GIF
          alt="Order Successful"
          className="img-fluid mb-3"
          style={{ width: "150px", margin: "0 auto" }}
        />
        <h2 className="text-success">Order Successful!</h2>
        <p className="text-muted">Thank you for your purchase. Your order has been placed successfully.</p>
        <Link to={'/'} className="btn btn-success mt-3">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
