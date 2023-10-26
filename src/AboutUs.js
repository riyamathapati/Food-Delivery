 import React from "react";
 import aboutusimghero from './Images/aboutusheroimg.jpg';
 import savetimeimg from './Images/aboutussavetimeimg.png';
 import cardimg1 from './Images/aboutuscardimg1.svg';
 import cardimg2 from './Images/aboutuscardimg2.svg';
 import cardimg3 from './Images/aboutuscardimg3.svg';
 import cardimg4 from './Images/aboutuscardimg4.svg';
 import vedioimg from './Images/aboutusvideioimg.jpg';
 import goodtasteimg from './Images/Aboutusgoodteaste.png';
 import team1 from './Images/team-1.png';
 import team2 from './Images/team-2.png';
 import team3 from './Images/team-3.png';

 




 import AboutusCard from "./AboutusCard";
 import OurteamCard from "./OurteamCard";
const AboutUs=()=>{

    const aboutcard=[
        {
            img:cardimg1,
            head:'Free Delivery',
            pyara:'Cras fermentum odio eu feugiat pretium nibh ipsum. Ut faucibus pulvinar elementum consequat integer enim neque volutpat.'
        },
        {
            img:cardimg2,
            head:'Save Your Time',
            pyara: 'Vulputate dignissim suspendisse in est ante in nibh mauris. Pretium nibh ipsum consequat nisl vel pretium lectus quam id.'
        },
        {
            img:cardimg3,
            head:'Regular Discounts',
            pyara: 'Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu.'
        },
        {
            img:cardimg4,
            head: 'Variety Food',
            pyara: 'Molestie a iaculis at erat pellentesque. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl.'
        }

    ];

    const team=[
        {
            teamimg:team1,
            teamname:'Kevin Adamson',
           teampyara: 'Pellentesque adipiscing commodo elit at imperdiet dui.'
        },
        {
            teamimg:team2,
            teamname:'Roxie Gilber',
           teampyara: 'Velit dignissim sodales ut eu sem integer vitae. Interdum varius sit amet mattis.'
        },
        {
            teamimg:team3,
            teamname:'Edgar Johnson',
          
           teampyara: '  At erat pellentesque adipiscing commodo elit.'
        },
    ]








    return(<>
<div className="container-fluid">
 {/* start of hero section */}

 <div className="container-fluid g-0  ">
    <div className="row justify-content-around    "id="abautusbgimg">
        <div className="col-12 col-lg-4 py-5  ">
            <div>
                <p>Home<i class="bi bi-arrow-right-short"></i>About Us</p>
                <h2 className="display-3 fw-bold ">Nothing to worry about with Quickeat</h2>
                <p className="Foraboutuspyara4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
 
            </div>

        </div>
        <div className="col-12 col-lg-4 about-img py-5 text-center">
            <img src={aboutusimghero}  className="img-fluid" alt="img-fluid"/>

        </div>

    </div>
 </div>
 {/* endofhero section */}

 {/* start of our mission to save your time */}
 <div className="container my-5">
    <div className="row justify-content-around ">
        <div className="col-12 col-lg-7 py-5 ">
            <div>
            <img src={savetimeimg}  className="img-fluid" alt="img-fluid"/>
 
            </div>

        </div>
        <div className="col-12 col-lg-5  py-5 ">
            <h2 className="display-4 fw-bold ">Our mission is to save you time</h2>
            <p className="Foraboutuspyara3">Viverra vitae congue eu consequat ac felis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.<br/>Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt augue interdum velit euismod in pellentesque.</p>
         

        </div>

    </div>
 </div>
 {/* end of our mission fro time saving */}


 {/* start of about us card */}
 <div className="container">
 <div className="row my-5 ">
    <div className="col-12 col-md-6 col-xl-3">
        <AboutusCard aboutcardimg={aboutcard[0].img}abouttitle={aboutcard[0].head}aboutinfo={aboutcard[0].pyara}/>
    </div>
    <div className="col-12 col-md-6 col-xl-3">
        <AboutusCard aboutcardimg={aboutcard[1].img}abouttitle={aboutcard[1].head} aboutinfo={aboutcard[1].pyara}/>
    </div>
    <div className="col-12 col-md-6 col-xl-3">
        <AboutusCard aboutcardimg={aboutcard[2].img}abouttitle={aboutcard[2].head} aboutinfo={aboutcard[2].pyara}/>
    </div>
    <div className="col-12 col-md-6 col-xl-3">
        <AboutusCard aboutcardimg={aboutcard[3].img}abouttitle={aboutcard[3].head}aboutinfo={aboutcard[3].pyara}/>
    </div>
 </div>
 </div>
 {/* endof about us card */}


 {/* start of wait a mini */}

 <div className="container my-5 py-5">
    <div className="row">
        <div className="col-12 col-md-6">
            <h2 className="display-4 fw-bold ">Wait a minute for delicious</h2>
            <p className="Foraboutuspyara4">
            Amet massa vitae tortor condimentum lacinia quis. Elit at imperdiet dui accumsan sit amet nulla facilisi. Lacus laoreet non curabitur gravida arcu ac tortor dignissim.
            </p>
            <p className="lead fw-bold">Interdum varius sit amet mattis.</p>
            <ul className="list-unstyled Foraboutuspyara4">
                <li><i class="bi bi-check-circle-fill p-1 "></i>Interdum varius sit amet mattis;</li>
                <li><i class="bi bi-check-circle-fill p-1 "></i>Sed elementum tempus egestas sed sed;</li>
                <li><i class="bi bi-check-circle-fill p-1 "></i>Sit amet purus gravida quis blandit;</li>
                <li><i class="bi bi-check-circle-fill p-1"></i>Feugiat pretium nibh ipsum consequat nisl vel pretium.</li>
             
            </ul>

        </div>
        <div className="col-12 col-md-5 position-relative video-section-img ">
            
            <img src={vedioimg} className="img-fluid rounded-5 " alt='img not found'/>
            <i class="bi bi-play-circle-fill position-absolute  "></i>
            
        </div>
    </div>
 </div>
 {/* end of wait a mini */}

 {/* start of good taste */}
 <div className="container-fluid my-5 py-5  g-0 ">
    <div className="row" id="goodtaste">
        <div className="col-12 col-lg-6 text-center ">
            <img src={goodtasteimg} className="img-fluid" alt="img not found"/>
        </div>
        <div className="col-12 col-lg-6 py-5 justify-content-center ">
            <div className="row  mx-auto">
                <div className="col-12 col-sm-6 py-5   ">
                    <h2 className="display-5 fw-bold ">Service shows good taste.</h2>
                </div>
                <div className="col-12 col-sm-6 py-5 ">
                    <div className="row mx-auto">
                        <div className="col-4  col-lg-6"><h2 className="display-3 fw-bold forabouth2color ">962</h2></div>
                        <div className="col-4  col-lg-6"><p className="Foraboutuspyara4">Satisfied<br/>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 py-5 ">
                <div className="row mx-auto">
                        <div className="col-4 col-lg-6"><h2 className="display-3 fw-bold  forabouth2color">12</h2></div>
                        <div className="col-4 col-lg-6"><p className="Foraboutuspyara4">Best<br/>Restaurants</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 py-5 ">
                <div className="row  ">
                        <div className="col-4 col-lg-6"><h2 className="display-3 fw-bold forabouth2color ">1K+</h2></div>
                        <div className="col-4  col-lg-6"><p className="Foraboutuspyara4">Food<br/>Delivered</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
 </div>
 
 {/* endofgoodtaste */}

 {/* startofourteam */}

 <div className="container my-5 py-5">
    <div className="row">
        <div className="col-12 mx-auto "><h2 className="text-center display-4 fw-bold">Our Team</h2>
       </div>
       <div className="col-12 mx-auto"> <p className="Foraboutuspyara4 text-center ">Enim lobortis scelerisque fermentum dui faucibus. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat vestibulum lectus mauris.Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Magna ac placerat vestibulum lectus mauris</p></div>
        <div className="col-12 col-sm-6 col-lg-4">
            <OurteamCard teammemberimg={team[0].teamimg}teammembername={team[0].teamname}teammemberinfo={team[0].teampyara}/>

        </div>
        <div className="col-12 col-sm-6 col-lg-4">
        <OurteamCard teammemberimg={team[1].teamimg}teammembername={team[1].teamname}teammemberinfo={team[1].teampyara}/>

        </div>
        <div className="col-12 col-sm-6 col-lg-4">
        <OurteamCard teammemberimg={team[2].teamimg}teammembername={team[2].teamname}teammemberinfo={team[2].teampyara}/>

        </div>
    </div>
 </div>

















{/* end of main div */}
</div>


    </>)
}
export default AboutUs;