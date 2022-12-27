import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <artice className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Color psychology</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Choosing best layout</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Inline apps(password generator etc.)</p>
            </li>
        
          </ul>
        </artice>
        {/* End of UI/UX */}
        <artice className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Resturant</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gym</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>School</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bank</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Any other type website</p>
            </li>

          
          </ul>
        </artice>
        {/* Web development */}
        <artice className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Making music</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Voicing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photography</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Edit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fashion and Style</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Food and recepies</p>
            </li>
           
          </ul>
        </artice>
        {/* Content creation */}
      </div>
    </section>
  )
}

export default Services
