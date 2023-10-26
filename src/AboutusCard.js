const AboutusCard=(props)=>{
    return(
        <>
        <div class="card border-0 aboutuscardimg   " >
         <img src={props.aboutcardimg}class="card-img-top  img-fluid foraboutuscardimghover" alt="..."/>
             <div class="card-body">
          <h5 class="card-title mb-3 fw-bold h2 ">{props.abouttitle}</h5>
           <p class="card-text mb-3 Foraboutuspyara3">{props.aboutinfo}</p>
     
          </div>
           </div></>
    )
}
export default AboutusCard;