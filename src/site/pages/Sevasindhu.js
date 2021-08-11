import React from "react";

import Karnataka from "./Karnataka";
import Revenue from "./Revenue";
const Sevasindhu = () => {
    return (
        <>

            <div className="container"><br />
                <h1 style={{ textAlign: "center" }}><u>About Seva Sindhu</u></h1><br />
                <p>Seva sindhu is the common citizen service portal of government of Karnataka. To provide government services and other schemes information in to a single portal. Seva sindhu is implemented under e-District Mission Mode Project (MMP) of department of Electronics and Information technology (DeitY). Ministry of communication and IT departments and Government of India.

                </p>

            </div>
          
            <br />
            <Karnataka />
            <br/>
            <Revenue/>
            <br/>
            <h4>Department and Services</h4>
            <img class="shadow" src={require('../../images/pension.png').default} style={{ width: "300px", height: "300px" }} alt="..." />
            <img class="shadow" src={require('../../images/revenue.png').default} style={{ width: "300px", height: "300px" }} alt="..." />
            <img class="shadow" src={require('../../images/food.png').default} style={{ width: "300px", height: "300px" }} alt="..." />
            <hr />
        </>
    )
}
export default Sevasindhu;