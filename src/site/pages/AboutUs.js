import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";


const AboutUs = () =>{
    return(
        <div className="py-4">
            <h4>ABOUT US </h4><hr/>
            <Container><br/>
                <Row><Col></Col>
                    <Col><img src={require('../../images/Office.jpg').default} style={{borderRadius:"150px"}} width="200px" height="200px" alt=""/>
                         <b>CEO OF SAMAGRA ABHVRUDDHI</b>
                    </Col>
                    <Col></Col>
                   <Col> <Card md={2}><Card.Header><u><b>12M+</b></u></Card.Header>
                         <Card.Text><i>Visitors</i></Card.Text>
                         </Card><br/>
                         <Card md={2}><Card.Header><u><b>12M+</b></u></Card.Header>
                         <Card.Text><i>Visitors</i></Card.Text>
                    </Card>
                    </Col><Col xs={5}></Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    )
}
export default AboutUs;