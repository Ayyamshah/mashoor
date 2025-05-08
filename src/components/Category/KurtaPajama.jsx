
import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const KurtaPajamas = ({ KurtaPajamas,addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai

  const handleAdd = (KurtaPajama) => {
    addCart(KurtaPajama);
    setCartMsgId(KurtaPajama.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };
  return (
    <div className="container my-5  position-relative">
       <div className="title text-center mb-4">
              <h4 className='py-4'>Kurta Pajama for Men</h4>
              <p>
              Mashroo presents an exquisite collection of Kurta Pajamas for men, blending timeless elegance with contemporary flair. Crafted with meticulous attention to detail and using the finest fabrics,
               each ensemble embodies sophistication and style.</p>
              <h6>12 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>
              </div>
     
      <div className="row w-100">
        {KurtaPajamas.map((KurtaPajama) => (
          <div key={KurtaPajama.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">
         
         <div className="card h-100 position-relative">
         {cartMsgId === KurtaPajama.id && (
  <div
    className="alert alert-success text-center position-absolute w-100"
    style={{ top: "25vh", left: 0, zIndex: 999 }}
  >
    <div>{KurtaPajama.produst} added to cart!</div>

    <div className="mt-2 animate-icon">
      <FcApproval size={40} />
    </div>
  </div>
)}
<span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                {"off" in KurtaPajama ? KurtaPajama.off+"% off" : null} 
              </span>

              <img
                src={KurtaPajama.img}
                alt={KurtaPajama.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{KurtaPajama.produst}</h6>
                <p className="card-text mb-1">
                <span className=" fw-bold ">Rs. {KurtaPajama.RS}</span>{' '}
                <del className="text-muted">Rs. {KurtaPajama.DelRS}</del>
              </p>
              <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(KurtaPajama)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default KurtaPajamas;
