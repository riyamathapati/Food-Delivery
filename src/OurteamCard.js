const OurteamCard=(props)=>{
  return(
    <> <div class="card border-0    " >
    <img src={props.teammemberimg}class="card-img-top  img-fluid " alt="..."/>
        <div class="card-body">
     <h5 class="card-title mb-3 fw-bold h2 text-center  ">{props.teammembername}</h5>
      <p class="card-text mb-3 Foraboutuspyara4 text-center">{props.teammemberinfo}</p>
      <div className="text-center"><i class="bi bi-facebook mx-1 text-secondary  "></i><i class="bi bi-instagram mx-1 text-secondary "></i>
                            <i class="bi bi-twitter mx-1 text-secondary "></i></div>

     </div>
      </div>
    </>
  )
  
}
export default OurteamCard;