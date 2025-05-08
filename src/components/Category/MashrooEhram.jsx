import React, { useState } from 'react'
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const MashrooEhrams = ({ MashrooEhrams, addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai
  const handleAdd = ( MashrooEhrams) => {
    addCart( MashrooEhrams);
    setCartMsgId( MashrooEhrams.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };

  return (
    <div className="container my-5  position-relative">
      <div className="title text-center mb-4">
        <h4 className='py-4'>Mashroo Ehram</h4>
        <p>
        Mashroo Ehram: Experience Comfort and Tradition Combined. Crafted with meticulous attention to detail, our Ehram collection offers supreme comfort and elegance
         for your sacred pilgrimage. Embrace the spiritual journey with confidence and grace.</p>
        <h6>1 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>
      </div>

      <div className="row ">
        {MashrooEhrams.map(( MashrooEhrams) => (
          <div key={ MashrooEhrams.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">

            <div className="card h-100 position-relative">
              {cartMsgId ===  MashrooEhrams.id && (
                <div
                  className="alert alert-success text-center position-absolute w-100"
                  style={{ top: "25vh", left: 0, zIndex: 999 }}
                >
                  <div>{ MashrooEhrams.produst} added to cart!</div>

                  <div className="mt-2 animate-icon">
                    <FcApproval size={40} />
                  </div>
                </div>
              )}
              <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                {"off" in  MashrooEhrams ?  MashrooEhrams.off+"in stock" : null} 
              </span>

              <img
                src={ MashrooEhrams.img}
                alt={ MashrooEhrams.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{ MashrooEhrams.produst}</h6>
                <p className="card-text mb-1">
                  <span className="fw-bold">Rs. { MashrooEhrams.RS}</span>
                  <del className="text-muted">Rs. { MashrooEhrams.DelRS}</del>
                </p>
                <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div  className="btn btn-dark mx-2 px-5  " style={{ backgroundColor: 'rgba(206, 186, 186, 0.5)' }} onClick={() => handleAdd( MashrooEhrams)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default MashrooEhrams
