import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Karnataka from "./Karnataka";
import Revenue from "./Revenue";
import './seva.css'
const Sevasindhu = () => {
    return (
        <>

            <div className="container"><br />
                <h1 style={{ textAlign: "center" }}><u>About Seva Sindhu</u></h1><br />
                <p>Seva sindhu is the common citizen service portal of government of Karnataka. To provide government services and other schemes information in to a single portal. Seva sindhu is implemented under e-District Mission Mode Project (MMP) of department of Electronics and Information technology (DeitY). Ministry of communication and IT departments and Government of India.

                </p>

            </div>
            <br />
            <Revenue />
            <br />
            <Karnataka />
           
            <br />
            <Container>
                <fieldset style={{ border: "2px orange solid" }}>

                    <legend style={{  marginLeft: "0em", padding: "0.2em 2em",fontSize: "15px", backgroundColor: "orange" }}>FOOD AND CIVIL SUPPLIES DEPARTMENT</legend>
                    <br /><br />
                    <Row><Col>
                        &nbsp;&nbsp;
                        <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModalF1" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Addition of Name in RC</button>
                        <div className="modal fade" id="myModalF1" role="dialog">
                            <div className="modal-dialog modal-md">
                                <div className="modal-content">
                                    <div className="modal-header bg bg-warning">
                                        <h4>Addition of Name in RC</h4>
                                    </div>
                                    <div className="modal-body">
                                        <b>Eligibility:</b> The residents who are already having ration card <br />
                                        <b>Delivery Time (Days) :</b> 7<br />
                                        <b>Procedure for applying:</b> <br />
                                        1.Online application<br />
                                        2.On verification of office record,required name will be included in the ration card
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                        <Col> &nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModalF2" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Modifications of Ration Card</button>
                            <div className="modal fade" id="myModalF2" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Modifications of Ration Card</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b> The residents who are already having ration card <br />
                                            <b>Delivery Time (Days) :</b> 7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Existing RC Online Modification at the Bio-Photo Service centers.<br />
                                            2.Along with Service center acknowledgement visit concerned food office.<br />
                                            3.On verification of office record, Modification will be approved, and modified RC along with deletion certificate, if required will be issued.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModalF3" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>New Ration Card</button>
                            <div className="modal fade" id="myModalF3" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>New Ration Card</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>All Members Aadhar is mandatory<br />
                                            <b>Delivery Time (Days) :</b> 7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. To apply for APL/ Non-Priority Household (NPHH) Ration Card, OTP/Bio-metric Authentication is mandatory. To apply for BPL/ Priority Household (PHH) Ration Card, Bio-metric verification is mandatory.<br />
                                            2. The Application would be processed by the concerned Food Inspector (FI). The FI would visit the residential address and perform the inspection. Then, the Application would be approved or rejected. On the completion of every stage, an appropriate SMS would be sent to the Applicant’s Mobile Number, if Mobile Number is provided by the Applicant.<br />
                                            3. To get the signed copy of the APL/NPHH Ration Card, Rs.100/- is charged and this amount would be required to be paid to the Postman on the delivery of the Ration Card to selected address. For BPL/PHH Ration Card, Rs.70/- is required to be paid to Postman on the delivery. If earlier filed BPL/PHH Card Application, then Rs.20/- is charged.
                                             </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row><br/><br/>
                </fieldset>
            </Container>
            <br/><br/>
           
        </>
    )
}
export default Sevasindhu;