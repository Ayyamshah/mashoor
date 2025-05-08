import React, { useState } from 'react'
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const Izaar = ({ Izars, addCart }) => {
  const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai
  const handleAdd = (Izars) => {
    addCart(Izars);
    setCartMsgId(Izars.id); // Store id
    setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
  };

  return (
    <div className="container-fluid  d-flex flex-column align-items-center  position-relative">
      <div className="title Izaar  text-light mb-4 text-center d-flex flex-column align-items-center  w-100">
        <h4 className='py-4   '>Izaar</h4>
        <p className='my-4  w-50'>
        Made from high-quality fabric, Mashroo Izaars offer a lightweight and breathable feel, ensuring maximum comfort all day long. The versatile design with chain
         pockets allows for easy movement, making it perfect for any occasion, whether it's a formal event or casual gathering.</p>
         <p className='  w-50'>
         Available in a range of colors and patterns, our Izaars add a touch of sophistication to your Thobe outfit, allowing you to express your unique sense of style.
          Embrace tradition with a modern twist and experience the perfect blend of comfort and elegance with our premium Izaars.</p>
      </div>
        <h6>3 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>

      <div className="row ">
        {Izars.map((Izars) => (
          <div key={Izars.id} className="col-12 col-sm- Thobe col-lg-4 my-3">

            <div className="card h-100 position-relative">
              {cartMsgId === Izars.id && (
                <div
                  className="alert alert-success text-center position-absolute w-100"
                  style={{ top: "25vh", left: 0, zIndex: 999 }}
                >
                  <div>{Abaya.Izars} added to cart!</div>

                  <div className="mt-2 animate-icon">
                    <FcApproval size={40} />
                  </div>
                </div>
              )}
              <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                {"off" in Izars ? Izars.off+"% off" : null} 
              </span>

              <img
                src={Izars.img}
                alt={Izars.produst}
                className="card-img-top"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column text-center py-2 p-0">
                <h6 className="card-title mt-1">{Izars.produst}</h6>
                <p className="card-text mb-1">
                  <span className=" fw-bold">Rs. {Izars.RS}</span>
                                 </p>
                <div className="btn-container  ms-5 d-flex justify-content-center" >
                  <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(Izars)}>Quily buy</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Izaar
