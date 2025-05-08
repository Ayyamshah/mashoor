import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = ({CartNumber}) => {
  return (
    <section className='header m-0 p-0'>
        <nav className="navbar navbar-expand-lg navbar-light d-flex ">
  <a className="navbar-brand" href="#"><img src="\public\logo.svg" className='d-block mx-5' alt="" style={{width:"30%", height:"30%"}} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 <ul className="navbar-nav ms-auto me-5 ">
      <li className="nav-item active" >
        <Link to={"/login/"} className="nav-link"  href="#"><CgProfile style={{fontSize:"2rem"}} /></Link>
      </li>
      <li className="nav-item">
            <Link className="nav-link" to={'/Cart/'} style={{ position: "relative" }}>
              <IoCartOutline style={{ fontSize: "2rem" }} />
              {CartNumber > 0 && (
                <button type="button" className="  py-1 px-2 position-absolute top-0 translate-middle badge  bg-dark">
                  {CartNumber}
                </button>
              )}
            </Link>
          </li>
          
    </ul>
  </nav>
  <hr className='m-0 p-0' />
  <div className="option m-0 p-0 d-flex justify-content-center align-items-center">
<nav className="navbar navbar-expand-lg navbar-light ">
  <Link to={'/'} className="navbar-brand">Home</Link>
  <button 
  className="navbar-toggler" 
  type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarNav" 
  aria-controls="navbarNav" 
  aria-expanded="false" 
  aria-label="Toggle navigation"
>

    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active dropdown position-relative">
        <a className="nav-link dropdown-toggle" href="#">Mashroo Features</a>
        <ul className="dropdown-menu  mt-0 border-0 rounded-0 shadow">
    <li><Link className="dropdown-item" to="/DanishDawar/">DanishDawar</Link></li>
    <li><Link className="dropdown-item" to="/OurStory/">Our-Story</Link></li>
    <li><Link className="dropdown-item" to="/Sale/">Sale</Link></li>
</ul>
      </li>
      <li className="nav-item active dropdown position-relative">
        <a className="nav-link dropdown-toggle" href="#">Mashroo Updates</a>
        <ul className="dropdown-menu  mt-0 border-0 rounded-0 shadow">
    <li><Link className="dropdown-item" to="/Blog/">Why Mashroo’s Kurtas Are Perfect for Daily & Occasion Wear</Link></li>
    <li><Link className="dropdown-item" to="/BlogTO/">Mashroo Ramadan 2025 Collection – Enhance Your Festive Wardrobe</Link></li>
    <li><Link className="dropdown-item" to="/BlogeThree/">Mashroo Expands in Mumbai – New Store Now Open at Mohammad Ali Road!</Link></li>
</ul>
      </li>
      <li className="nav-item active dropdown position-relative">
        <a className="nav-link dropdown-toggle" href="#">Mashroo Collection</a>
        <ul className="dropdown-menu  mt-0 border-0 rounded-0 shadow">
    <li><Link className="dropdown-item" to="/RamadanCollection/">Ramadan Collection '25</Link></li>
    <li><Link className="dropdown-item" to="/MarrakeshCollections/">Marrakesh Collection</Link></li>
    <li><Link className="dropdown-item" to="/BidayahCollection/">Bidayah Collection</Link></li>
</ul>
      </li>
      <li className="nav-item dropdown position-relative ">
        <a className="nav-link dropdown-toggle" href="#">Categorys</a>
        <ul className="dropdown-menu  mt-0 border-0 rounded-0 shadow">
    <li><Link className="dropdown-item" to="/Thobe/">Thobe</Link></li>
    <li><Link className="dropdown-item" to="/Abayas/">Abayas</Link></li>
    <li><Link className="dropdown-item" to="/KidsTee/">KidsTee</Link></li>
    <li><Link className="dropdown-item" to="/KurtaPajama/">KurtaPajama</Link></li>
    <li><Link className="dropdown-item" to="/MashrooEhrams/">MashrooEhrams</Link></li>
    <li><Link className="dropdown-item" to="/Cosate/">Cosate</Link></li>
    <li><Link className="dropdown-item" to="/Izaar/">Izaar</Link></li>
    <li><Link className="dropdown-item" to="/PthaniSuits/">PthaniSuits</Link></li>

</ul>
      </li>
      <li className="nav-item dropdown position-relative">
        <a className="nav-link  dropdown-toggle" href="#">Men</a>
        <ul className="dropdown-menu  mt-0 border-0 rounded-0 shadow">
    <li><Link className="dropdown-item" to="/Thobe/">Thobes</Link></li>
    <li><Link className="dropdown-item" to="/KurtaPajama/">KurtaPajama</Link></li>
    <li><Link className="dropdown-item" to="/PthaniSuits/">PthaniSuits</Link></li>
</ul>
      </li>
      <li className="nav-item dropdown position-relative">
        <a className="nav-link  dropdown-toggle" >Women</a>
        <ul className="dropdown-menu  position-absolute mt-0 border-0 rounded-0 shadow">
    <li><Link className="dropdown-item" to="/Abayas/">Abayas</Link></li>
    <li><Link className="dropdown-item" to="/Cosate/">Co-sate</Link></li>
  </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/KidsTee/'} >KidsTee</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to={'/Sale/'}>Sale</Link>
      </li>
      
    </ul>
  </div>
</nav>
</div>


    </section >
  )
}

export default Header