import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { EnvelopeOpen,Phone } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
        <div className="py-4">
            <Container fluid className="footer bg-warning" >
                <br/>
                <Row> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Col xs={1}></Col>
                    <Col xs={4}>
                    <h4>Comment Us</h4>
                        <form>
                        <div className="mb-3">
                               <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Enter your Name" />
                            </div>
                            <div className="mb-3">
                               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Mail id" />
                            </div>
                            <div className="mb-3">
                               <input type="textarea" className="form-control " id="exampleInputTextArea1" style={{ height: '100px'}} placeholder="Write comment here.." />
                            </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </Col>
                    <Col xs={3} style={{justifyContent:"center"}}>
                    <h4>Site Map</h4>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                    </Col>
                    <Col xs={3}>
                    <img src={require('../../images/logo.png').default} style={{width:"100px"}}/>
                    <br/><br></br>
                    <Phone></Phone> 9986090984  <br/>                 
                    <EnvelopeOpen/> nagendrasamruddha@gmail.com
                    </Col>
                </Row><br/>
            </Container>
            <Container fluid className="text-light" style={{backgroundColor:'rgb(0, 0, 0)'}}>
                 <Row><Col></Col>
                   <Col xs={5}>nagendrasamruddha@gmail.com|JyotiKalshetty@Copyright-2021</Col>
                   <Col></Col>
                 </Row>
            </Container>
        </div>
        </>
    )
}
export default Footer;