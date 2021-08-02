import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
const Content = () => {
    return (
        <div className="py-4" >
            <Container className="" >


                <br />
                <Row className="shadow-sm bg-light">
                    <Col>
                        <img src={require('../../src/images/pan.png').default} style={{ width: "200px", height: "200px" }} className="align-self-center mr-3" style={{ width: "200px", height: "200px" }} alt="..." />
                    </Col>
                    <Col xs={9}>
                        <h5 className="mt-0">PAN CARD</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Col>
                </Row>
                <br /><br />
                <Row className="shadow-sm bg-light"><br/><Col></Col>
                    <Col xs={8}> <h5 className="mt-0">AADHAR CARD</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                    </Col>
                    <Col xs={1}>
                        <img src={require('../../src/images/adhar.jpeg').default} className="align-self-center mr-3" style={{ width: "200px", height: "200px" }} alt="..." />

                    </Col><Col></Col><br/>
                </Row>

                <br/><br/>
                <Row className="shadow-sm bg-light"><br/><Col xs={1}></Col>
                    <Col>
                        <img src={require('../../src/images/labour card.png').default} className="align-self-center mr-3" style={{ width: "200px", height: "200px" }} alt="..." />
                    </Col>
                    <Col xs={8}>
                        <h5 className="mt-0">LABOUR CARD</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Col><br/>
                </Row>
                <br /><br />
                <Row className="shadow-sm bg-light"><br/><Col></Col>
                    <Col xs={8}> <h5 className="mt-0">PASS PORT</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                    </Col>
                    <Col xs={1}>
                        <img src={require('../../src/images/indian-passport-fb.jpg').default} className="align-self-center mr-3" style={{ width: "200px", height: "200px" }} alt="..." />

                    </Col><Col></Col><br/>
                </Row>
      
                


            </Container>
        </div>
    )
}
export default Content;