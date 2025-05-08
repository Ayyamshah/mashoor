import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const BlogTO = () => {
    return (
        <>
            <div className="container-fluid bg-light my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-11 d-flex justify-content-center">
                        <img src="/Blog/BlogeTO01.webp" alt="" className="img-fluid" />
                    </div>
                    <h3 className="text-center my-5">Mashroo Ramadan 2025 Collection – Enhance Your Festive Wardrobe</h3>
                </div>

                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-sm-12 text-start">

                            <p className="my-4">Ramadan is a time of reflection, devotion, and celebration, and what better way to embrace the spirit of this holy month than with Mashroo’s Ramadan 2025 Collection? This exclusive collection is now live and available both online and across all Mashroo stores. Featuring a curated selection of thobes, kurtas, and pathanis for men, kids, and teens,
                                this collection embodies elegance, tradition, and contemporary style.</p>



                            <h3>Discover the Finest Thobes for Men
                            </h3>
                            <p>Our Ramadan 2025 thobe collection is designed for sophistication and comfort. Crafted from premium-quality fabrics, these thobes feature intricate embroidery, minimalistic yet stylish cuts,
                                and breathable materials ideal for prayer and special occasions.</p>

                            <div className="d-flex justify-content-center my-4">
                                <img className="img-fluid w-100" src="/Blog/BlogeTO02.webp" alt="" />
                            </div>
                            <p>Whether you prefer a classic white thobe or a modern colored design, Mashroo has the perfect choice for you.</p>


                            <h3>Elegant Kurtas – A Perfect Blend of Tradition and Modernity</h3>
                            <p>Refresh your Ramadan look with our latest kurta designs, tailored for a perfect fit and superior comfort. Available in rich colors and adorned with detailed embellishments, these kurtas are ideal for Iftar gatherings, Taraweeh prayers, and Eid celebrations. Pair them with traditional
                                pyjamas, churidars, or trousers to complete your look.</p>

                            <h3>Pathanis – Regal Attire for the Festive Season
                            </h3>
                            <p>For those who appreciate a bold and elegant style, our Pathani suits offer a refined yet commanding presence. Designed with fine detailing and available in luxurious hues, these outfits exude confidence and cultural pride, making them an
                                excellent choice for festive evenings and social gatherings.</p>

                                <p>Stylish Outfits for Kids & Teens</p>
                            <div className="d-flex justify-content-center my-4">
                                <img className="img-fluid w-100" src="/Blog/BlogeTO03.webp" alt="" />
                            </div>

                            <p>Mashroo ensures that every young gentleman can celebrate Ramadan in style. Our kids’ and teens’ collection features miniature thobes, kurtas, and pathanis designed with the same craftsmanship and quality as our men’s line. These outfits provide comfort, durability, and a charming festive appeal,
                                ensuring your little ones look their best for every special occasion.</p>

                            <h3>Shop the Collection Today!</h3>
                            <p>The Mashroo Ramadan 2025 Collection is now available online and in all Mashroo stores across Mumbai, Bangalore, and Hyderabad.
                                Get your hands on these exclusive designs before they sell out!</p>
                            <p>📍 Visit Our Stores or Shop Online at Mashroostore.com
                                Celebrate this Ramadan with elegance, tradition, and unmatched style with Mashroo.</p>
                            <p className="text-muted">
                                #Mashroo #Menswear #KurtasForMen #EidStyle #EthnicWear #KurtaPajama #IndianMensStyle
                            </p>

                            <div className="d-flex align-items-center gap-3 mt-5 pb-5">
                                <p className="mb-0">Share:</p>
                                <a href="#"><FaFacebookSquare size={24} /></a>
                                <a href="#"><CiLocationArrow1 size={24} /></a>
                                <a href="#"><FaPinterest size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogTO;
