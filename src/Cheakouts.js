import React from "react";
import logoimg1 from './Images/logos-1.jpg';
import dish1 from './Images/dish-1.png';
import cheackout1 from './Images/checkbox-1.png';
import cheackout2 from './Images/checkbox-2.png';
import cheackout3 from './Images/checkbox-3.png';
const Cheakouts = () => {
    return (<>
        <div className="container-fluid">
            <div className="container-fluid">
                <div className="row" id="cheakoutbg">
                    <div className="col-12 text-center ">
                        <div className="py-4"><p className="lead fw-bold ">Home<i class="bi bi-arrow-right-short"></i>Cheakouts</p>
                        </div>
                    </div>
                    <div className="col-12 text-center "><h2 className="fw-bold display-4">Checkout</h2><p className="Foraboutuspyara4">Sit amet nisl purus in mollis nunc sed id semper. Condimentum id venenatis a condimentum vitae sapien pellentesque.</p>
                    </div>

                </div>
            </div>


            <div className="container-fluid py-5 ">
                <div className="row"id="cheakoutbg">
                    <div className="col-12 col-xl-6 ">
                        <div className="row">
                            <div className="col-6">
                                <h2 className="display-5 fw-bold ">Your order:</h2>

                            </div>
                            <div className="col-6">
                                <h2 className="display-5 fw-bold ">2</h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={logoimg1} className="img-fluid" alt="img not found" />
                                    </div>
                                    <div className="col-8">
                                        <p className="lead fw-bold ">Kennington Lane Cafe</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={dish1} className="img-fluid" alt="img not found" />
                                    </div>
                                    <div className=""><h2>Egg, kiwi and sauce chilli</h2></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <h2 className="display-4 fw-bold ">$39</h2>
                            </div>

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={dish1} className="img-fluid" alt="img not found" />
                                    </div>
                                    <div className=""><h2>Egg, kiwi and sauce chilli</h2></div>

                                </div>



                            </div>
                            <div className="col-6">
                                <h2 className="display-4 fw-bold ">$59</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6"><h2 className="display-4 fw-bold ">Total</h2></div>
                            <div className="col-6"><h2 className="display-4 fw-bold ">$98</h2></div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 shadow-lg bg-white">
                        <form>
                            <div className="row">
                                <div className="col-12 mb-3 ">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label h2 py-2 ">Buyer Information</label>
                                        <input type="email" class="form-control form-control-lg " placeholder="Enter Your Full Name" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-xl-6 mb-3">
                                        <input type="email" class="form-control form-control-lg " placeholder="Mail" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="col-12 col-xl-6 mb-3">
                                        <input type="email" class="form-control form-control-lg " placeholder="Phone" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>

                                </div>
                                <div className="col-12 mb-3">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label h2">Delivery address</label>
                                        <input type="email" class="form-control form-control-lg " placeholder="address" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div class="mb-3">

                                        <input type="email" class="form-control form-control-lg " placeholder="Street" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-xl-6 mb-3">
                                            <input type="email" class="form-control form-control-lg " placeholder="House Number" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>
                                        <div className="col-12 col-xl-6 mb-3">
                                            <input type="email" class="form-control form-control-lg " placeholder="Apartment Number" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                        </div>

                                    </div>

                                </div>
                                <div className="col-12 mb-3">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label h2">Payment method</label>
                                        <div className="fw-bold  lead">
                                            <span className="text-warning  ">Card</span> <span>Cash</span>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <img src={cheackout1} alt="img not found" className="img-fluid p-1" />
                                            <img src={cheackout2} alt="img not found" className="img-fluid p-1" />
                                            <img src={cheackout3} alt="img not found" className="img-fluid p-1" />
                                        </div>
                                        <input type="text" class="form-control form-control-lg mb-3 " placeholder="CardNumber" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div className="row mb-3">
                                            <div className="col-12 col-xl-6 mb-3">
                                                <input type="email" class="form-control form-control-lg " placeholder="Expirataion date" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>
                                            <div className="col-12 col-xl-6 mb-3">
                                                <input type="email" class="form-control form-control-lg " placeholder="cvv" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-12 mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Save my PaymentDetilas for future purpose
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center mb-3">
                                    <div >
                           
                           <button class="btn fw-bold px-5 py-3 ms-2 btn-1 " type="submit">Send</button>
                       </div>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>




            {/* end of main div */}
        </div>
    </>)
}
export default Cheakouts;