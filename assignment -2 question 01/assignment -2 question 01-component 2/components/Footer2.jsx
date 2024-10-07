import React from "react";

const Footer2 = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna aliqua.
                </p>
                <p className="footer-text"></p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form
                    target="_blank"
                    novalidate="true"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Email '"
                      required=""
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>

                    <div className="info pt-20"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
