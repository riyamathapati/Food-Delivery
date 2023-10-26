import React from "react";
import"./Header.css"
// import React from "react";
// import *  as Icon from 'react-bootstrap-icons/'
import { Link } from "react-router-dom";
import './Home.css'

const Header=()=>{
    return(
        <div className="container-fluid">
            <div className="row" id="navbg">
                <div className="col-12">
                <nav class="navbar navbar-expand-xl ">
  <div class="container-fluid">
    <a class="navbar-brand h1 lead fw-bold " href="#">Quick<span className="forspancolor">Food</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul class="navbar-nav mx-auto mb-2 mb-lg-0"> */}
        {/* <li class="nav-item"> */}
          {/* <a class="nav-link active p-xl-4 " aria-current="page" href="#">Home</a> */}
    <Link to="*" className="nav-link active p-xl-4 nav-item">Home</Link>
        {/* </li> */}
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4 " href="#">AboutUs</a>
        </li> */}

<Link to="/AboutUs" className="nav-link active p-xl-4 nav-item">AboutUS</Link>
            {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">AboutUs</Link></li> */}
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4" href="#">Restaurant</a>
        </li> */}
        
        {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4"></Link></li> */}
        <Link to="/Restaurant" className="nav-link active p-xl-4 nav-item">Restaurant</Link>
        {/* <li class="nav-item">
          <a class="nav-link  p-xl-4" href="#">RestaurantCard</a>
        </li> */}
        
        {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">RestaurantCard</Link></li> */}
        <Link to="/RestaurantCard" className="nav-link active p-xl-4 nav-item">RestaurantCard</Link>
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4" href="#">Blog</a>
        </li> */}
           {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">Blog</Link></li> */}
           <Link to="/Blog" className="nav-link active p-xl-4 nav-item">Blog</Link>
        
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4" href="#">Services</a>
        </li> */}
           {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">Services</Link></li> */}
           <Link to="/Services" className="nav-link active p-xl-4 nav-item">Services</Link>
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4" href="#">Cheakouts</a>
        </li> */}
           {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">Cheakouts</Link></li> */}
           <Link to="/Cheakouts" className="nav-link active p-xl-4 nav-item">Cheakouts</Link>
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4" href="#">PricingTable</a>
        </li> */}
           {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">PricingTable</Link></li> */}
           <Link to="/PricingTable" className="nav-link active p-xl-4 nav-item">PricingTable</Link>
        {/* <li class="nav-item">
          <a class="nav-link p-xl-4" href="#"><Link to="/Home" className="nav-link  p-xl-4">Contact</Link></a>
        </li> */}
           {/* <li className="nav-item"><Link to="/Home" className="nav-link  p-xl-4">Contact</Link></li> */}
           <Link to="/Contact" className="nav-link active p-xl-4 nav-item">Contact</Link>
       {/* </ul> */}
       {/* cart icon here */}
       <i class="bi bi-bag-fill px-2 "></i>
       <div>
    
       </div>
      
        <button class="btn px-4 btn-1 d-none  d-xxl-block  " type="submit">OrderNow</button>
      
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>
    )
}
export default Header;