const ResatCards = (props) => {
    return (
        <>


            <div className="row">
                <div className="col-3"><img alt="logo" src={props.cardimg} className="img-fluid forimgborder" /></div>

                <div className="col-9">
                    <div className="cafa"><h3 ><a href="/restaurant-card" className="forlink fw-bold mb-3  ">{props.cardtitle}</a></h3><div><i class="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div><div className="cafa-button"> <a href="#" className="forlink px-2 mb-2 ">{props.cardbtn1}</a> <a href="#" className="forlink px-2  mb-2 ">{props.cardbtn2}</a> <a className="forlink px-2 mb-2" href="#">{props.cardbtn3}</a></div><p className="Forpyara3 mt-2">{props.cardinfo}</p></div>

                </div>

            </div>
        </>
    )
}
export default ResatCards;