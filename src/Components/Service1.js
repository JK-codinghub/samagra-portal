import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './Slider/design.css'

const Service1 = () => {
    return (
        <>
           

                <Container>
                    <Row><Col >
                        <h4><u>AboutUs</u></h4>

                    </Col>
                    </Row><br />
                    <Row>

                       
                        <Col xs={8}>Samagra Abhivruddhi portal is an initiative of Government of Karnataka to deliver the Government services all at the doorsteps of citizens.<br />
                            Samagra Abhivruddhi portal is integrated with CSC and Seva sindhu services and aims to bring all departmental services on one platform. The objective is to provide government services provision of accessible, cost-effective, accountable and transparent services to citizens. Samagra Abhivruddhi portal provides enhancing the citizen service delivery mechanism<br />
                            This portal provides the every single updates of Government services followed by CSC and Seva sindhu services.
                        </Col>
                        <Col >
                            <Card className="shadow-xs border rounded border-warning">
                                <Card.Header className="bg-warning" >
                                    <h5 style={{ color: "rgb(255, 71, 26)" }}><u>New Notification</u></h5>
                                </Card.Header>
                                <Card.Body style={{ backgroundColor: "rgb(255, 243, 230)" }}>
                                    <ol><marquee direction="up" scrollamount="3">
                                        <li>Labour Card Renewal<hr /></li>
                                        <li>Income Cast Renewal<hr /></li>
                                        <li>Ration Card Modification<hr /></li>
                                        <li>PAN Card Renewal<hr /></li>

                                    </marquee>
                                    </ol></Card.Body>
                            </Card>


                        </Col>
                    </Row>
                </Container>
                <br />
                <Container fluid style={{backgroundColor:"rgb(242, 242, 242)"}}>
                    <Row>
                        <Col>
                            <h4><u>CSC-Services</u></h4>
                            <h6><i>SubTitle</i></h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col><p>Text text text text Text text text text Text text text text Text text text text Text text text textText text text textText text text textText text text textText text text textText text text textText text text textText text text textText text text text</p></Col>
                    </Row>
                    <br />
                    <Container>
                    <Row>
                        <Col md={3} className="card sh border border-warning ">
                          <h5>PAN Card</h5>
                          <img src={require('../../src/images/pan.png').default} style={{ width: "200px", height: "200px",borderRadius:"50%" }} alt="" />
                         
                            <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                                text text text Text text text text Text text text texttext text text Text text text text Text text text text
                                text text text Text text text text Text text text text
                            </p>
                            <Link to="/services">See More...</Link>
                           
                        </Col>
                            <Col md={1}></Col>
                        <Col md={3} className="card sh border border-warning"><h5>Aadhar Card</h5>
                      <img src={require('../../src/images/adhar.jpeg').default} style={{ width: "200px", height: "200px",borderRadius:"50%"}} alt="" />
                            
                            <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                                text text text Text text text text Text text text texttext text text Text text text text Text text text text
                                text text text Text text text text Text text text text
                            </p>
                            <Link to="/services">See More...</Link>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={3} className="card sh border border-warning"><h5>Labour Card</h5>
                        <img src={require('../../src/images/labour card.png').default} style={{ width: "200px", height: "200px",borderRadius:"50%"}}  alt="" />
                            
                            <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                                text text text Text text text text Text text text texttext text text Text text text text Text text text text
                                text text text Text text text text Text text text text
                            </p>
                            <Link to="/services">See More...</Link>
                        </Col>

                       
                    </Row> </Container><br/><br/>
                </Container>
            
        </>
    )
}
export default Service1;