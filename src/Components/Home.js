
import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import p1 from '../imajes/to.jpg'
import p2 from '../imajes/to.jpg'
import p3 from '../imajes/to.jpg'
import p from '../imajes/AK.jpg'
import './Nav.css';

export default function Carousel() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={p1} alt='./' className="img-fluid" class="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={p2} alt='./' className="img-fluid" class="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={p3}alt="./" className="img-fluid" class="d-block w-100" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div> 
    </div>
    <div className="container-fluid">
        <div className='row'>
          <div className='col-md-6  p-4'>
              <h1 className='pt-5'>Hi   👋, </h1>
              <h2>  <span>I'm</span> Ashok kumar,<br/><span>Front-end Developer</span></h2><br/>
              <p className='pt-1'>Sometimes, you may need to position one image on top of another. <br/>This can be easily done with HTML and CSS. For that, you can use the CSS position and z-index properties. First, we </p>
        </div>
        <div className='col-md-6 p-5'>
          <img src={p} className='img-fluid' alt='... 'width={200} />
        </div>
      </div>
      < div className='footer'>
        <div className='col-md-12 mt-4'>  
          </div>
        </div>
      
        
        <footer id='ba'>
       <div>
       <span style={{color:'yellow',fontSize:'40px', marginRight:'20px'}}><FaTwitterSquare /></span>
        <span style={{color:'yellow',fontSize:'40px', marginRight:'20px'}}><SiLinkedin /></span>
        <span style={{color:'yellow',fontSize:'40px'}}><FaFacebook /></span> 
        <span style={{color:'yellow',fontSize:'40px'}}><FaInstagramSquare /></span> 
        
<h5>created By ASHOK KUMAR</h5>
</div>
        </footer>
      
        
   </div> 

    
    </>
  )
}
