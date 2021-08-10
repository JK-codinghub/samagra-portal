import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap'
const Sevasindhu = () => {
    return (
        <>
            <div className="container-fluid" style={{}}>
                <div className="container"><br />
                    <h1 style={{ textAlign: "center" }}><u>About Seva Sindhu</u></h1><br />
                    <p>Seva sindhu is the common citizen service portal of government of Karnataka. To provide government services and other schemes information in to a single portal. Seva sindhu is implemented under e-District Mission Mode Project (MMP) of department of Electronics and Information technology (DeitY). Ministry of communication and IT departments and Government of India.
                        
                    </p>

                </div>


                <Container>
                    <div class="list-group">
                        <h4>Department and Services</h4>
                      


                        <hr />
                        <div >
                            <Row>
                                <Col>
                                <img class="shadow" src={require('../../images/pension.png').default} style={{ width: "300px", height: "300px" }} alt="..." />
                                </Col>
                                <Col>
                                <Row>
                                        <Col> <br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d4">MYTHRI</Button>
                                            <div id="d4" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Medical Certificate</li>
                                                    <li>Voter ID xerox 1 copy</li>
                                                    <li>Transgender Medical Certificate</li>
                                                </ul>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col> <br /> 
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d5">ACID VICTIM PENSION</Button>
                                            <div id="d5" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Photo</li>
                                                    <li>Voter ID xerox 1 copy</li>
                                                    <li>Income Certificate</li>
                                                    <li>Age Certificate</li>
                                                    <li>Residance Certificate</li>
                                                </ul>
                                            </div>
                                        </Col></Row>
                            

                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d16">INDIRA GANDHI NATIONAL<br/> OLD AGE PENSION</Button>
                                            <div id="d16" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Photo</li>
                                                    <li>Voter ID</li>
                                                    <li>Residence Certificate</li>
                                                    <li>Age Certificate</li>
                                                    <li>Income Certificate</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    </Col>
                                    <Col>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d32">SANDHYA SURAKSHA YOJANE</Button>
                                            <div id="d32" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Photo</li>
                                                    <li>Voter ID</li>
                                                    <li>Residence Certificate</li>
                                                    <li>Age Certificate</li>
                                                    <li>Income Certificate</li>
                                                    <li>Employement Certificate</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d34">ANTHYA SAMSKARA YOJANE</Button>
                                            <div id="d34" className="collapse">
                                                <ul><li>Aadhar card</li><li>photo</li><li>Ration card xerox 1 copy</li><li>Voter ID</li><li>Residence certificate</li><li>Age certificate</li><li>Income certificate</li></ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
   <hr />
                        <br />
                        <div>
                            <Row>
                                <Col>
                                   
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d3">MARRIAGE CERTIFICATE</Button>
                                            <div id="d3" className="collapse">
                                                <ul><li>Boy and Girl Aadhar Card, SSLC Marks card and TC</li><li>B3 size photos(8)</li><li>Parents Aadhar(Father or mother) </li><li> Three Witness's Aadhar Card<br/>(Groom parents both + Bride Parents)</li><li>Marriage Card</li></ul>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d6">AGRICULTURE LABOUR CERTIFICATE</Button>
                                            <div id="d6" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Voter ID xerox 1 copy</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d7">ATTESTATION OF FAMILY TREE</Button>
                                            <div id="d7" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Affidavit</li>
                                                    <li>Death Certificate</li>
                                                    <li>Rental Agreement</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d22">NO TENANEY CERTIFICATE</Button>
                                            <div id="d22" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>No Objection Certificate</li>
                                                    <li>Tax Paid Bill</li>
                                                    <li>ID Proof</li>
                                                    <li>RTC Copy</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d17">LAND HOLDING CERTIFICATE</Button>
                                            <div id="d17" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Voter ID</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Row>
                                            <Col><br />
                                                <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d25">OBC CERTIFICATE(CENTRAL)</Button>
                                                <div id="d25" className="collapse">
                                                    <ul>
                                                        <li>Adhar Card </li>
                                                        <li>Ration card</li>
                                                        <li>School Transfer Certificate(TC)</li>
                                                        <li>Voter ID</li>
                                                        <li>Salary Certificate</li>
                                                        <li>Relatives Certificate</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><br />
                                                <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d26">POPULATION CERTIFICATE</Button>
                                                <div id="d26" className="collapse">
                                                    <ul>
                                                        <li>Adhar Card </li>
                                                        <li>ID Proof</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d27">SMALL AND MARGINAL<br /> FARMER CERTIFICATE</Button>
                                            <div id="d27" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Voter ID</li>
                                                    <li>ID Proof</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d28">SOLVEY CERTIFICATE</Button>
                                            <div id="d28" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>ID Proof</li>
                                                    <li>RTC Copy</li>
                                                    <li>Encumbrance Certificate</li>
                                                    <li>Property Documents</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br/>
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d15">INCOME CERTIFICATE <br/>FOR EMPLOYMENT</Button>
                                            <div id="d15" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>School Transfer Certificate(TC)</li>
                                                    <li>Voter ID</li>
                                                    <li>Salary Certificate</li>
                                                    <li>Bank Statement for last one year</li>
                                                    <li>Self Declaration</li>
                                                </ul>
                                            </div>
                                        </Col>

                                    </Row>

                                </Col>
                                <Col>
                                    <img class="shadow" src={require('../../images/revenue.png').default} style={{ width: "300px", height: "300px" }} alt="..." />

                                    <hr /><br />
                                    <Row>
                                        <Col><br/>
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d18">LANDLESS CERTIFICATE</Button>
                                            <div id="d18" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>School Transfer Certificate(TC)</li>
                                                    <li>Voter ID</li>
                                                    <li>Old Caste Certificate</li>
                                                    <li>Self Declaration</li>
                                                    <li>ID Proof</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d19">LIVING CERTIFICATE</Button>
                                            <div id="d19" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Self Declaration</li>
                                                    <li>Self Declaration before RI.DT</li>
                                                    <li>ID Proof</li>

                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d20">MINORITY CERTIFICATE</Button>
                                            <div id="d20" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>School Transfer Certificate(TC)</li>
                                                    <li>Voter ID</li>
                                                    <li>Old Caste Certificate</li>
                                                    <li>Relatives Certificate</li>
                                                    <li>Self Declaration by applicant before RI</li>
                                                    <li>ID Proof</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d9">CASTE CERTIFICATE FOR <br /> ARYA VISHYA COMMUNITY</Button>
                                            <div id="d9" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>School Transfer Certificate(TC)</li>
                                                    <li>Voter ID</li>
                                                    <li>Salary Certificate</li>
                                                    <li>Relatives Certificate</li>
                                                </ul>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                <Col> <br/>
                                    <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d13">INCOME AND ASSET <br/> CERTIFICATE FOR ECONOMICALLY<br/> WEAKER SECTION</Button>
                                    <div id="d13" className="collapse">
                                        <ul>
                                            <li>Adhar Card </li>
                                            <li>Ration card</li>
                                            <li>School Transfer Certificate(TC)</li>
                                            <li>Voter ID</li>
                                            <li>Salary Certificate</li>
                                            <li>Relatives Certificate</li>
                                        </ul>
                                    </div>
                                </Col>
                                </Row>
                                <Row>
                                <Col><br/>
                                    <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d14">INCOME CERTIFICATE <br/>FOR COMPASSIONATE APPOINTMENT</Button>
                                    <div id="d14" className="collapse">
                                        <ul>
                                            <li>Adhar Card </li>
                                            <li>Ration card</li>
                                            <li>School Transfer Certificate(TC)</li>
                                            <li>Voter ID</li>
                                            <li>Salary Certificate</li>
                                            <li>Bank Statement for last one year</li>
                                            <li>Self Declaration</li>
                                        </ul>
                                    </div>
                                </Col>
                                </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d8">BONOFIED CERTIFICATE</Button>
                                            <div id="d8" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Voter ID </li>
                                                    <li>ID proof</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d10">DOMICILE CERTIFICATE</Button>
                                            <div id="d10" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Pass port(Urban)</li>
                                                    <li>Voter ID </li>
                                                    <li>Income Certificate</li>
                                                    <li>Rental Agreement</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d12">HK REGION RESIDENCE<br/> AND ELGIBLITY(371 J)</Button>
                                            <div id="d12" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Latest Photos(2)</li>
                                                    <li>Certificate by Hyderbad Karnataka Educational Officer</li>
                                                    <li>The Government employee "Annexure-D" Certificate</li>
                                                    <li>Wedding Registery Record</li>
                                                    <li>Service Book</li>
                                                    <li>Bank Account</li>
                                                    <li>Family Geneology</li>
                                                    <li>Women appplying her husband marriage registration document "Annexure-A" to submit</li>
                                                    <li>Birth Certificate</li>
                                                    <li>Residence Certificate</li>
                                                    <li>VA Report</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d21">NO GOVERNMENT JOB CERTIFICATE</Button>
                                            <div id="d21" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>

                                                    <li>Voter ID</li>
                                                    <li>ID Proof</li>

                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d23">NON-CREMY LAYER CERTIFICATE</Button>
                                            <div id="d23" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>School Transfer Certificate</li>
                                                    <li>Voter ID</li>
                                                    <li>ID Proof</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d24">NOT RE-MARRIED CERTIFICATE</Button>
                                            <div id="d24" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Self Declaration</li>
                                                    <li>Voter ID</li>
                                                    <li>Death Certificate</li>
                                                    <li>ID Proof</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d29">SERVIVING FAMILY MEMBER CERTIFICATE</Button>
                                            <div id="d29" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Family Geneology</li>
                                                    <li>School Transfer Certificate(TC)</li>
                                                    <li>Voter ID</li>
                                                    <li>Death Certificate</li>
                                                    <li>Ration Card</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d30">UNEMPLOYMENT CERTIFICATE</Button>
                                            <div id="d30" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>ID Proof</li>
                                                    <li>Voter ID</li>
                                                    <li>Acknowledgement for having registered as Unemployed in employement exchange</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><br />
                                            <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d31">WIDOW CERTIFICATE</Button>
                                            <div id="d31" className="collapse">
                                                <ul>
                                                    <li>Adhar Card </li>
                                                    <li>Ration card</li>
                                                    <li>Death Certificate</li>
                                                    <li>Voter ID</li>
                                                    <li>Self Declaration</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
<hr/>
<div>
                            <Row>
                                
                                <Col>
                                    <img class="shadow" src={require('../../images/food.png').default} style={{ width: "300px", height: "300px" }} alt="..." />
                                </Col>
                                <Col><br /><br />
                                    <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d2">RATION CARD </Button>
                                    <div id="d2" className="collapse">
                                        <ul><li>Adhar Xerox 1 copy</li><li>2 photo</li></ul>
                                    </div>
                                </Col>
                                <Col></Col><Col></Col>
                            </Row>
                        </div>
                           
                        </div>
                        </div>
                    <Row><Col></Col></Row><br />
                </Container></div>
        </>
    )
}
export default Sevasindhu;