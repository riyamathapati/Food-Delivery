import React from "react";
import serviceheroimg from './Images/servicesheroimg.jpg';

import cardimg1 from './Images/aboutuscardimg1.svg';
import cardimg2 from './Images/aboutuscardimg2.svg';
import cardimg3 from './Images/aboutuscardimg3.svg';
import cardimg4 from './Images/aboutuscardimg4.svg';
import ServicesCards from "./ServicesCard";
import img3 from'./Images/home howit work1.png';
import img4 from'./Images/home how it work2.png';
import img5 from './Images/home how it works3.png';
import ServiceHowitworks from "./ServiceHowitworks";
const Services=()=>{

    const servicescardlist=[
        {
            img:cardimg1,
            head:'Save Your Time',
            pyara:'Turpis cursus in hac habitasse platea. Magna fringilla urna porttitor dolor purus non enim. Molestie nunc non blandit.'

        },
        {
            img:cardimg2,
            head:'Variety Food',
            pyara:'Tempor orci dapibus ultrices in iaculis nunc sed augue. Sed euismod nisi porta lorem mollis aliquam ut porttitor leoero volutpat.'

        },
        {
            img:cardimg3,
            head:'Free Delivery',
            pyara:'Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum integer ero volutpat sed cras ornare ero volutpat sed cras ornare .'

        },
        {
            img:cardimg4,
            head:'Regular Discounts',
            pyara:'Morbi leo urna molestie at elementum eu facilisis sed odio. Mattis nunc sed blandit libero volutpat sed cras ornare.'

        },
    ]

    const serviceshowitworks=[
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
    return(<>
   <div className="container-fluid">
<div className="container-fluid g-0">

    <div className="row py-5 " id="servicebg">
        <div className="col-12 col-lg-6 ">
        <div className="py-4"><p className="lead fw-bold ">Home<i class="bi bi-arrow-right-short"></i>Services</p></div>
            <h2 className="display-3 fw-bold ">Service shows good taste</h2>
            <p className="Foraboutuspyara4">Mauris nunc congue nisi vitae suscipit tellus mauris. Ac tincidunt vitae semper quis lectus. Sollicitudin ac orci phasellus egestas tellus.</p>
            <div className=" mt-4 mb-3">    
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 text-center  " type="submit">Select Restaurant<i class="bi bi-arrow-right mx-2 "></i></button></div>
            </div>
    
        <div className="col-12 col-lg-6  ">
            <div className="row justify-content-center hero-section-img-service">
                <div className="col-6 ">
                    <img src={serviceheroimg} alt="img-not found" className="img-fluid rounded-5 "/>
                </div>
                <div className="col-6">
                    <h2 className="display-3 fw-bold text-warning p-2 ">1k+</h2>
                    <p>Food<br/>Delivered</p>
                </div>
                <div className="col-6  ">
                <h2 className="display-3 fw-bold text-warning mx-5">12</h2>
                    <p className="px-3 mx-5">Best<br/>Restaurants</p>
              
                </div>
                <div className="col-6 ">
                 
                    <img src={serviceheroimg} alt="img-not found" className="img-fluid rounded-5 "/>
                </div>
            </div>


        </div>
    </div>
</div>
{/* end of hero section */}
<div className="container my-5  py-5 ">
    <div className="row">
        <div className="col-12 col-xl-6">
            <h2 className="display-5 fw-bold ">Make you easier and happier</h2>
            <p className="Foraboutuspyara4">Risus quis varius quam quisque id diam vel quam elementum. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Mauris pharetra et ultrices neque. Id ornare arcu odio ut sem. Sed vulputate mi sit amet mauris.s</p>
            

        </div>
        <div className="col-12 col-xl-6">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <ServicesCards serviceimg={servicescardlist[0].img} servicetitle={servicescardlist[0].head}serviceinfo={servicescardlist[0].pyara}/>

                </div>
                <div className="col-12 col-lg-6">
                <ServicesCards serviceimg={servicescardlist[1].img} servicetitle={servicescardlist[1].head}serviceinfo={servicescardlist[1].pyara}/>

                </div>
            </div>

        </div>

         
        <div className="row py-3 ">
            <div className="col-12 col-xl-6">
            <div className="row">
                <div className="col-12 col-lg-6">
                <ServicesCards serviceimg={servicescardlist[2].img} servicetitle={servicescardlist[2].head}serviceinfo={servicescardlist[2].pyara}/>

                </div>
                <div className="col-12 col-lg-6">
                <ServicesCards serviceimg={servicescardlist[3].img} servicetitle={servicescardlist[3].head}serviceinfo={servicescardlist[3].pyara}/>
                    
                </div>
            </div>
            </div>
            <div className="col-12 col-xl-6">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-5 fw-bold ">
                        Best quality Food and Restaurant
                        </h2>
                    </div>
                    <div className="col-12 col-lg-6 Foraboutuspyara4"><p><i class="bi bi-check-circle-fill p-1"></i>Duis ultricies lacus sed turpis tincidunt;</p></div>
                    <div className="col-12 col-lg-6 Foraboutuspyara4"><p><i class="bi bi-check-circle-fill p-1"></i>Lectus vestibulum mattis ullamcorper;</p></div>
                    <div className="col-12 col-lg-6 Foraboutuspyara4"><p><i class="bi bi-check-circle-fill p-1"></i>Massa tempor nec feugiat nisl pretium;</p></div>
                    <div className="col-12 col-lg-6 Foraboutuspyara4"><p><i class="bi bi-check-circle-fill p-1"></i>velit sed ullamcorper morbi tincidunt ornare.</p></div>
                </div>
            </div>

        </div>
        
    </div>
</div>
{/* endofservices card */}
{/* start of how it works */}
<div className="container mb-4 ">
    <div className="row py-5 ">
        <div className="col-12 text-center "><h2 className="display-3 fw-bold ">How It Works</h2>
        <p className="Forpyara3">Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate eu scelerisque felis.</p></div>
        <div className="col-12 col-lg-4 ">
        <ServiceHowitworks img={serviceshowitworks[0].img3} headingno={serviceshowitworks[0].titleno} heading={serviceshowitworks[0].title} info={serviceshowitworks[0].pyara} />
        </div>
        <div className="col-12 col-lg-4">
        <ServiceHowitworks img={serviceshowitworks[1].img3} headingno={serviceshowitworks[1].titleno} heading={serviceshowitworks[1].title} info={serviceshowitworks[1].pyara} />
        </div>
        <div className="col-12 col-lg-4">
        <ServiceHowitworks img={serviceshowitworks[2].img3} headingno={serviceshowitworks[2].titleno} heading={serviceshowitworks[2].title} info={serviceshowitworks[2].pyara} />
        </div>
    </div>
</div>






{/* end of maindiv */}
   </div>
   
   </>)
}
export default Services;