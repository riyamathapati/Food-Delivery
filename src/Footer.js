import footerimg from './Images/homefooterimg.png';


const Footer=()=>{
    return(
        <>
          <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                         <img src={footerimg} className='img-fluid'/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2 className='display-4 fw-bold '>Get the menu of your favorite restaurants every day</h2>
                            <form className='my-5'><i class="bi bi-bell lead "></i><input type="text" name="email" placeholder="Enter email address" className='py-3 rounded-3 px-5 mb-3'/>  <button class="btn fw-bold px-5 py-3 ms-2 btn-1 " type="submit">Subscribe</button></form>

                        </div>
                    </div>
                  </div>
                  {/* endofsecondfooter */}



                  {/* startof main footer */}
                  <div className='container-fluid mt-5 pt-5'>
                    <div className='row py-5  ' id="footerbg">
                        <div className='col-12 col-md-6 col-lg-4 mb-3 py-5'>
                            <h2>QUICK<span id='forfootertextcolor'>EAT</span></h2>
                            <h2 className='displaay-3 display-6 fw-bold text-white'>The Best Restaurants in Your Home</h2>
                            <p className='Forpyara3 py-3 '>Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus pretium quam.</p>


                        </div>
                        <div className='col-12 col-md-6 col-lg-4 py-5  '>
                           <ul className="list-unstyled fw-bolder "><h2>Menu</h2>
                            <a><li>Home<i class="bi bi-arrow-right p-1 "></i></li></a>
                            <a><li>AboyUs<i class="bi bi-arrow-right p-1"></i></li></a>
                            <a><li>Restaurant<i class="bi bi-arrow-right p-1"></i></li></a>
                           <a> <li>RestaurantCard<i class="bi bi-arrow-right p-1"></i></li></a>
                         <a><li>Blog<i class="bi bi-arrow-right p-1"></i></li></a>
                           <a> <li>Service<i class="bi bi-arrow-right p-1 "></i></li></a>
                          <a>  <li>CheakOut<i class="bi bi-arrow-right p-1 "></i></li></a>
                         <a>   <li>PricingTable<i class="bi bi-arrow-right p-1"></i></li></a>
                          <a>  <li>Contact<i class="bi bi-arrow-right p-1"></i></li></a>
                        </ul>


                        </div>
                        <div className='col-12 col-md-6 col-lg-4 py-5 '>
                            <h2>Contact Us</h2>
                            <p><i class="bi bi-geo-alt-fill"></i>1717 Harrison St, San Francisco, CA 94103, United States</p>
                            <hr/>
                            <p><i class="bi bi-envelope-fill"></i>quickeat@mail.net</p>
                            <p className=''>+1 425 326 16 27</p>

                            <div>
                            <i class="bi bi-facebook mx-1 "></i><i class="bi bi-instagram mx-1 "></i>
                            <i class="bi bi-twitter mx-1 "></i>
                            </div>



                        </div>
                        <hr/>
                   <div className='d-flex row '>
                    <div className='col-12 col-md-6'><p>All rights resereved by Riya</p></div>
                   
                    <div className='col-12 col-md-6 text-end '>    <p >Privacy Policy   Terms & Services </p></div>
                   </div>

                    </div>

                  </div>
                  </>
    )
}
export default Footer;