import React from "react";
import { Row, Col, Container } from 'react-bootstrap'


import './nav.css'

const Footer1 = () => {
    return (
        <>
            <Container fluid className="bg bg-secondary text-light"><br/>
                <Container>
                    <Row>
                        <Col md={4}><h4 className="title" style={{fontFamily:"San-serif"}}>Samagra Abhivruddhi</h4>
                            <p>
                                All Services at one point, Visite our Office for more details<br/><br/>
                                <b>Address :</b> Opposite Durga Udupi Hotel, Near Aland check post,Gulbarga.
                            </p>
                        </Col>
                        <Col md={4}>
                            <h4 className="title">Links</h4>
                            <ul >
                                <li className="list-unstyled">
                                    <a href="#!" className="text-light">Computer Institute</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/services" className="text-light">CSC Services</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/seva" className="text-light">Seva Sindhu Services</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!" className="text-light">Scholarships</a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container><br/>
            </Container>
            <Container fluid className="text-light" style={{ backgroundColor: 'rgb(0, 0, 0)', bottom: "0", width: "100%", height: "30px" }}>
                <Container>nagendrasamruddha@gmail.com|JyotiKalshetty@Copyright-2021</Container>
            </Container>

        </>
    )
}
export default Footer1;