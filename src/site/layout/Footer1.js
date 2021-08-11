import React from "react";
import { Row, Col,Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { EnvelopeOpen,Phone } from 'react-bootstrap-icons';

const Footer1 = () => {
    return (
        <>
        
            <Container fluid className="footer bg-warning fixed" style={{bottom: "0",width: "100%"}} >
                <br/>
                <Row> 
                   
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
                   
                    <Col xs={5}>
                    <img src={require('../../images/logo.png').default} style={{width:"100px"}} alt=""/>
                    <br/><br></br>
                    <Phone/> 9986090984  <br/>                 
                    <EnvelopeOpen/> nagendrasamruddha@gmail.com
                    </Col>
                    <Col xs={2} style={{justifyContent:"center"}}>
                    <h4>Site Map</h4>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                         <Link>Link</Link><br/>
                    </Col>
                </Row><br/>
            </Container>
            <Container fluid className="text-light" style={{backgroundColor:'rgb(0, 0, 0)', bottom: "0",width: "100%",height:"30px"}}>
                 <Row>
                   <Col xs={5}>nagendrasamruddha@gmail.com|JyotiKalshetty@Copyright-2021</Col>
                   
                 </Row>
               
            </Container>
       
        </>
    )
}
export default Footer1;