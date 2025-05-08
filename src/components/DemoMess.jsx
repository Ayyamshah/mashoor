import React from 'react'
import { Link } from 'react-router-dom';


const DoneMess = () => {
  return (
    <>
      <center>
        <div className=" p-5 " style={{ width: '18.5rem', margin: "5rem 0" }}>
          <img style={{ width: '10.5rem'}} src="/public/doneMessAnimation.gif" alt="..." />
          <div className="card-body">
          <Link className='card-text btn  order' to={"/"}>order Done</Link>
           
          </div>
        </div>
      </center>
    </>
  )
}

export default DoneMess