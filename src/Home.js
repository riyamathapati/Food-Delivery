import React from "react";
import img1 from './Images/Homeheroimg.png';
// import img2 from'./Images/Homeimg for hero2.jpg';
import img3 from'./Images/home howit work1.png';
import img4 from'./Images/home how it work2.png';
import img5 from './Images/home how it works3.png';
import logoimg1 from './Images/logos-1.jpg';
import logoimg2 from './Images/logos-2.jpg';
import logoimg3 from './Images/logos-3.jpg';
import favimg from './Images/home-fav-img.png';
import reviewimg1 from './Images/Home review 1.png';
import reviewimg2 from './Images/Home review 2.jpg';
import joinpartnership1 from './Images/homejoinpartnershil1.jpg';
import joinpartnership2 from './Images/homejoinpartnershil2.jpg';
import newsimg from './Images/homenews.jpg';
import homefood1 from './Images/homefood1.jpg';
import homefood2 from './Images/homefood2.jpg';
import homefood3 from './Images/homefood3.jpg';


import HowitworksCard from "./HowitworksCard";
import Best from "./Best";
import './Home.css'
















const Home = () => {
    const Howitwork=[
        {
            img3:img3,
            titleno:1,
            title:"Select Restaurant",
            pyara:'Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.'
    
        },
        {
            img3:img4,
            titleno:2,
            title:"Select menu",
            pyara:'Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.'
    
        },
        {
            img3:img5,
            titleno:3,
            title:"Wait for delivery",
            pyara:'Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non'
    
        }
    ];


    const bestrestorant=[



        {
            best_img:logoimg2,
            best_title:'Kennington Lane Cafe',
            best_btn1:'american',
            best_btn2:'steakhouse',
            best_btn3:'seafood',
            best_pyara:'Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.'

        },
        {
            best_img:logoimg1,
            best_title:'The Wilmington',
            best_btn1:'american',
            best_btn2:'steakhouse',
            best_btn3:'seafood',
            best_pyara:'Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.'

        },
        {
            best_img:logoimg3,
            best_title:'The Wilmington',
            best_btn1:'healthy',
            best_btn2:'steakhouse',
            best_btn3:'vegetarian',
            best_pyara:'Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam donec adipiscing tristique.'
        }
    ];




    return (


        <>
            <div className="container-fluid">
                {/* start of hero */}
                <div className="row py-5 ps-5 d-flex justify-content-around" id="bgforhero">
                    <div className="col-12 col-lg-4  py-5 " >
                        <h1 className="display-2 fw-bold py-3 mb-3 ">The Best restaurants in your home</h1>
                        <p id="Forpyara">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div >
                           
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 " type="submit">OrderNow</button>
                        </div>



                    </div>
                    <div className="col-12 col-lg-8 text-center  ">
                     
                        <img src={img1} alt="photo is not found" className="img-fluid parentpositio"/>
                       </div>
                       
                </div>
                {/* end of hero */}



                {/* start of how it works */}
                <div className="row my-5 ">
                    <div className="col-12  text-center ">
                        <h1 className="fw-bold display-4 ">How It Works?</h1>
                    <p className="Forpyara2">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                   <br/>  metus vulputate eu scelerisque felis.</p></div>
                   <div className="col-12 col-lg-4 col-md-6 text-center my-5">
                    <HowitworksCard img={Howitwork[0].img3} headingno={Howitwork[0].titleno} heading={Howitwork[0].title} info={Howitwork[0].pyara} />
                  </div>
                   <div className="col-12 col-lg-4 col-md-6 text-center my-5 ">
                   <HowitworksCard img={Howitwork[1].img3} headingno={Howitwork[1].titleno} heading={Howitwork[1].title} info={Howitwork[1].pyara} />
                  
                   </div>
                   <div className="col-12 col-lg-4 col-md-6 text-center my-5 ">
                   <HowitworksCard img={Howitwork[2].img3} headingno={Howitwork[2].titleno} heading={Howitwork[2].title} info={Howitwork[2].pyara} />
                   
                   </div>


                </div>
                {/* endof how it work */}

                {/* startofbestresaturnt */}
              <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-12 col-lg-5 my-5 ">
                    <h2 className="display-5 fw-bold ">12 Best Restaurants in Your City</h2>
                    <p className="Forpyara3">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.</p>

                    </div>
                    <div className="col-12 col-lg-5 my-5  ">
                        <Best bimg={bestrestorant[0].best_img} btitle={bestrestorant[0].best_title} bbtn1={bestrestorant[0].best_btn1} bbtn2={bestrestorant[0].best_btn2} bbtn3={bestrestorant[0].best_btn3} binfo={bestrestorant[0].best_pyara}/>
                        
                  </div>
                    <div className="col-12 col-lg-5 my-5 ">

                    <Best bimg={bestrestorant[1].best_img} btitle={bestrestorant[1].best_title} bbtn1={bestrestorant[1].best_btn1} bbtn2={bestrestorant[1].best_btn2} bbtn3={bestrestorant[1].best_btn3} binfo={bestrestorant[1].best_pyara}/>

                    </div>
                    <div className="col-12 col-lg-5 my-5 ">

                        
                    <Best bimg={bestrestorant[2].best_img} btitle={bestrestorant[2].best_title} bbtn1={bestrestorant[2].best_btn1} bbtn2={bestrestorant[2].best_btn2} bbtn3={bestrestorant[2].best_btn3} binfo={bestrestorant[2].best_pyara}/>
                </div>

                <div className="text-center m3">    
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 text-center  " type="submit">See All<i class="bi bi-arrow-right mx-2 "></i></button></div>



                </div>
                </div>
                {/* endof best restorant */}

                {/* startoffavrestorant */}
                <div className="row my-5 py-5 d-flex  justify-content-around justify-content-center "id="favbg">
                    <div className="col-12 col-lg-6 col-xl-5 py-5 ">
                        <img src={favimg}alt="imgage not found" className="img-fluid "/>

                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 py-5 my-5  ">
                    <h2 className="display-3 fw-bold mb-2">Food from your favorite restaurants to your table</h2>
                    <p className="mb-4 Forpyara4">Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc.</p>
                    <div className=" ">    
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 text-center  " type="submit">Order Now</button></div>

                    </div>
                </div>
                {/* endoffavrestorant */}

                {/* startofservicesshowsgoodteast */}

  {/* counter */}
                 <div className="container-fluid d-flex justify-content-center g-3 mx-auto    ">
                <div className="row  ">
                    <div className="col-12 col-md-6 col-lg-4 text-center mb-5  ">
                    <h2 className="display-5 fw-bold">Service shows good taste.</h2>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 d-xl-flex align-self-center text-center   mb-3 ">
                    <span><h2 className="display-2 fw-bold txtcolor">976</h2></span><p className="py-2 px-2 Forpyara4">Satisfied<br/>Customer</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-2 d-xl-flex align-self-center  mb-3 text-center ">
                    <h2 class="display-2 fw-bold txtcolor " >12</h2>
                    <p className="py-2 px-2 Forpyara4">Best<br/>Restaurants</p>

                    </div>
                    <div className="col-12 col-md-6 col-lg-2 d-xl-flex justify-content-between  align-self-center mb-3 text-center ">
                    <h2 class="display-2 fw-bold txtcolor " >1<span>K+</span></h2>
                    <p className="py-2 px-2 Forpyara4 ">Food<br/>Delivered</p>
                </div>
                </div>
                </div>
                {/* endofserivceshowgoodtest */}
                {/* startofwhatcostomersaidabout */}
                <div className="container my-5 py-5"> 
                <div className="row  ">
                    <div className="col-12 col-lg-6 align-self-center mb-3   ">
                    <h2 className="display-4 fw-bold ">What customers say about us</h2>
                    <p className="Forpyara5">"Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Mauris a diam maecenas sed enim. Egestas diam in arcu cursus euismod quis. Quam quisque id diam vel".</p>
                    <div className="row">
                        <div className="col-2">
                            <img src={reviewimg2} className="img-fluid" alt="img not found"/>

                        </div>
                        <div className="col-8">
                            <p className="fw-bold">Thomasan Demos</p>
                       <div> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></div>

                       <i class="bi bi-arrow-left-circle my-2 mx-2"></i> <i class="bi bi-arrow-right-circle my-2 mx-2  "></i>
                        </div>
                    </div>


                    </div>
                    <div className="col-12 col-lg-6 forreviewposition ">
                        {/* <div><i class="bi bi-hand-thumbs-up position-absolute top-50"></i></div> */}
                        <img src={reviewimg1} className="img-fluid " alt="img not found"/>
                        <div><i class="bi bi-hand-thumbs-up "></i></div>
                        
                        </div>
                    </div>
                     </div>
                     {/* endofwhatcostomer saide about */}

                  <div className="row d-flex justify-content-center forjoinpartnershipbg my-5  ">
                    <div className="col-12 display-4 h1 fw-bold text-center py-5 text-white  ">Want to Join Partnership?</div>
                    <div className="col-12 col-lg-6 join-img py-3 pb-5">
                        <img src={joinpartnership1} className="img-fluid" alt="image not found"/>
                        

                    </div>
                    <div className="col-12 col-lg-6 join-img py-3  pb-5 ">
                    <img src={joinpartnership2} className="img-fluid" alt="image not found"/>

                    </div>
                  </div>
                  {/* endofjoin partnership */}


                  {/* start of news and events */}

                  <div className="container my-5 py-5  ">
                    <div className="row">
                        <div className="col-12 "><h2 className="display-3 fw-bold ">Latest news and<br/> events</h2></div>
                
                    <div className="col-12 col-xl-6">
                        <div className="row">
                            <div className="col-12">
                                <img src={newsimg} className="img-fluid" alt="img not found"/>
                                <h2 className="fw-bold mb-3 mt-3">We Have Received An Award For The Quality Of Our Work</h2>
                                <p className="Forpyara4">Donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed libero. Et magnis dis parturient montes nascetur. Praesent semper feugiat nibh sed pulvinar proin gravida.</p>
                                <a href="#" id="foracnchore" className="lead fw-bold ">Read More <i class="bi bi-arrow-right mx-2 "></i></a>
                                <div className="text-secondary my-2 "><i class="bi bi-person-fill p-2 "></i>By Quickeat<i class="bi bi-calendar3 p-2 "></i>01.10.2023<i class="bi bi-eye-fill p-2"></i>145</div>
                            </div>
                        </div>


                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="row mb-2 d-flex justify-content-center" id="fornewsimg">
                            <div className=" col-12 col-sm-4 mb-2 text-center">
                                <img src={homefood1} className="img-fluid  " alt="img not found"/>
                            </div>
                            <div className="col-8 mb-2">
                                <button type="button "  className="newsbutton mx-1 ">restaurants</button><button type="button " className="newsbutton  mx-1 ">cooking</button>
                                <h5 className="fw-bold my-1 ">With Quickeat you can order fod for the whole day</h5>
                                <p className="Forpyara3 d-none d-sm-block ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                            </div>
                            <div className=" col-12 col-sm-4 mb-2 text-center">
                                <img src={homefood2} className="img-fluid" alt="img not found"/>
                            </div>
                            <div className="col-8 mb-2">
                            <button type="button " className="newsbutton mx-1 ">restaurants</button><button type="button " className="newsbutton mx-1 ">cooking</button>
                                <h5 className="fw-bold my-1 ">127+ Couriers On Our Team!</h5>
                             <p className="Forpyara3 d-none d-sm-block">Urna condimentum mattis pellentesque id nibh tortor id aliquet. Tellus at urna condimentum mattis...</p>
                                
                            </div>
                            <div className=" col-12 col-sm-4 mb-2 text-center ">
                                <img src={homefood3} className="img-fluid" alt="img not found"/>
                            </div>
                            <div className="col-8 mb-2">
                            <button type="button " className="newsbutton mx-1 ">restaurants</button><button type="button " className="newsbutton mx-1 ">cooking</button>
                                <h5 className="fw-bold my-1 ">Why You Should Optimize Your 5enu for Delivery</h5>
                              <p className="Forpyara3 d-none d-sm-block">Enim lobortis scelerisque fermentum dui. Sit amet cursus sit amet dictum sit amet. Rutrum tellus...</p>
                                
                            </div>

                            </div>

                        </div>
                    </div>
                  </div>
                  {/* endofnews and events */}

                

                









            </div>
            {/* endofmaindiv */}






            \</>)
}
export default Home;