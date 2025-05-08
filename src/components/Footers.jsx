import React from 'react'
import { FaFacebookSquare, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiDeliveryTruck, CiClock2 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";

const Footers = () => {
  return (
    <>
      <div className="Footers-top mb-0  bg-dark text-light ">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-3  text-center">
              <div className="icon fs-3"><CiDeliveryTruck /></div>
              <h5>Express delivery!</h5>
            </div>
            <div className="col-lg-3 text-center">
              <div className="icon fs-3"><CiClock2 /></div>
              <h5>Customer Support</h5>
            </div>
            <div className="col-lg-3 text-center">
              <div className="icon fs-3"><FaRegMessage /></div>
              <h5>Buy On WhatsApp</h5>
            </div>
            <div className="col-lg-3 text-center">
              <div className="icon fs-3"><MdOutlinePayment /></div>
              <h5>Secure Payment</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fulid mb-5 mt-0 py-5 Footer">
        <div className="row">
          <div className="col-lg-3 footer-lofo ">
            <img src="/logo.svg" alt="" />
            <p className='ms-5'>Mashroo, with its expertise,
              has impeccably made an unmatched space in
              the field of modest clothing through its traditionally modern range of thobes and abayas.</p>
            <ul className="list-unstyled d-flex  ">
              <li className="ms-3 fs-3"><a className="link-dark " href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg><FaFacebookSquare /></a></li>
              <li className="ms-3 fs-3 "><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg><FaYoutube /></a></li>
              <li className="ms-3 fs-3 "><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg><FaInstagram /></a></li>
              <li className="ms-3 fs-3 "><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg><FaLinkedin /></a></li>
            </ul>
          </div>
          <div className="col-lg-9">
            <footer className="py-5">
              <div className="row mx-5">
                <div className="col-6 col-md-3 mb-3">
                  <h5>Support</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQ</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Wholesale Enquiry</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shipping & Delivery Policy</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tracking Order</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-3 mb-3">
                  <h5>Quick links</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our Offline Stores </a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Shipping & Delivery Policy</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Replacement & Refund Policy </a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Refund policy</a></li>
                  </ul>
                </div>




                <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Newsletter</h5>
                    <p>Sign up for exclusive offers, original stories, events and more.</p>
                    <div className=" flex-column flex-sm-row w-90 gap-2">
                      <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                      <button className="btn btn-dark text-light mt-4 py-2 px-5" type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>


            </footer>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-5 py-4 my-4 mt-5 border-top border-dark">
          <p className='m-0 p-0'>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex  ">
            <li className="ms-3 fs-3"><a className="link-dark " href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg><FaFacebookSquare /></a></li>
            <li className="ms-3 fs-3 "><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg><FaYoutube /></a></li>
            <li className="ms-3 fs-3 "><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg><FaInstagram /></a></li>
            <li className="ms-3 fs-3 "><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footers
