import React from 'react'
import "./form.scss"

const form = () => {
  return (
    <div>
         <section>
      <div className="secContainer container">
        <div className="homeText"></div>

        <div className="homeCard grid">
          <div className='div1'>
          <button className='navbtn'>Local</button>
          <button className='navbtn'>Local</button>
          <button className='navbtn'>Local</button>
          </div>
          <div className='div2'>
        <div className="locationDiv">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="Dream Destination"/>
        </div>
        <div className="distDiv">
          <label htmlFor="Distance">Location</label>
          <input type="text" placeholder=" Meters"/>
        </div>
        <div className="priceDiv">
          <label htmlFor="price">Location</label>
          <input type="text" placeholder="price "/>
        </div>
        <div>
             <button className='btn '>Search</button>
        </div>
        </div>

      </div>
            </div>
    </section>
    </div>
  )
}

export default form
