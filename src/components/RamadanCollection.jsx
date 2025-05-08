
import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";




const RamadanCollection = ({ RamadanCollections,addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai

  const handleAdd = (RamadanCollection) => {
    addCart(RamadanCollection);
    setCartMsgId(RamadanCollection.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };
  return (
    <div className="container my-5  position-relative">
       <div className="title text-center mb-4">
              <h4 className='py-4'>Mashroo's Ramadan 2025 Collection</h4>
              <p>
              Step into the spirit of Ramadan with Mashroo's exquisite Ramadan '25 Collection. Inspired by the essence of this sacred month,
               each garment is a celebration of heritage and elegance.</p>
              <h6>12 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>
              </div>
     
      <div className="row ">
        {RamadanCollections.map((RamadanCollection) => (
          <div key={RamadanCollection.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">
         
         <div className="card h-100 position-relative">
         {cartMsgId === RamadanCollection.id && (
  <div
    className="alert alert-success text-center position-absolute w-100"
    style={{ top: "25vh", left: 0, zIndex: 999 }}
  >
    <div>{RamadanCollection.produst} added to cart!</div>

    <div className="mt-2 animate-icon">
      <FcApproval size={40} />
    </div>
  </div>
)}

              <img
                src={RamadanCollection.img}
                alt={RamadanCollection.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{RamadanCollection.produst}</h6>
                <p className="card-text mb-1">
                <span className="fw-bold">Rs. {RamadanCollection.RS}</span>{' '}
                <del className="text-muted">Rs. {RamadanCollection.DelRS}</del>
              </p>
              <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(RamadanCollection)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default RamadanCollection;
