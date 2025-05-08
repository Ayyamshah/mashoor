import React, { useEffect }  from 'react'
import { GiLindenLeaf ,GiLeatherArmor } from "react-icons/gi";
import { LuHeart } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStory = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);
    return (
        <>
            <div className="container-fluid w-100 p-0">
                <div className="benner">
                    <img className='w-100 ' src="/Ourstory/OurStory.webp" alt="" style={{ objectFit: "cover", height: '110vh' }} />
                    <h1>Our Story</h1>
                </div>
                <div className="container-fluid bg-light m-0 p-0">
                    <div className="container">
                        <div className="row bg-light d-flex justify-content-center align-items-center " >
                            <div className="col-lg-6 my-5 text-start"  data-aos="fade-up">
                                <img className=' w-100 h-auto' src="/Ourstory/Ourstory01.webp" alt="" />
                            </div>
                            <div className="col-lg-5  my-5 "  data-aos="fade-up">
                                <p className='lh-lg'>Discover Mashroo- Elevating Modesty, Redefining Style <br />
                                    <br />
                                    Welcome to Mashroo, where tradition meets contemporary elegance. Established in 2013 in the vibrant city of Mumbai, we embarked on a journey to redefine modest fashion, making it accessible to individuals around the globe. At Mashroo, we believe in blending cultural richness with
                                    modern style, offering an exquisite range of apparel that reflects both tradition and trend.</p>
                            </div>


                            <div className="col-lg-5 mb-5 text-start"  data-aos="fade-up">
                                <p className='lh-lg'>Our Humble Beginnings <br /><br />
                                    Our story began with the inauguration of our first brick-and-mortar store in Mumbai, introducing a diverse collection of ready-made Thobes for men. Recognizing the unique preferences of our customers, we went a step further by offering tailor-made, customized Thobes.
                                    The positive response fueled our passion for quality craftsmanship and customer satisfaction.</p>
                            </div>
                            <div className="col-lg-6 mb-5 text-end "  data-aos="fade-up">
                                <img className='w-100' src="/Ourstory/Ourstory02.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row d-flex gap-5 justify-content-center align-items-center ">
                        <div className="col-lg-5  text-start " data-aos="fade-up">
                        <h1><GiLindenLeaf /></h1>
                        <h3>Expanding Horizons</h3>
                            <p className='lh-lg'>
                                Driven by the desire to connect with a wider audience, we embraced the digital era, extending our presence online to serve customers not only in India but internationally as well. As we acquired a legion of satisfied customers, we ventured into
                                collaboration with resellers, creating a network of individuals who share our commitment to delivering quality.</p>
                        </div>
                        <div className="col-lg-6  ">
                            <img className='w-100' src="/Ourstory/Ourstory1.webp" alt="" />
                        </div>
                        <div className="col-lg-5  text-start" data-aos="fade-up">
                            <h1><LuHeart /></h1>
                            <h3>Diversifying our Offerings
                            </h3>
                            <p className='lh-lg'>Ininitial
                                of our journey, the success in men's
                                fashion inspired us to explore new avenues.
                                Recognizing a gap in modest women's fashion, we introduced a stunning collection of Abayas and Hijabs. From tailor-made pieces to ready-made ensembles, our offerings ranged from daily wear to sporty abayas, handcrafted designs, and chic tunics and hijabs..
                            </p>
                        </div>
                        <div className="col-lg-6  ">
                            <img className='w-100' src="/Ourstory/Ourstory2.webp" alt="" />
                        </div>
                        <div className="col-lg-5  text-start" data-aos="fade-up">
                            <h1><GiLeatherArmor /></h1>
                            <h3>A Commitment to Excellence</h3>
                            <p className='lh-lg'>To ensure the uncompromised quality of our products,
                                we established a state-of-the-art warehouse on the outskirts of Mumbai.
                                Here, we meticulously oversee the production process, maintaining the highest
                                standards and utilizing exclusive and premium fabrics. This dedication to quality allows us to provide our customers with exceptional pieces that stand out in the modest fashion industry.
                            </p>
                        </div>
                        <div className="col-lg-6  ">
                            <img className='w-100' src="/Ourstory/Ourstory3.webp" alt="" />
                        </div>
                        <div className="col-lg-5  text-start" data-aos="fade-up">
                        
                            <h3>Globally Embraced, Locally Rooted</h3>
                            <p className='lh-lg'>
                            As the love for our products transcended borders, we 
                            expanded our global presence to over 30 countries through our website, third-party e-commerce platforms, and a network of dedicated resellers. The warmth and acceptance of our home city, Mumbai, encouraged us to set up flagship stores in quick succession. Today, we proudly stand
                             with four stores in India, with additional locations in Bangalore and Hyderabad.</p>
                        </div>
                        <div className="col-lg-6  ">
                            <img className='w-100' src="/Ourstory/Ourstory4.webp" alt="" />
                        </div>
                        <div className="col-lg-5  text-start" data-aos="fade-up">
                            <h3>Our Vision for the Future</h3>
                            <p className='lh-lg'>
                            Our journey is fueled by a simple yet profound goal - to make modest fashion accessible to people worldwide.
                             We strive to be a global epitome of excellent product quality and unparalleled customer service. At Mashroo, we continue to innovate, create, and evolve, setting new benchmarks in the world of modest fashion. Join us in our pursuit of elevating modesty, redefining style, and making fashion a universal celebration. Welcome to the world of Mashroo,
                             where tradition meets the contemporary, and style knows no boundaries.</p>
                        </div>
                        <div className="col-lg-6  ">
                            <img className='w-100' src="/Ourstory/Ourstory5.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurStory