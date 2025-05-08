import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <div className="container-fluid bg-light my-5">
        <div className="row justify-content-center">
          <div className="col-lg-11 d-flex justify-content-center">
            <img src="/Blog/MashrooBlog01.webp" alt="" className="img-fluid" />
          </div>
          <h3 className="text-center my-5">Why Mashroo’s Kurtas Are Perfect for Daily & Occasion Wear</h3>
        </div>

        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12 text-start">

              <p className="my-4">Discover timeless elegance, unmatched comfort, and effortless style with every piece.</p>
              <hr />
              <p className="my-4">

                In the world of men’s ethnic wear, kurtas remain a staple
                that never goes out of style. Whether you're dressing for daily prayers, work-from-home comfort, festive occasions, or formal family gatherings, Mashroo’s
                kurtas are thoughtfully crafted to fit seamlessly into every aspect of your life</p>

              <h3>1. Crafted for Comfort – Perfect for Daily Wear</h3>
              <p>When it comes to daily wear, comfort is king. Mashroo’s kurtas are made using lightweight, breathable fabrics such as cotton and blended linens.
                These materials ensure all-day comfort, even during India’s warmest months.</p>
              <p>Whether you're working, attending classes, or stepping out for errands, these kurtas allow you to move
                freely while maintaining a polished and refined appearance.</p>

              <div className="d-flex justify-content-center my-4">
                <img className="img-fluid w-100" src="/Blog/blogbenner.jpg" alt="" />
              </div>

              <hr />
              <h3>2. Designed with Detail – Ideal for Special Occasions</h3>
              <p>Whether you're working, attending classes, or stepping out for errands, these kurtas allow you to move
                freely while maintaining a polished and refined appearance.</p>
              <p>The beauty of these kurtas lies in their versatility—pair them with a
                pyjama, churidar, or formal trousers, and you’re good to go.</p>

              <hr />
              <h3>3. Perfect Fit for Every Age Group</h3>
              <p>From teens to elders, Mashroo offers a wide size range to suit every man’s needs. Whether you're shopping for yourself or coordinating a family look,
                there’s a kurta for everyone—including kids and teens.</p>

              <p>The universal appeal of the kurta makes it an effortless choice for men of all generations.</p>
              <hr />
              <h3>4. Minimal to Majestic – One Kurta, Many Looks</h3>
              <p>Mashroo’s design philosophy ensures every kurta can be styled in multiple ways. A plain white kurta can be your daily go-to or easily transformed into an
                occasion outfit with a festive dupatta or jacket.</p>
              <p>Looking for minimalist or statement-making? You’ll find both under the Mashroo umbrella.</p>

              <hr />
              <h3>5. Affordable Luxury at Its Best</h3>
              <p>Each Mashroo kurta is a product of fine craftsmanship, quality control, and fabric excellence. Despite their luxurious appeal, the kurtas are priced reasonably—making them a
                favorite among fashion-conscious yet value-driven shoppers.</p>

              <hr />
              <h3>Shop the Collection Now</h3>
              <p>📍 Online at Mashroostore.com<br />
                📍 Visit Mashroo store in Mumbai, Bangalore, or Hyderabad
              </p>

              <hr />
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

export default Blog;
