import React from 'react'
import tea from "../assets/tea2.jpg";
import {Link} from "react-router-dom";
import  './main.css'

import { IoLogoFacebook } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import logo from "../assets/logo.png"
import tea3 from "../assets/tea3.jpg"

function About() {
    return (
        <div>
                    <header className="GreyHeader">
           {/* Navbar section */}

           <nav class="navbar navbar-expand fixed-top bg- text-right">
           <div class="collapse navbar-collapse" id="navbar">

           <ul class="navbar list-unstyled ml-auto">
           <li><Link to="/" class="nav-link m-2 menu">Home</Link></li>
           <li><Link to="/about" class="nav-link m-2 menu">About</Link></li>
            
          </ul>
          </div>
            </nav>
          {/* End of navbar */}
          
          </header>
          {/* End of header */}
         <div class="img">
         </div>


            <div class="container">
              <div class="row">
              <div class="col-md-7 about-images my-6 none d-lg-block">
                <img src={tea} alt="logo" width="500" />
                </div>
                <div class="col-md-5 my-6"> 
                <h2 className="featurette-heading">About <span className="text-muted">Us</span></h2>
                  <p class="text">Libero pharetra vel.nibh et, fringilla sollicitudin orci. Integer pharetra magna non ante blandit lobortisLibero pharetra vel. Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci. Integer pharetra magna non ante blandit lobortis. Sed mollis.</p>
                </div>
              </div>
            </div>
            <footer className="site-footer mt-5">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 image">
        <div class="image"><img src={logo}  width="100" /> </div>
        <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Address</h6>
          Sankhamul,Kathmandu
          Sankhamul,Kathmandu
          Sankhamul,Kathmandu
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Contact Us</h6>
           +977-985642312

      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#">Miraki Tech</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><IoLogoFacebook></IoLogoFacebook></a></li>
          <li><a className="instagram" href="#"><GrInstagram></GrInstagram></a></li>
          <li><a className="whatsapp" href="#"><IoLogoWhatsapp /></a></li>
            
        </ul>
      </div>
    </div>
  </div>
</footer>
        </div>
    )
}

export default About
