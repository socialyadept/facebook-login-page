import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FacebookContainer() {
  return (
    <div className="d-flex-column justify-content-center h-100 my-5">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt=""
        className="img-fluid facebook-img w-75"
      />
      <h3 className="font-weight-normal">
        Facebook helps you connect and share with people in your life
      </h3>
    </div>
  );
}

export default FacebookContainer;
