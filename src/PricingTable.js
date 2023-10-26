 import React from "react";
 import dish1 from './Images/dish-1.png';
import dish2 from './Images/dish-2.png';
import dish3 from './Images/dish-3.png';
import PricingtableCards from "./PricingtableCards";
const PricingTable=()=>{

    const pricecard=[
        {
            img:dish1,
            head:'Small Business Lunch',
            pyara: 'Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Amet justo donec enim malesuada diam vulputate ut pharetra.'
        },
        {
            img:dish2,
            head:'Large Business Lunch',
            pyara: 'Volutpat est velit egestas dui id. Elementum eu facilisis sed odio morbi quis. Imperdiet nulla malesuada pellentesque eli'
        },
        {
            img:dish3,
            head:'Medium Business Lunch',
            pyara: 'Facilisi morbi tempus iaculis urna. Consequat id porta nibh venenatis cras sed felis eget. Lorem ipsum dolor sit amet consectetur adipiscing elit.'
        }
    ]
    return(<>
    <div className="container-fluid">

      <div className="container-fluid">

        <div className="row"id="pricingtablebg">
            <div className="col-12"> <div className="py-4"><p className="lead fw-bold ">Home<i class="bi bi-arrow-right-short"></i>Pricing Table</p>
         </div>
         <h2 className="display-3 fw-bold text-center">Lunch sets</h2>
         <p className="Foraboutuspyara4 text-center">Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Mauris augue neque gravida in fermentum et sollicitudin.</p>
         </div>


        </div>

      </div>
      {/* endof hero */}

      {/* start of card of pricing table */}

      <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-xl-4">
                <PricingtableCards  cardimg={pricecard[0].img}  cardtitle={pricecard[0].head} cardinfo={pricecard[0].pyara}/>
            </div>
            <div className="col-12 col-xl-4">
            <PricingtableCards  cardimg={pricecard[1].img}  cardtitle={pricecard[1].head} cardinfo={pricecard[1].pyara}/>
            </div>
            <div className="col-12 col-xl-4">
            <PricingtableCards  cardimg={pricecard[2].img}  cardtitle={pricecard[2].head} cardinfo={pricecard[2].pyara}/>
            </div>
        </div>
      </div>




        {/* end of main div */}
    </div>
    </>)
}
export default PricingTable;