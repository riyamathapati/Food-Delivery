const Dish =(props)=>{
    return(
        <>
        <div class="card border-0 mb-5 py-5 fordishshadow " >
  <img src={props.dishimg} class="card-img-top img-fluid " alt="..."/>
  <div class="card-body">
    <h5 class="card-title h2 fw-bold ">{props.disname}</h5>
  <div>  <a href="#" className="forlink px-2 mb-2 text-warning ">breakfast </a> <a href="#" className="forlink px-2  mb-2 ">brunch</a> <i class="bi bi-heart-fill"></i></div>
  <div className="h1 fw-bold ">$ 39</div>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="restacardbtn">
    <a href="#" className="btn btn-lg text-center px-3 py-2 restacardbtn ">Add To Basket</a>
    </div>
  </div>
</div>
        </>
    )
}
export default Dish;