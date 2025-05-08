import React, { useState } from 'react'
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const MarrakeshCollections = ({ MarrakeshCollections, addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai
  const handleAdd = (MarrakeshCollection) => {
    addCart(MarrakeshCollection);
    setCartMsgId(MarrakeshCollection.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };

  return (
        <>    
    <div className="container-fluid MarrakeshCollections h-100   text-light mb-4 text-center   w-100">
                <div className="title  mb-2">
                    <h1  className='py-4'>
                    Marrakesh Collection
                    </h1>
                    </div>
            </div>
        <div className="container my-5  position-relative">
        <h6>29 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>

      <div className="row ">
        {MarrakeshCollections.map((MarrakeshCollection) => (
          <div key={MarrakeshCollection.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">

            <div className="card h-100 position-relative">
              {cartMsgId === MarrakeshCollection.id && (
                <div className="alert  text-center position-absolute w-75   mx-2"
                  style={{ top: "25vh", left: '35px', zIndex: 999 , backgroundColor:' rgba(139, 233, 233, 0.93)' }}
                >
                  <div className='text'>{MarrakeshCollection.produst} added to cart!</div>

                  <div className="mt-2 animate-icon">
                    <FcApproval size={40} />
                  </div>
                </div>
              )}
              <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                {"off" in MarrakeshCollection ? MarrakeshCollection.off+"% off" : null} 
              </span>

              <img
                src={MarrakeshCollection.img}
                alt={MarrakeshCollection.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0 mt-3">
                <h6 className="card-title mt-1">{MarrakeshCollection.produst}</h6>
                <p className="card-text mb-1 d-flex mx-5 gap-3  justify-content-center align-items-center ">
                  <span className=" fw-bold">Rs. {MarrakeshCollection.RS}</span>
                  <del className="text-muted">Rs. {MarrakeshCollection.DelRS}</del>
                  
                </p>
                <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(MarrakeshCollection)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
    </>

  )
}

export default MarrakeshCollections
