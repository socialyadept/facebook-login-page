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
          <Form
            method="post"
            action="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE0MDc3MjQyLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D"
          >
            <div className="email">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Email address or phone number"
                  class="inputClass"
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
          <a
            className="d-block my-2 text-center w-100 forgotPass"
            href="https://www.facebook.com/recover/initiate/?ars=facebook_login&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE0MDc1ODQ4LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D"
          >
            Forgotten password?
          </a>
          <hr></hr>
        </div>
        <div className="text-center">
          <button className="btn btn-success mb-4">
            <a class="createAccount" href="https://www.facebook.com/r.php">
              Create a new account
            </a>
          </button>
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
