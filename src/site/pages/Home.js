import React from "react";
import Slider from "../../Components/Slider/Slider";
import Service1 from "../../Components/Service1"
import { Row, Col, Container } from 'react-bootstrap'
const Home = () =>{
    return(
        <>
        <Slider/>
        <br></br>
             <Service1/>
             
            <Container className="footer fixed" style={{ bottom: "0", width: "100%" }} >
                <br />
                <Row>

                 
                    <Col md={6}>
                     <Container  >
                     <img src={require('../../Components/Slider/icons/loaction.gif').default} style={{ width: "90px", height: "90px" }} alt=""/>
                        
                         <span style={{fontFamily:"italic",fontSize:"25px",color:"green"}}><u>LOCATION</u></span><br/>
                         
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1448584027194!2d76.81428021418714!3d17.356761208257815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8b89aef330279%3A0xa3973966035c88ad!2sSamagra%20Abhivrudhi%20Souharda%20Pattina%20Sahakari%20Niyamita!5e0!3m2!1sen!2sin!4v1628768473602!5m2!1sen!2sin" width="1000" height="300"  allowfullscreen="" loading="lazy"></iframe>
                        </Container>
                    </Col>

                </Row><br/>
                <Row>
                    
                </Row>
                
            </Container>
             </>
    )
}
export default Home;