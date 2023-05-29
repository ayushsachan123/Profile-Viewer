import React from 'react'
import "../App.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container footer1">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h6 className="text-uppercase">About</h6>
              <p>
                I am finishing up my Bachelor's of Technology at Krishna
                Institute of Engineering & Technology (KIET). Skilled in C++
                (Programming Language), C (Programming Language), Javascript,
                React.js, Node.js, MongoDB, Html, CSS.
              </p>

              <div className="mt-4">
                <a
                  type="button" style={{margin : "9px"}}
                  className="btn btn-outline-primary"
                  href="https://www.linkedin.com/in/ayush-sachan-469124234/"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  type="button"
                  className="btn btn-outline-secondary"
                  href="https://github.com/ayushsachan123"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home"></i>
                  </span>
                  <span className="ms-2">
                    Street-3, Friends Colony, Gaziabad
                  </span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="ms-2">ayushsachan.in@gmail.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone"></i>
                  </span>
                  <span className="ms-2">+91- 8840733668</span>
                </li>
              </ul>
            </div>

            <div className="text-center p-3">
              © 2023 Copyright
              <br />
              Made by- Ayush Sachan
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  
