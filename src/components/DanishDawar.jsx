
import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { MdOutlineVerticalAlignBottom } from "react-icons/md";



const DanishDawar = ({ DanishDawars, addCart }) => {
    const [cartMsgId, setCartMsgId] = useState(null); // Kis card pe msg show karna hai

    const handleAdd = (DanishDawar) => {
        addCart(DanishDawar);
        setCartMsgId(DanishDawar.id); // Store id
        setTimeout(() => setCartMsgId(null), 1000); // Message 1 sec baad remove
    };
    return (
        <>
            <div className="container-fluid DANISHDAWAR   text-light mb-4 text-center   w-100">
                <div className="title  mb-2">
                    <h1 style={{ marginBottom: "-104px" }} className='py-4'>Mashroo X Danish & Dawar
                    </h1>
                </div>
            </div>
            <div className="container my-5  position-relative">

                <h6>12 Product <div className="btn"><MdOutlineVerticalAlignBottom /></div> </h6>

                <div className="row ">
                    {DanishDawars.map((DanishDawar) => (
                        <div key={DanishDawar.id} className="col-12 col-sm-6 Thobe col-lg-3 my-3">

                            <div className="card h-100 position-relative">
                                {cartMsgId === DanishDawar.id && (
                                    <div
                                        className="alert alert-success text-center position-absolute w-100"
                                        style={{ top: "25vh", left: 0, zIndex: 999 }}
                                    >
                                        <div>{DanishDawar.produst} added to cart!</div>

                                        <div className="mt-2 animate-icon">
                                            <FcApproval size={40} />
                                        </div>
                                    </div>
                                )}
                                <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                {"off" in DanishDawar ? DanishDawar.off+"% off" : null} 
              </span>

                                <img
                                    src={DanishDawar.img}
                                    alt={DanishDawar.produst}
                                    className="card-img-top"
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column text-center py-2 p-0">
                                    <h6 className="card-title mt-1">{DanishDawar.produst}</h6>
                                    <p className="card-text mb-1">
                                        <span className=" fw-bold">Rs. {DanishDawar.RS}</span>{' '}
                                        <del className="text-muted">Rs. {DanishDawar.DelRS}</del>
                                    </p>
                                    <div className="btn-container  ms-5 d-flex justify-content-center" >
                                        <div className="btn btn-light mx-2 px-5  " onClick={() => handleAdd(DanishDawar)}>Quily buy</div>
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


export default DanishDawar;
