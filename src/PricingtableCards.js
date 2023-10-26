const PricingtableCards =(props)=>{
    return(
        <>
        <div class="card border-0 mb-5 py-5  " >
  <img src={props.cardimg} class="card-img-top img-fluid " alt="..."/>
  <div class="card-body">
    <h5 class="card-title h2 fw-bold ">{props.cardtitle}</h5>
  <div>  <a href="#" className="forlink px-2 mb-2 text-warning ">breakfast </a> <a href="#" className="forlink px-2  mb-2 ">brunch</a> <i class="bi bi-heart-fill"></i></div>
  <div className="h1 fw-bold ">$ 39</div>
    <p class="card-text Foraboutuspyara4">{props.cardinfo}</p>
    <ul className="list-unstyled Foraboutuspyara4">
        <li><i class="bi bi-check-circle-fill p-1"></i>Sem et tortor consequat id porta;</li>
        <li><i class="bi bi-check-circle-fill p-1"></i>Facilisis magna etiam tempor;</li>
        <li><i class="bi bi-check-circle-fill p-1"></i>Nec tincidunt praesent semper;</li>
        <li><i class="bi bi-check-circle-fill p-1"></i>Nibh sed pulvinar proin;</li>
        <li><i class="bi bi-check-circle-fill p-1"></i>Vulputate mi sit amet mauris;</li>
        <li><i class="bi bi-check-circle-fill p-1"></i>Elit ut aliquam purus sit amet;</li>
    </ul>
    <div className="restacardbtn ">
    <a href="#" className="btn btn-lg text-center px-3 py-2 restacardbtn ">Order Now</a>
    </div>
  </div>
</div>
        </>
    )
}
export default PricingtableCards;