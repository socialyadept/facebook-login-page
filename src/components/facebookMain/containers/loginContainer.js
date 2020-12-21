import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../facebookMain.css";

function LoginContainer() {
  return (
    <div>
      <div className="container my-2 rounded shadow position-relative bg-white">
        <br />
        <div className="">
          <Form>
            <div className="email">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address or phone number"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>

            <div className="text-center font-weight-bold w-100 login-btn">
              <Button variant="primary" type="submit" column sm="2">
                Login
              </Button>
            </div>
          </Form>
          <p className="text-primary my-2 text-center">Forgotten password?</p>
          <hr></hr>
        </div>
        <div className="text-center">
          <button className="btn btn-success mb-4">Create a new account</button>
        </div>
      </div>
      <div className="my-3 text-center">
        <p>
          <strong>Create a Page</strong> for celebrity brand and business
        </p>
      </div>
    </div>
  );
}

export default LoginContainer;
