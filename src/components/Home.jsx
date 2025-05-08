import React from 'react'
import Carousel from './Carousel'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Home = ({ Categorys }) => {
  const Navigate = useNavigate()
  const CategoryShower = (id) =>{
    if(id == 1){
      Navigate("/Thobe/")
    }
    if(id == 2){
      Navigate("/Abayas")
    }
    if(id == 3){
      Navigate("/KidsTee/")
    }
    if(id == 4){
      Navigate("/KurtaPajama/")
    }
    if(id == 5){
      Navigate("/PthaniSuits")
    }
    if(id == 6){
      Navigate("/MashrooEhrams/")
    }
    if(id == 7){
      Navigate("/Cosate/")
    }
    if(id == 8){
      Navigate("/Izaar/")
    }
  }
  return (
    <>
    <Carousel />
      <div className="container-fluid">
        <div className="container my-5 " >
          <h3 className='my-5 text-center' > Shop by Category</h3>
          <div className="row ">
            {Categorys.map(Categorys => (
              
              <div key={Categorys.id} onClick={()=>CategoryShower(Categorys.id)} className="col-lg-3 category overflow-hidden my-3">
                <img src={Categorys.img}
                  alt="cover example"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                <h6 className='d-flex justify-content-center align-items-center code mt-2' >{Categorys.produst}</h6>
              </div>
            ))}

          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-7">
              <div className="img1  d-flex align-items-end">
                <img src="\HOME\Sarfazkhan03PAR.webp" className='img-fluid object-fit-cover' alt="bottom image" />
              </div>
              <div className="img2  ">
                <img src="\HOME\Razasikandar32.webp" className='img-fluid object-fit-cover' alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <p>Mashroo Legacy</p>
              <h2>Mashroo – where style meets heritage in the most endearing way!</h2>
              <p>Since 2012, we've been on a mission to celebrate traditional craftsmanship through fashion.
                With 4 retail stores across India (and more coming!), plus a global presence in the USA,
                UK, Australia, and the UAE, we're all about bringing cultural
                stories to life. Join us on this stylish journey that's making waves worldwide!</p>
              <Link className="btn btn-dark text-light py-2 px-5" to={'/OurStory/'}>Our Story</Link>

            </div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <div className="DANISH1DAWAR py-5">
            <Link to={'/DanishDawar/'} >
              <img src="/HOME/DANISH$DAWAR.webp" alt="Danish Dawar" />
            </Link>
          </div>
        </div>

        <div className="container-fluid my-5">
          
          <div className="row  d-flex justify-content-center">
            {/* Card 1 */}
            <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
              <div className="card" style={{ width: "100%", maxWidth: "26rem" }}>
                <Link to={'/RamadanCollection/'}>                
                <img
                  className="card-img-top"
                  src="/HOME/mob1.webp"
                  alt="Ramadan Collection"
                /></Link>
                <div className="card-body text-center">
                  
                  <h5 className="card-title">Ramadan Collection '25</h5>
                  <p className="card-text">
                    Designed for men, kids, and teens, this collection features exquisitely crafted thobes, kurtas, and pathanis, blending heritage with modern elegance. Each piece ensures comfort and sophistication for Iftar gatherings, Taraweeh prayers, and Eid celebrations.
                  </p>
                  <Link to={'/RamadanCollection/'} className="btn btn-dark text-light py-2 px-5">Check out</Link>
                  
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
              <div className="card" style={{ width: "100%", maxWidth: "26rem" }}>
                <Link to={'/MarrakeshCollections/'}>
                <img
                  className="card-img-top"
                  src="/HOME/Marrakeshmob02.webp"
                  alt="Marrakesh Collection"
                  />
                  </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">Marrakesh Collection</h5>
                  <p className="card-text">
                    Inspired by the vibrant essence of Moroccan artistry, this collection embodies elegance and tradition with a modern touch. Each piece reflects intricate designs, rich textures, and timeless sophistication, perfect for the contemporary woman.
                  </p>
                  <Link to={'/MarrakeshCollections/'} className="btn btn-dark text-light py-2 px-5">Check out</Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
              <div className="card" style={{ width: "100%", maxWidth: "26rem" }}>
                <Link to={'/BidayahCollection/'}> 
                <img
                  className="card-img-top"
                  src="/HOME/bidayaHeroMobileBanner03.webp"
                  alt="Bidayah Collection"
                  />
                  </Link>
                <div className="card-body text-center">
                  <h5 className="card-title">Bidayah Collection</h5>
                  <p className="card-text">
                    A celebration of new beginnings, where timeless elegance meets contemporary allure. This collection embraces femininity, grace, and sophistication in every design. Crafted with exquisite Mashroo fabric, Bidayah redefines luxury with a touch of tradition.
                  </p>
                  <Link to={'/BidayahCollection/'} className="btn btn-dark text-light py-2 px-5">Check out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fuldi mt-5 bg-light">
        <h3 className='text-center my-2 py-4'>Mashroo Updates</h3>
          <div className="row ">

            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="caard h-100">
                <Link to={'/Blog/'}>
                <img
                  src="/HOME/MashrooUpdateBlog01.webp"
                  className="card-img-top"
                  alt="Kurta Collection"
                  />
                  </Link>
                <div className="card-body">
                  <h4 className="card-title py-3 ">
                    Why Mashroo’s Kurtas Are Perfect for Daily & Occasion Wear
                  </h4>
                  <p className="card-text py-4">
                    Discover timeless elegance, unmatched comfort, and style with every piece.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="caard h-100">
                <Link to={'/BlogTo/'}>
                <img
                  src="/HOME/MashrooUpdate02.webp"
                  className="card-img-top"
                  alt="Ramadan Collection"
                  />
                  </Link>
                <div className="card-body">
                  <h4 className="card-title py-3">
                    Mashroo Ramadan 2025 Collection – Enhance Your Festive Wardrobe
                  </h4>
                  <p className="card-text py-4">
                    The <strong>Mashroo Ramadan 2025 Collection</strong> is now available{" "}
                    <strong>online</strong> and in all Mashroo stores across Mumbai, Bangalore, and Hyderabad.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
           <div className="col-md-4 mb-4">
              <div className="caard h-100">
                <Link to={'/BlogeThree/'}>
                <img
                  src="/HOME/MashrooUpdates03.webp"
                  className="card-img-top"
                  alt="Store Expansion"
                />
           </Link>
                <div className="card-body">
                  <h4 className="card-title py-3">
                    Mashroo Expands in Mumbai – New Store Now Open at Mohammad Ali Road!
                  </h4>
                  <p className="card-text py-4">
                    Mashroo is thrilled to announce the grand opening of its newest store at{" "}
                    <strong>Mohammad Ali Road, Mumbai</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
