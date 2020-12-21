import React from "react";
import FacebookContainer from "./containers/facebookContainer";
import LoginContainer from "./containers/loginContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./facebookMain.css";

function FacebookMain() {
  return (
    <div className="fill-window container container1 bg-light">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <FacebookContainer />
        </div>
        <div className="col-md-5">
          <LoginContainer />
        </div>
      </div>
    </div>
  );
}

export default FacebookMain;
