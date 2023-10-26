 import React from "react";
 import bloghero from './Images/blog hero img.png';
 import newsimg from './Images/homenews.jpg';
import homefood1 from './Images/homefood1.jpg';
import homefood2 from './Images/homefood2.jpg';
import homefood3 from './Images/homefood3.jpg';
import homefood4 from './Images/news-4.jpg';
import homefood5 from './Images/news-5.jpg';
import homefood6 from './Images/news-6.jpg'
import BlogCard from "./BlogCard";
const Blog=()=>{



    const blogcard=[
        {
            img:homefood1,
            head:'With Quickeat you can order for the whole day'
          
        },
        {
            img:homefood2,
            head:'127+ Couriers On Our Team Big Food Trends'
          
        },
        {
            img:homefood3,
            head:'Why You Should Optimize Your Menu for Delivery'
           
        },
        {
            img:homefood4,
            head:'How Restaurants Can  with Millennials in 2022'
           
        },
        {
            img:homefood5,
            head:'Why You Should Optimize Your Menu for Delivery',
            
        },
        {
            img:homefood6,
            head:'5 Big food Trends Coming Your Way in 2022'
          
        },
    ]
    return(
    <>
    <div className="container-fluid">


{/* start of hero */}
        <div className="conatiner-fluid">
            <div className="row justify-content-around " id="blogherobg">
                <div className="col-12 col-lg-5 py-5 ">
                <div className="py-4"><p className="lead fw-bold ">Home<i class="bi bi-arrow-right-short"></i>Blog</p></div>
                <h2 className="display-3 fw-bold ">Current news about Us</h2>
                <p className="Foraboutuspyara4">Egestas sed tempus urna et pharetra pharetra massa. Fermentum posuere urna nec tincidunt praesent semper.</p>
                    
                </div>
                <div className="col-12 col-lg-5 py-5 ">
                    <img src={bloghero} alt="img not found" className="img-fluid"/>
                    
                </div>
            </div>

        </div>
        {/* end of hero section */}
        {/* start of the quilty  of our work */}

        <div className="container my-5 ">
            <div className="row">
                <div className="col-12 col-lg-6 py-5">

                    <img className="img-fluid rounded-2 " src={newsimg} alt="img not found"/>

                </div>
                <div className="col-12 col-lg-6 py-5 ">
                    <h2 className="display-6 fw-bold ">We Have Received An Award For The Quality Of Our Work</h2>
                    <p className="Foraboutuspyara4">Scelerisque purus semper eget duis at. Tincidunt ornare massa eget egestas purus viverra. Morbi enim nunc faucibus a pellentesque. Lobortis elementum nibh tellus molestie nunc non...</p>
                    <p className="lead text-warning fw-bold">Read More<i class="bi bi-arrow-right fw-bold "></i></p>
                    
                </div>
            </div>

        </div>
        {/* end of qulity of work */}

        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <BlogCard blogimg={blogcard[0].img} blogtitle={blogcard[0].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                     <BlogCard blogimg={blogcard[1].img} blogtitle={blogcard[1].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                     <BlogCard blogimg={blogcard[2].img} blogtitle={blogcard[2].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                     <BlogCard blogimg={blogcard[3].img} blogtitle={blogcard[3].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                     <BlogCard blogimg={blogcard[4].img} blogtitle={blogcard[4].head}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                     <BlogCard blogimg={blogcard[5].img} blogtitle={blogcard[5].head}/>
                </div>
                <div className="text-center mb-3">    
                            <button class="btn fw-bold px-5 py-3 ms-2 btn-1 text-center  " type="submit">See All<i class="bi bi-arrow-right mx-2 "></i></button></div>
            </div>
        </div>




        {/* endofmaindiv */}
    </div>

    </>)
}
export default Blog;