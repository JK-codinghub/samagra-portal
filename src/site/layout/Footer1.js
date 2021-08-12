import React from "react";
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { EnvelopeOpen, Phone } from 'react-bootstrap-icons';
import './nav.css'

const Footer1 = () => {
    return (
        <>

            <Container className="footer fixed" style={{ bottom: "0", width: "100%" }} >
                <br />
                <Row>

                    <Col md={4} className="border border-warning"><br/>
                        <h4>Comment Us</h4>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Enter your Name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Mail id" />
                            </div>
                            <div className="mb-3">
                                <input type="textarea" className="form-control " id="exampleInputTextArea1" style={{ height: '100px' }} placeholder="Write comment here.." />
                            </div>
                            <button type="submit" className="btn btn-warning">Submit</button>
                        </form><br/>
                    </Col>
                    <Col md={6}>
                     <Container style={{ border: "2px dashed black"}} >
                     <img src={require('../../Components/Slider/icons/loaction.gif').default} style={{ width: "90px", height: "90px" }} alt=""/>
                        
                         <span style={{fontFamily:"italic",fontSize:"25px",color:"green"}}><u>LOCATION</u></span><br/>
                         
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1448584027194!2d76.81428021418714!3d17.356761208257815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8b89aef330279%3A0xa3973966035c88ad!2sSamagra%20Abhivrudhi%20Souharda%20Pattina%20Sahakari%20Niyamita!5e0!3m2!1sen!2sin!4v1628768473602!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy"></iframe>
                        </Container>
                    </Col>
                </Row><br/>
                
            </Container>
            <Container fluid className="text-light" style={{ backgroundColor: 'rgb(0, 0, 0)', bottom: "0", width: "100%", height: "30px" }}>
                <Row>
                    <Col xs={5}>nagendrasamruddha@gmail.com|JyotiKalshetty@Copyright-2021</Col>

                </Row>

            </Container>

        </>
    )
}
export default Footer1;