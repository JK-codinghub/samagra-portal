import React from "react";

import { Container, Row, Col } from 'react-bootstrap'
const Revenue = () => {
    return (

        <>
            <br />
            <Container>


                <fieldset style={{ border: "2px orange solid"}}>

                    <legend style={{  marginLeft: "0em", padding: "0.2em 2em ",  fontSize: "20px", backgroundColor: "orange" }}>REVENUE DEPARTMENT</legend>
                    <br /><br />

                    <Row>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Agriculture Family Member Certificate</button>
                            <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Agriculture Family Member Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b> Citizens in need of this service <br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.Ration Card<br />3.EPIC<br />4.ID Proof<br />5.Genealogical Certificate<br />6.Self Declaration before RI.DT<br />
                                            <b>Delivery Time (Days) :</b> 7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receiving of application in Seva Sindhu portal and transfer the application to the concerned officer<br />
                                            2. Verification by village accountant<br />
                                            3. Verification by revenue inspector<br />
                                            4. Caseworker s note and preparation of draft<br />
                                            5. Supervisors note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution<br />
                                            7. Distribution of agriculture family certificate<br />

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal2" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Agricultural Labour Certificate</button>
                            <div className="modal fade" id="myModal2" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Agricultural Labour Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b> Citizens in need of this service <br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.Ration Card<br />3.EPIC<br />4.ID Proof<br />
                                            <b>Delivery Time (Days) :</b> 7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receiving of application in Seva Sindhu portal and transfer the application to the concerned officer<br />
                                            2. Verification by village accountant<br />
                                            3. Verification by revenue inspector<br />
                                            4. Caseworkers note and preparation of draft<br />
                                            5. Supervisors note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution<br />
                                            7. Distribution of agricultural labour certificate </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal3" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Agriculturist Certificate</button>
                            <div className="modal fade" id="myModal3" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Agriculturist Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.RI Report<br />3.RTC Copy<br />4.ID Proof<br />5.VA Report<br />
                                            <b>Delivery Time (Days) :</b> 7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receiving of application in Seva Sindhu portal and transfer the application to the concerned officer<br />
                                            2. Verification by village accountant<br />
                                            3. Verification by revenue inspector<br />
                                            4. Caseworkers note and preparation of draft<br />
                                            5. Supervisors note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution<br />
                                            7. Distribution of agriculture certificate<br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal4" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Attestation of family tree</button>
                            <div className="modal fade" id="myModal4" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Attestation of family tree</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.Affidavit<br />3.Death Certificate<br />4.Rental Agreement (Urban)<br />5.RECEIPT OF APPLICATION<br />6. RECEIPT OF PRESCRIBED FEE<br />
                                            <b>Delivery Time (Days) :</b>7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receipt of application in Seva Sindhu Portal<br />
                                            2. Transfer to section/record room<br />
                                            3. Verification by concerned section/r.r.<br />
                                            4. Transfer to shirasthedar<br />
                                            5. Approval by shirasthedar<br />
                                            6. Issue of certifiacte
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal5" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Bonafide Certificate</button>
                            <div className="modal fade" id="myModal5" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Bonafide Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Ration Card<br />2.EPIC<br />3.ID Proof<br />4.Medical Certificate<br />5.Transgender Medical Certificate<br />6.Address Proof<br />7.Bank Account(Passbook FirstPage)<br />
                                            <b>Delivery Time (Days) :</b>  7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Submission of application in Seva Sindhu Portal and transfer to revenue inspector<br />
                                            2. Verification and submission of report by village accountant<br />
                                            3. Verification and submission of report by revenue inspector<br />
                                            4. Verification and submission by shirstedar/dy.tahsildar to tahsildar<br />
                                            5. Verification and approval by tahsildar<br />
                                            6. Transfer to operator and issue of certificate<br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal6" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Domicile Certificate</button>
                            <div className="modal fade" id="myModal6" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Domicile Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.EPIC<br />3.ID Proof<br />4. Income Certificate<br />5.Passport (Urban)<br />6.Rationcard<br />7.Rental Agreement (Urban)<br />
                                            <b>Delivery Time (Days) :</b>  7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Submission of application in Seva Sindhu Portal<br />
                                            2. Verification and submission of report by va<br />
                                            3. Verification and submission of report by ri<br />
                                            4. Verification and approval by tahsildar/cy. Tahsildar
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <br />
                    <Row>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal17" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Income Certificate for Employment</button>
                            <div className="modal fade" id="myModal17" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Income Certificate for Employment</h4>
                                        </div>
                                        <div className="modal-body">
                                            <i>Display Soon...</i>
                                            <div className="modal-footer">
                                                <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal8" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Land Holding Certificate</button>
                            <div className="modal fade" id="myModal8" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Land Holding Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.RTC copy<br />2.Mutation copy<br />3.ID Proof<br />
                                            <b>Delivery Time (Days) :</b>  21<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Submission of application in Seva Sindhu Portal<br />
                                            2. Distribution of applications from ri to village accountant<br />
                                            3. Local enquiry by va and collecting of relevant records and information and putting up the opinion<br />
                                            4. Report of revenue inspector and recommandations of revenue inspector with relevant documents. And transfering of application from boo login to caseworker login noting ri report<br />
                                            5. Verification by case worker and generation of office note<br />
                                            6. Recommendations of sirestedar and approval of office note<br />
                                            7. Approval of office note and generation of draft copy by tahasildar<br />
                                            8. Approval of draft copy and digital signing of final certificate and moving for distribution in front office<br />
                                            Submission of application in Seva Sindhu Portal
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal9" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Landless Certificate</button>
                            <div className="modal fade" id="myModal9" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Landless Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Ration card or election<br />2.Voters id card<br />3. Pupose - for availing facility under government schemes/ loan /others pleas mention Family tree<br />
                                            <b>Delivery Time (Days) :</b>  7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Submission of application in Seva Sindhu Portal and transfer to revenue inspector<br />
                                            2. Verification by village accountant<br />
                                            3. Verification by revenue inspector<br />
                                            4. Caseworker's note and preparation of draft<br />
                                            5. Shirastedar's note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution in front office<br />
                                            7. Distribution of landless certificate
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal10" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Non-Creamy layer Certificate</button>
                            <div className="modal fade" id="myModal10" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Non-Creamy layer Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.Epic<br />3. ID Proof<br />4.Ration Card<br />
                                            <b>Delivery Time (Days) :</b> 21<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Submission of application in Seva Sindhu Portal and transfer to revenue inspector<br />
                                            2. Local enquiry by ri and submission to back office operator<br />
                                            3. Processing of file<br />
                                            4. Approval by shirastedar and submission to tahasildar<br />
                                            5. Approval by tahasildar<br />
                                            6. Issue of certificate<br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal11" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>OBC Certificate (Central)</button>
                            <div className="modal fade" id="myModal11" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>OBC Certificate (Central)</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1. Address Proof<br />2.Epic<br />3.ID Proof<br />4.  Old Caste Certificate<br /> 5.Rationcard<br />6.Relatives Certificate & Genealogical tree if none of the documents available<br />7.  School certificate (If Studied)<br />8.Self Declaration by applicant before RI (Urban)<br />
                                            <b>Delivery Time (Days) :</b>  21<br />
                                            <b>Procedure for applying:</b> <br />
                                            Application along with necessary documents
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal12" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Application For Population Certificate</button>
                            <div className="modal fade" id="myModal12" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Application For Population Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1. Applicant should mention name of the village and year of the details required.<br />
                                            <b>Delivery Time (Days) :</b>  7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receiving of application in Seva Sindhu portal and transfer the application to the concerned officer<br />
                                            2. Transfering the application to concerned case worker<br />
                                            3. Search and verification stage<br />
                                            4. Caseworker' s note<br />
                                            5. Shirastedar's note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution<br />
                                            7. Distribution of population certificate
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal13" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Small and Marginal Farmer Certificate</button>
                            <div className="modal fade" id="myModal13" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Small and Marginal Farmer Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Total rtcs of land belonging to the family purpose<br />2.Ration card or election voters id card<br />
                                            <b>Delivery Time (Days) :</b> 7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receiving of application in Seva Sindhu portal and transfer the application to the concerned officer<br />
                                            2. Verification by village accountant<br />
                                            3. Verification by revenue inspector<br />
                                            4. Caseworker' s note and preparation of draft<br />
                                            5. Shirastedar's note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution<br />
                                            7. Distribution of certificate
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal14" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Surviving Family member Certificate</button>
                            <div className="modal fade" id="myModal14" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Surviving Family member Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.Death Certificate<br />3.ID Proof<br />4.Epic<br />5.Rationcard<br />
                                            <b>Delivery Time (Days) :</b>  7<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Receiving of application in Seva Sindhu portal and transfer the application to the concerned officer<br />
                                            2. Verification by village accountant<br />
                                            3. Verification by revenue inspector<br />
                                            4. Caseworker' s note and preparation of draft<br />
                                            5. Supervisor's note<br />
                                            6. Approval of draft copy and digital signing of final certificate and moving for distribution<br />
                                            7. Distribution of alive amily members certificate
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal15" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Living Certificate</button>
                            <div className="modal fade" id="myModal15" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Living Certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <i> Display Soon...</i>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />

                    <Row>
                    
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal7" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Income Certificate for compassionate appointment</button>
                            <div className="modal fade" id="myModal7" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Income Certificate for compassionate appointment</h4>
                                        </div>
                                        <div className="modal-body">
                                            <b>Eligibility:</b>Citizens in need of this service<br />
                                            <b>Supporting Document:</b> <br />1.Address Proof<br />2.Bank Statement for last one year (Urban)<br />3.Epic<br />4. ID Proof<br />5.Ration Card<br />6. Salary certificate self declaration<br />
                                            <b>Delivery Time (Days) :</b> 21<br />
                                            <b>Procedure for applying:</b> <br />
                                            1. Submission of application in Seva Sindhu Portal<br />
                                            2. Transfer to section/record room<br />
                                            3. Verification by concerned section/r.r.<br />
                                            4. Transfer to shirasthedar<br />
                                            5. Approval by shirashtedar<br />
                                            6. Issue of certificate
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal16" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>No government job certificate</button>
                            <div className="modal fade" id="myModal16" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>No government job certificate</h4>
                                        </div>
                                        <div className="modal-body">
                                            <i>Display Soon...</i>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                        <Col>&nbsp;&nbsp;
                            <button type="button" className="btn btn-light btn-lg" data-toggle="modal" data-target="#myModal18" style={{ fontFamily: "sans-serif", width: "320px", fontSize: "15px" }}>Income and Assest Certificate for economically weaker</button>
                            <div className="modal fade" id="myModal18" role="dialog">
                                <div className="modal-dialog modal-md">
                                    <div className="modal-content">
                                        <div className="modal-header bg bg-warning">
                                            <h4>Income and Assest Certificate for economically weaker</h4>
                                        </div>
                                        <div className="modal-body">
                                            <i>Display Soon...</i>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row><br />
                    

                    <br /><br />


                </fieldset>




            </Container><br />
        </>
    )
}
export default Revenue