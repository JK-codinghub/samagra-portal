import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import './content.css'
const Content = () => {
    return (
        <div className="py-4" >
            <Container className="" >


                <br />
                <div className="container">
                    <Row>
                        <div className="rst-category">
                            <h4>Aadhaar</h4>
                            <ul>
                                <li>Aadhaar Demographic Update
                                </li>
                                <li> Aadhaar Mobile Update
                                </li>
                                <li> Best Finger Detection
                                </li>
                                <li> Aadhaar eKYC PVC Print
                                </li>

                            </ul>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Banking and Pension</h4>
                            <ul>

                                <li> RAP Registration </li>
                                <li> Basic Banking Course</li>
                                <li> Life Certificate (LIC) </li>
                                <li> Pin Pad Device Payment Service</li>

                            </ul>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Electricity</h4>
                            <ul>
                                <li> Online Bill Payment (Non-RAPDRP)</li>
                                <li> Online Bill Payment (RAPDRP)</li>
                                <li> Online Bill Payment</li>


                            </ul>
                        </div>

                    </Row>
                    <br />
                    <Row>
                        <div className="rst-category">
                            <h4>Government</h4>
                            <ul>
                                <li> Birth and Death Application</li>
                                <li> Forest Services</li>
                                <li> Online FIR</li>
                                <li> Ration Card Services</li>

                            </ul>
                        </div>  &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Health</h4>
                            <ul>
                                <li> Super Speciality Consultation</li>
                                <li> Telemedicine</li>
                                <li> Jan Aushadhi Registration</li>
                                <li> Jiva Telemedine</li>

                            </ul>
                        </div>  &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Insurance</h4>
                            <ul>
                                <li> Pradhan Mantri Fasal Bima Yojna </li>
                                <li> Farmer Package Policy</li>
                                <li> Life Insurance</li>
                                <li> Personal Accidental</li>

                            </ul>
                        </div>
                    </Row>
                    <br />
                    <Row>

                        <div className="rst-category">
                            <h4>Others</h4>
                            <ul>
                                <li> PVC Card and Biometric Device </li>
                                <li> Pradhan Mantri Awas Yojana</li>
                                <li> Jeeevan Pramaan</li>
                                <li> NIELIT Facilitation Centre</li>

                            </ul>
                        </div>  &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Travel</h4>
                            <ul>
                                <li> Darshan Booking</li>
                                <li> Bus Ticket Booking</li>
                                <li> Flight Tickets</li>
                                <li> Bus Tickets</li>

                            </ul>
                        </div>
                    </Row>
                    <div className="clear"></div>
                </div>

                <br /><hr /><br />
                <h2 style={{ textAlign: "center" }}><u>Customer Service Point(CSP)</u></h2><br />
                <br />
                    <Row>
                        <div className="rst-category">
                            <h4>Bank of Baroda</h4>
                            <ul>
                                <li> Zero (0) Account</li>
                                <li> AEPS</li>
                                <li> IMPS</li>
                               

                            </ul>
                        </div>  &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Social Security Scheme</h4>
                            <ul>
                                <li> Pradhan Mantri Suraksha Bhima Yojana</li>
                                <li> Pradhan Mantri Jeeevan Jyoti Bhima Yojana</li>
                                <li> Jan Aushadhi Registration</li>
                                <li> Atal Pension Yojana</li>

                            </ul>
                        </div>  &nbsp;&nbsp;&nbsp;
                        <div className="rst-category">
                            <h4>Others</h4>
                            <ul>
                                <li>-  </li>
                                <li>- </li>
                                <li>- </li>
                                <li>- </li>

                            </ul>
                        </div>
                    </Row>
                    <br />

            </Container>
        </div>
    )
}
export default Content;