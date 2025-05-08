import React, { useState } from 'react'
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const KidsTeen = ({ KidsTeen, addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai
  const handleAdd = (KidsTeen) => {
    addCart(KidsTeen);
    setCartMsgId(KidsTeen.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };

  return (
    <div className="container my-5  position-relative">
      <div className="title text-center mb-4">
        <h4 className='py-4'>Kids & Teens</h4>
        <p>
          Explore our collection of designer Abayas, Burqas and Hijabs for Women of all ages and sizes made up of a vast collection of premium fabrics. Now available online
          at reasonable prices from the convenience of your home with Cash on delivery facility available</p>
        <h6>12 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>
      </div>

      <div className="row ">
        {KidsTeen.map((KidsTeen) => (
          <div key={KidsTeen.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">

            <div className="card h-100 position-relative">
              {cartMsgId === KidsTeen.id && (
                <div
                  className="alert alert-success text-center position-absolute w-100"
                  style={{ top: "25vh", left: 0, zIndex: 999 }}
                >
                  <div>{KidsTeen.produst} added to cart!</div>

                  <div className="mt-2 animate-icon">
                    <FcApproval size={40} />
                  </div>
                </div>
              )}
              <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                {KidsTeen.off}% off
              </span>

              <img
                src={KidsTeen.img}
                alt={KidsTeen.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{KidsTeen.produst}</h6>
                <p className="card-text mb-1">
                  <span className=" fw-bold">Rs. {KidsTeen.RS}</span>{' '}
                  <del className="text-muted">Rs. {KidsTeen.DelRS}</del>
                </p>
                
                <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(KidsTeen)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default KidsTeen
