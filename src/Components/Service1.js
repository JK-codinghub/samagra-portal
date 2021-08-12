import React from "react";
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import { Link } from "react-router-dom";

import './Slider/design.css'

const Service1 = () => {
    return (
        <>


            <Container>

                <h4><u>AboutUs</u></h4>

                <br />
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
            <Container fluid style={{ background: "linear-gradient(to top left, #00ccff 14%, #00ffff 98%)" }}>
                <br />

                <Row><Col xs={1}></Col>
                    <Col xs={6}>
                        <Container className="wrapper bg bg-light">
                            <img src={require('../../src/images/in.png').default} style={{ width: "40px", height: "40px" }} alt=""/>
                            <span style={{fontsize:"25px"}}><b>SERVICES</b></span>
                            <br/><br/>
                            <Row>
                             <Col> <img src={require('../../src/images/megaphone.png').default} style={{ width: "80px", height: "80px" }} alt=""/><br/>Updates</Col>
                             <Col> <img src={require('../../src/images/mechanic.png').default} style={{ width: "80px", height: "80px" }} alt=""/><br/> &nbsp;Services</Col>
                             <Col> <img src={require('../../src/images/debit-card.png').default} style={{ width: "80px", height: "80px" }} alt=""/><br/>Card Services</Col>
                             <Col> <img src={require('../../src/images/newspaper.png').default} style={{ width: "80px", height: "80px" }} alt=""/><br/>Cetificates,<br/>Scholarships</Col>
                            </Row>
                            <br/>
                        </Container>
                    </Col>
                    <Col xs={4}>
                        <Container className="wrapper bg bg-light">
                        <img src={require('../../src/images/in.png').default} style={{ width: "40px", height: "40px" }} alt=""/>
                            <span style={{fontsize:"25px"}}><b>STAFF EVENTS</b></span>
                           
                        <br/><br/>
                            <Row>
                                
                             <Col> <img src={require('../../src/images/megaphone.png').default} style={{ width: "80px", height: "80px" }} alt=""/><br/>Holidays<br/>Announcement</Col>
                             <Col> <img src={require('../../src/images/mechanic.png').default} style={{ width: "80px", height: "80px" }} alt=""/><br/> &nbsp;Job Portal</Col>
                            </Row>
                            <br/>
                        </Container><br/>
                    </Col>
                </Row>

                <br />

            </Container><br /><br />

        </>
    )
}
export default Service1;