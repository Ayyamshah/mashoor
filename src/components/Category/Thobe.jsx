
import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const Thobe = ({ Thobes,addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai

  const handleAdd = (thobe) => {
    addCart(thobe);
    setCartMsgId(thobe.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };
  return (
    <div className="container my-5  position-relative">
       <div className="title text-center mb-4">
              <h4 className='py-4'>Thobes | Jubbas For Men</h4>
              <p>
              Indulge in the luxurious fabrics and impeccable craftsmanship that define Mashroo's signature style. Elevate your wardrobe with our Thobes and Jubbas for Men,
               where tradition meets modernity in perfect harmony.</p>
              <h6>12 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>
              </div>
     
      <div className="row ">
        {Thobes.map((thobe) => (
          <div key={thobe.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">
         
         <div className="card h-100 position-relative">
         {cartMsgId === thobe.id && (
  <div
    className="alert alert-success text-center position-absolute w-100"
    style={{ top: "25vh", left: 0, zIndex: 999 }}
  >
    <div>{thobe.produst} added to cart!</div>

    <div className="mt-2 animate-icon">
      <FcApproval size={40} />
    </div>
  </div>
)}

              <img
                src={thobe.img}
                alt={thobe.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{thobe.produst}</h6>
                <p className="card-text mb-1">
                <span className="fw-bold">Rs. {thobe.RS}</span>{' '}
                <del className="text-muted">Rs. {thobe.DelRS}</del>
              </p>
              <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(thobe)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Thobe;
