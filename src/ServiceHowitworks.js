const ServiceHowitworks=(props)=>{
    return(
        <>
        <img src={props.img} className="img-fluid"/>
                   <h2><span className="graytext">{props.headingno}</span> {props.heading}</h2>
                   <p className="Forpyara3">{props.info}</p>
                   </>

    )
}
export default ServiceHowitworks;