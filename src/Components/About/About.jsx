import React from "react";

export default function About({ AddtoCart }) {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center m-auto py-5">
              <p className="fw-bold fs-2">About Us</p>
              <p className="fs-5 fw-medium ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </p>
              <div className="mt-5 d-flex align-items-center justify-content-center">
                <div className="social-icon  ">
                  <i className=" me-4 fs-1 fa-brands fa-facebook"></i>
                </div>
                <div className="social-icon">
                  <i className=" me-4 fs-1 fa-brands fa-instagram"></i>
                </div>
                <div className="social-icon">
                  <i className="me-4 fs-1 fa-brands fa-twitter"></i>
                </div>
                <div className="social-icon">
                  <i className="me-4 fs-1 fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
            <div className="mb-5"></div>
            <div className="mb-5"></div>
            <div className="mb-5"></div>
            <div className="mb-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
