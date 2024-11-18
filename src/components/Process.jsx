import React from "react";
import "../styles/process.scss";
import { Building, House, Requirement, Suceed } from "../assets/svgs/Svg";

const Process = () => {
  return (
    <div className="process">
      <div className="heading">
      <p style={{color:"#084d84"}}>our process</p>
      <h1>Process</h1>
      <p >
        Champions policy is to fulfill the customer requirements by completing
        the project in time by considering high quality and for that we follow
        proper procedure and process
      </p>
      </div>
      
      <div className="steps">
        <div className="rectangle">
          <div className="circle">
           
            <Requirement width="50px" height="50px" />
          </div>
          <h3>Requirements</h3>
          <p>
            It is important to collect and study all the requirements for the
            project before the proposal to know the suitable solution and
            materials
          </p>
        </div>
        <div className="rectangle">
          <div className="circle">
            <House width="50px" height="50px" />

          </div>
          <h3>Proposal</h3>
          <p>
            By studying customers requirements and specifications we will
            propose most suitable solutions by considering quality and cost
          </p>
        </div>
        <div className="rectangle">
          <div className="circle">
            <Building width="50px" height="50px" />
          </div>
          <h3>Application</h3>
          <p>
            Application will be done by our highly skilled technicians and
            helpers under the supervision of engineer by using approved
            materials
          </p>
        </div>
        <div className="rectangle">
          <div className="circle">
          <Suceed width="50px" height="50px" />
          </div>
          <h3>Delivery</h3>
          <p>
            We are responsible to complete the project and handover in time to
            full fill our customer requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
