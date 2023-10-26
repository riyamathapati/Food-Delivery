import React from "react";
import contactimghero from './Images/contacts-1.png';
import lastimg from './Images/servicesheroimg.jpg'
const Contact=()=>{
    return(
    <>
   <div className="container-fluid">
    <div className="container">
    <div className="py-4"><p className="lead fw-bold ">Home<i class="bi bi-arrow-right-short"></i>Pricing Table</p>
         </div>
        <div className="row">
            <div className="col-12 col-lg-7 py-5 ">
                <h2 className="display-4 fw-bold ">Contact us</h2>
                <p className="Foraboutuspyara4 mb-3 ">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>

                <div className="row">
                    <div className="col-12 col-lg-4 Forcontacthero shadow rounded-3 ">
                        <div><i class="bi bi-geo-alt-fill"></i></div>
                        <div className="63">1717 Harrison St, San<br/> Francisco, CA 94103,<br/> United States</div>
                    </div>
                    <div className="col-12 col-lg-4 Forcontacthero shadow rounded-3">
                        <div><i class="bi bi-chat-right-dots-fill"></i></div>
                        <div className=""><h6>quick.info@mail.net</h6><p>Lorem ipsum dolor sit.</p><h6>quick.info@mail.net</h6><p>Dolore magna aliqua</p>
                        </div>

                    </div>
                    <div className="col-12 col-lg-4 Forcontacthero shadow rounded-3">
                        <div><i class="bi bi-telephone-fill"></i></div>
                        <div><h6>+1 425 326 16 27</h6><p>Et netus et malesuada</p>
                        <h6>+1 425 326 16 27</h6><p>Enim tortor auctor urna</p>
                    </div>
                </div>

            </div>
           
        </div>
        <div className="col-12 col-lg-5">
                <img src={contactimghero} className="img-fluid " alt="img not foun"/>

            </div>
    </div>
    </div>

    {/* startof endgame */}
    <div className="container my-5  py-5 ">
        <div className="row justify-content-center ">
        <div className="col-12 col-lg-6  ">
                <img src={lastimg} alt="img not found" className="img-fluid rounded-5 "/>
            </div>
            <div className="col-12 col-lg-6">
                <h2 className="display-6 fw-bold ">Get In Touch</h2>
                <p className="Foraboutuspyara4">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.</p>
              <form>
              <input class="form-control form-control-lg mb-4" type="text" placeholder="enter name" aria-label=".form-control-lg example"/>
              <input class="form-control form-control-lg mb-4" type="text" placeholder="Enter mail id" aria-label=".form-control-lg example"/>
              <input class="form-control form-control-lg mb-4 " type="text" placeholder="Enter a message" aria-label=".form-control-lg example"/>
              <div >
                           
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 " type="submit">Send</button>
                        </div>
              </form>

            </div>
            {/* <div className="col-12 col-lg-5">
                <img src={lastimg} alt="img not found" className="img-fluid"/>
            </div> */}
        </div>
    </div>

    {/* end of main div */}
   </div>
   
    </>);
}
export default Contact;