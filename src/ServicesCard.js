const ServicesCards=(props)=>{
    return(

        <>
        <div class="card border-0 aboutserviceimg  " >
         <img src={props.serviceimg}class="card-img-top  img-fluid foraboutuscardimghover" alt="..."/>
             <div class="card-body">
          <h5 class="card-title mb-3 fw-bold h2 ">{props.servicetitle}</h5>
           <p class="card-text mb-3 Foraboutuspyara4">{props.serviceinfo}</p>
     
          </div>
           </div></>
    )

}
export default ServicesCards;