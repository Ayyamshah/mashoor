import React, { useState } from 'react'
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const BidayahCollections = ({ BidayahCollections, addCart }) => {
    const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai
    const handleAdd = (BidayahCollection) => {
        addCart(BidayahCollection);
        setCartMsgId(BidayahCollection.id); // Store id
        setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
    };

    return (
        <>
            <div className="container-fluid BidayahCollection h-100 text-light mb-4 d-flex flex-column align-items-center text-center w-100">
  <div className="title mb-2 col-12 col-md-8">
    <h1 className="py-4">Bidayah Collection</h1>

    <span className="fw-bold">
      <p>Introducing Bidayah Collection by Mashroo: Embracing Timeless Elegance</p>
    </span>

    <p>
      Elevate your style with the enchanting Bidayah Collection by Mashroo, where each piece embodies the essence
      of timeless elegance and contemporary allure. Inspired by the Arabic word "Bidayah," meaning new beginnings,
      this collection celebrates femininity, grace, and sophistication in every design.
    </p>

    <p>
      <span className="fw-bold">Exquisite Craftsmanship: </span>The Bidayah Collection showcases meticulous craftsmanship, ensuring
      exceptional quality and attention to detail in every stitch and seam. From delicate embroidery to intricate
      embellishments, each piece reflects Mashroo's commitment to excellence.
    </p>

    <p>
      <span className="fw-bold">Luxurious Fabrics: </span>Indulge in the richness of premium fabrics carefully selected to drape beautifully
      and enhance your silhouette. From flowing chiffons to luxurious silks and soft crepes, the collection offers a
      luxurious tactile experience that complements the sophisticated designs.
    </p>

    <p>
      <span className="fw-bold">Elegant Designs: </span>Whether you're looking for a show-stopping evening gown, a modest yet stylish abaya,
      or a tailored suit for professional elegance, the Bidayah Collection offers a range of styles to suit every
      occasion and preference. Each design exudes charm, confidence, and a timeless appeal that transcends trends.
    </p>

    <span className="fw-bold">
      <p>Hurry, limited-time offers! Shop now and save big!</p>
    </span>
  </div>
</div>

            <div className="container my-5  position-relative">
                <h6>8 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>

                <div className="row ">
                    {BidayahCollections.map((BidayahCollection) => (
                        <div key={BidayahCollection.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">

                            <div className="card h-100 position-relative">
                                {cartMsgId === BidayahCollection.id && (
                                    <div className="alert  text-center position-absolute w-75   mx-2"
                                        style={{ top: "25vh", left: '35px', zIndex: 999, backgroundColor: ' rgba(139, 233, 233, 0.93)' }}
                                    >
                                        <div className='text'>{BidayahCollection.produst} added to cart!</div>

                                        <div className="mt-2 animate-icon">
                                            <FcApproval size={40} />
                                        </div>
                                    </div>
                                )}
                                <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                                    {"off" in BidayahCollection ? BidayahCollection.off + "% off" : null}
                                </span>

                                <img
                                    src={BidayahCollection.img}
                                    alt={BidayahCollection.produst}
                                    className="card-img-top"
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column text-center py-2 p-0">
                                    <h6 className="card-title mt-1">{BidayahCollection.produst}</h6>
                                    <p className="card-text mb-1 d-flex mx-5 gap-3  justify-content-center align-items-center ">
                                        <span className=" fw-bold">Rs. {BidayahCollection.RS}</span>
                                        <span><h6>sold out</h6></span>
                                    </p>
                                    <div className="btn-container  ms-5 d-flex justify-content-center" >
                                        <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(BidayahCollection)}>Quily buy</div>
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

export default BidayahCollections
