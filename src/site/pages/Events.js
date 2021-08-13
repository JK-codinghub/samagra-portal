import React from "react";
import { Button, Col, Row } from "react-bootstrap";


const Events = () => {
    return (
        <div className="container">
            <h1>Events page</h1><hr />
            <Row><Col>
                <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d1">Event 1 </Button>
                <div id="d1" className="collapse">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d2">Event 1 </Button>
                    <div id="d2" className="collapse">
                        d2  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </Col> </Row>
                <br/>
            <Row>
                <Col>
                    <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d3">Event 1 </Button>
                    <div id="d3" className="collapse">
                        d3   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </Col> </Row>
<br/>
            <Row>
                <Col>
                    <Button type="button" className="border border-warning btn-light dropdown-toggle" data-toggle="collapse" data-target="#d4">Event 1 </Button>
                    <div id="d4" className="collapse">
                        d4   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </Col>
            </Row>
            <br/>
        </div>

    )
}
export default Events;