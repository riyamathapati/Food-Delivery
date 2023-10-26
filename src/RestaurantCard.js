import React from "react";
import logoimg1 from './Images/logos-1.jpg';

import favimg from './Images/home-fav-img.png';
import Dish from "./Dish";
import dish1 from './Images/dish-1.png';
import dish2 from './Images/dish-2.png';
import dish3 from './Images/dish-3.png';
import dish4 from './Images/dish-4.png';
import dish5 from './Images/dish-5.png';
import dish6 from './Images/dish-6.png';
import dish7 from './Images/dish-7.png';
import dish8 from './Images/dish-8.png';
import dish9 from './Images/dish-9.png';
const RestaurantCard=()=>{

const RestaurantDish=[
    {
        img:dish1,
        head:'Egg, kiwi and sauce tomatoes  chilli',

    },
    {
        img:dish9,
        head:'Potatoes with pork and dried fruits',
        
    },
    {
        img:dish8,
        head:'Fruits with rice tomatoes  chips',
        
    },
    {
        img:dish7,
        head:'Vegetables with tomatoes  rice chips',
        
    },
    {
        img:dish6,
        head:'Rice with shrimps tomatoes  and kiwi.',
        
    },
    {
        img:dish5,
        head:'Pork with vegetables tomatoes  and...',
        
    },
    {
        img:dish4,
        head:'Spaghetti with mushrooms  and...',
        
    },
    {
        img:dish3,
        head:'Spaghetti with mushrooms t and...',
        
    },
    {
        img:dish2,
        head:'Veal meat, tomatoes tand...',
        
    },
    {
        img:dish1,
        head:'Sliced pork, avocado t and...',
        
    },
]


    return(<>
    <div className="container-fluid">

        <div className="container-fluid   ">
            <div className="row justify-content-around  " id="restaurantcardbg">
                <div className="py-4"><p>Home<i class="bi bi-arrow-right-short"></i>RestaurantCards</p></div>
                <div className=" col-lg-6 col-12">
                <div className="row">
            <div className="col-4 ">
                <img alt="logo" src={logoimg1} className="img-fluid rounded-1 mb-3 "/>
                </div>
                        
                        <div className="col-9 mb-5 py-5 ">
                        <div className="cafa"><h3 ><a href="/restaurant-card" className="forlink fw-bold mb-3 display-6">Lanes of London</a></h3><div className="py-3">Rate <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div><div className="cafa-button"> <a href="#" className="forlink px-2 mb-2 ">american</a> <a href="#" className="forlink px-2  mb-2 ">steakhouse</a> <a className="forlink px-2 mb-2" href="#">seafood</a></div><p className="Foraboutuspyara4 mt-2 py-3">At erat pellentesque adipiscing commodo elit at imperdiet dui. Suspendisse faucibus interdum posuere lorem. Elit sed vulputate mi sit.</p></div>

                        </div>

                        </div>
                       
                        
                </div>
                <div className="col-lg-6 col-12 Restaurantcardheroimg">
                            <img src={favimg} className="img-fluid w-75 rounded-5 " alt="img not found"/>
                        </div>
            </div>
        </div>
         {/* end of hero  */}
         {/* start of dishs */}
         <div className="container">
            <div className="row">
                <div className="12">
                    <pre className="lead fw-bold"><span className="text-warning">Break-Fast </span>Lunch  Dinner </pre>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Dish dishimg={RestaurantDish[0].img} disname={RestaurantDish[0].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[1].img} disname={RestaurantDish[1].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[2].img} disname={RestaurantDish[2].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[3].img} disname={RestaurantDish[3].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[4].img} disname={RestaurantDish[4].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[5].img} disname={RestaurantDish[5].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[6].img} disname={RestaurantDish[6].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[7].img} disname={RestaurantDish[7].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                <Dish dishimg={RestaurantDish[8].img} disname={RestaurantDish[8].head}/>
                </div>
            </div>
         </div>









        {/* endofmaindiv */}
    </div>

    </>)
}
export default RestaurantCard;