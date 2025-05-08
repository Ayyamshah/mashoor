
import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';


const Display = ({addCart ,Produsts }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai

  const handleAdd = (Product) => {
    addCart(Product);
    setCartMsgId(Product.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };
  return (
    <div className="container my-5  position-relative">
     
      <div className="row">
        {Produsts.map((Produst) => (
          <div key={Produst.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">
         
         <div className="card h-100 position-relative">
         {cartMsgId === Produst.id && (
  <div
    className="alert alert-success text-center position-absolute w-100"
    style={{ top: "25vh", left: 0, zIndex: 999 }}
  >
    <div>{Produst.produst} added to cart!</div>

    <div className="mt-2 animate-icon">
      <FcApproval size={40} />
    </div>
  </div>
)}

              <img
                src={Produst.img}
                alt={Produst.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{Produst.produst}</h6>
                <p className="card-text">RS {Produst.RS}</p>
                <div className=" btn-container d-flex justify-content-center ms-3 gap-2 mt-auto ">
                  <button className=" btn btn-light" onClick={() => handleAdd(Products)}  >
                    Add to Cart
                  </button>
                  <button className="btn btn-dark">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Display;
