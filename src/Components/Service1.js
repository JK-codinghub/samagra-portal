import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Service1 = () => {
    return (
        <>
            <div className="py-4">
                <Container>
                <Row><Col >
                        <h4><u>AboutUs</u></h4>
                      
                        </Col>
                    </Row><br/>
                    <Row>
                        
                        <Col><img src={require('../../src/images/Office.jpg').default} style={{ width: "300px", height: "300px" }} alt="" /></Col>
                        <Col >Text Text Text Text Text Text Text Text Text Text Text Text Text Text TextText Text TextText Text TextText Text Text Text Text TextText Text Text Text Text TextText Text TextText Text Text</Col>
                        <Col ><div className="shadow-xs border border-warning" >
                <h5 className="bg-warning"><u>New Notification</u><br/></h5>
                <ol><marquee direction="up" scrollamount="3">
                    <li>Labour Card Renewal<hr/></li>
                    <li>Income Cast Renewal<hr/></li>
                    <li>Ration Card Modification<hr/></li>
                    <li>PAN Card Renewal<hr/></li>
                    <li>Labour Card Renewal<hr/></li>
                    </marquee>
                </ol></div></Col>
                    </Row>
                </Container>
                <br/>
                
                <Container>
          
      </Container> <br></br>
                
                <br/>

                <Container>
                    <Row>
                        <Col>
                        <h4><u>CSC-Services</u></h4>
                        <h6><i>SubTitle</i></h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col><p>Text text text text Text text text text Text text text text Text text text text Text text text textText text text textText text text textText text text textText text text textText text text textText text text textText text text textText text text text</p></Col>
                    </Row>
                            <br/>
                    <Row>
                        <Col><img src={require('../../src/images/pan.png').default} style={{ width: "200px", height: "200px" }} alt="" />
                        <h5>PAN Card</h5>
                        <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text text
                        </p>
                        <Link to="/services">See More...</Link>
                        </Col>
                        
                        <Col><img src={require('../../src/images/adhar.jpeg').default} style={{ width: "200px", height: "200px" }} alt="" />
                        <h5>AAdhar Card</h5>
                        <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text text
                        </p>
                        <Link to="/services">See More...</Link>
                        </Col>
                        
                        <Col><img src={require('../../src/images/labour card.png').default} style={{ width: "200px", height: "200px" }} alt="" />
                        <h5>Labour Card</h5>
                        <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text text
                        </p>
                        <Link to="/services">See More...</Link>
                        </Col>
                        
                        <Col><img src={require('../../src/images/indian-passport-fb.jpg').default} style={{ width: "200px", height: "200px" }} alt="" />
                        <h5>Passport</h5>
                        <p>Text text text text Text text text text Text text text text text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text texttext text text Text text text text Text text text text
                        text text text Text text text text Text text text text
                        </p>
                        <Link to="/services">See More...</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Service1;