import React from "react";
import restaurantheroimg from './Images/resaturantheroimg.png';
import logoimg1 from './Images/logos-1.jpg';
import logoimg2 from './Images/logos-2.jpg';
import logoimg3 from './Images/logos-3.jpg';

import ResatCards from "./ResatCards";
const Restaurant = () => {


    const InsideRestaCrads=[
        
            {
                img:logoimg1,
                title:'Kennington Lane Cafe',
                 btn1:'american',
                btn2:'steakhouse',
                btn3:'seafood',
                pyara:'Vulputate enim nulla aliquet porttitor lacus luctus. Suscipit adipiscing bibendum est ultricies integer. Sed adipiscing diam donec adipiscing tristique.'
    
            },
            {
                img:logoimg2,
                title:'Kings Arms',
                 btn1:'american',
                btn2:'steakhouse',
                btn3:'seafood',
                pyara:'Tortor at risus viverra adipiscing at in tellus. Cras semper auctor neque vitae tempus. Dui accumsan sit amet nulla facilisi. Sed adipiscing diam .'
    
            },
            {
                img:logoimg3,
                title:'The Victoria',
                 btn1:'american',
                btn2:'steakhouse',
                btn3:'seafood',
                pyara:'Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.'
    
            },
            {
                img:logoimg1,
                title:'Kennington Lane Cafe',
                 btn1:'american',
                btn2:'steakhouse',
                btn3:'seafood',
                pyara:'Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.'
    
            },
            {
                img:logoimg2,
                title:'Lanes of London',
                btn1:'american',
                btn2:'steakhouse',
                btn3:'seafood',
                pyara:'At erat pellentesque adipiscing commodo elit at imperdiet dui. Suspendisse faucibus interdum posuere lorem. Elit sed vulputate mi sit.'
    
            },
            {
                img:logoimg1,
                title:'The Andover Arms',
                 btn1:'healthy ',
                btn2:'steakhouse',
                btn3:'vegetarian',
                pyara:'Lacus vestibulum sed arcu non odio euismod lacinia at. Id neque aliquam vestibulum morbi. Ante metus dictum ullamcorper a lacus.'
    
            },
        
    ];
   
    return (<>
        <div className="container-fluid">

            {/* start of hero section */}

            <div className="container-fluid g-0  ">
                <div className="row justify-content-around align-content-center">
                    <div className="col-12 col-lg-4 py-5  ">
                        <div className="py-5">
                            <p>Home<i class="bi bi-arrow-right-short"></i>Restaurant</p>
                            <h2 className="display-4 fw-bold ">Restaurants</h2>
                            <p className="Foraboutuspyara4">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper..</p>

                        </div>

                    </div>
                    <div className="col-12 col-lg-6  py-5 text-center position-relative forrestaurantheroposition ">
                        <div className="position-absolute forrestaurantheroposition2 ">
                            <p className="forrestaurantherodecor p-2 rounded-1"><i class="bi bi-pencil-fill"></i>Burgers</p>
                            <p className="forrestaurantherodecor p-2 rounded-1"><i class="bi bi-pencil-fill"></i>Chicken</p>
                            <p className="forrestaurantherodecor p-2 rounded-1"><i class="bi bi-pencil-fill"></i>SteaksFish</p> </div>
                        <img src={restaurantheroimg} className="img-fluid" alt="img-fluid" />

                    </div>

                </div>
            </div>
            {/* endofhero section */}

            {/* 
startof choose 2 lunches pay for one */}

            <div className="container my-5 py-5">
                <div className="row" id="payforonesectionbg">
                    <div className="col-12">
                        <h2 className="display-3 py-5 fw-bold ">Choose 2 lunches<span className="forrestaturantspancolor"> <br />pay for one</span></h2>
                        <div >
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 " type="submit">OrderNow</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* end of pay for one */}
            {/* start of best restaturant card */}

            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-12 col-lg-5 my-5 ">
                        <ResatCards cardimg={InsideRestaCrads[0].img} cardtitle={InsideRestaCrads[0].title} cardbtn1={InsideRestaCrads[0].btn1} cardbtn2={InsideRestaCrads[0].btn2}cardbtn3={InsideRestaCrads[0].btn3}cardinfo={InsideRestaCrads[0].pyara}/>
                   

                    </div>
                    <div className="col-12 col-lg-5 my-5  ">
                    <ResatCards cardimg={InsideRestaCrads[1].img} cardtitle={InsideRestaCrads[1].title} cardbtn1={InsideRestaCrads[1].btn1} cardbtn2={InsideRestaCrads[1].btn2}cardbtn3={InsideRestaCrads[1].btn3}cardinfo={InsideRestaCrads[1].pyara}/>
                       

                    </div>
                    <div className="col-12 col-lg-5 my-5 ">
                    <ResatCards cardimg={InsideRestaCrads[2].img} cardtitle={InsideRestaCrads[2].title} cardbtn1={InsideRestaCrads[2].btn1} cardbtn2={InsideRestaCrads[2].btn2}cardbtn3={InsideRestaCrads[2].btn3}cardinfo={InsideRestaCrads[2].pyara}/>


                    </div>
                    <div className="col-12 col-lg-5 my-5 ">
                    <ResatCards cardimg={InsideRestaCrads[3].img} cardtitle={InsideRestaCrads[3].title} cardbtn1={InsideRestaCrads[3].btn1} cardbtn2={InsideRestaCrads[3].btn2}cardbtn3={InsideRestaCrads[3].btn3}cardinfo={InsideRestaCrads[3].pyara}/>


                       
                    </div>
                    <div className="col-12 col-lg-5 my-5 ">
                    <ResatCards cardimg={InsideRestaCrads[4].img} cardtitle={InsideRestaCrads[4].title} cardbtn1={InsideRestaCrads[4].btn1} cardbtn2={InsideRestaCrads[4].btn2}cardbtn3={InsideRestaCrads[4].btn3}cardinfo={InsideRestaCrads[4].pyara}/>


                    </div>
                    <div className="col-12 col-lg-5 my-5 ">
                    <ResatCards cardimg={InsideRestaCrads[5].img} cardtitle={InsideRestaCrads[5].title} cardbtn1={InsideRestaCrads[4].btn1} cardbtn2={InsideRestaCrads[5].btn2}cardbtn3={InsideRestaCrads[5].btn3}cardinfo={InsideRestaCrads[5].pyara}/>


                    </div>
                    
                </div>
            </div>















        </div>


    </>)
}
export default Restaurant;