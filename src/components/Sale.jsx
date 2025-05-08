
import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const Sale = ({ Sales,addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai

  const handleAdd = (Sale) => {
    addCart(Sale);
    setCartMsgId(Sale.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };
  return (
    <>
    <div className="container-fluid Sale h-100   text-light mb-4 text-center   w-100">
                <div className="title  mb-2">
                    <h1  className='py-4'>
                    Sale
                    </h1>
                    <span className='fw-bold'><p>Discover Incredible Deals in Our Clearance Sale Section!</p></span>
                    <p>Don’t miss your chance to grab your favorite items while stocks last.</p>
                    <span className='fw-bold'><p>Hurry, limited-time offers! Shop now and save big!</p></span>
                </div>
            </div>
    <div className="container my-5  position-relative">
       
              <h6>12 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>
     
      <div className="row ">
        {Sales.map((Sale) => (
          <div key={Sale.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">
         
         <div className="card h-100 position-relative">
         {cartMsgId === Sale.id && (
  <div
    className="alert alert-success text-center position-absolute w-100"
    style={{ top: "25vh", left: 0, zIndex: 999 }}
    >
    <div>{Sale.produst} added to cart!</div>

    <div className="mt-2 animate-icon">
      <FcApproval size={40} />
    </div>
  </div>
)}
<span className="badge NEW  position-absolute" style={{ top: '10px', left: '10px' }}>
                {"NEW" in Sale ? Sale.NEW+"new" : null} 
              </span>
<span className="badge oFF bg-danger position-absolute" style={{ top: '35px', left: '10px' }}>
                {"off" in Sale ? Sale.off+"% off" : null} 
              </span>

              <img
                src={Sale.img}
                alt={Sale.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
                />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{Sale.produst}</h6>
                <p className="card-text mb-1">
                <span className=" fw-bold">Rs. {Sale.RS}</span>{' '}
                <del className="">Rs. {Sale.DelRS}</del>
              </p>
              <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(Sale)}>Quick buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
                </>
  );
};


export default Sale;
