import React, { useEffect } from "react";
import feather from "feather-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
const Row1 = () => {
  return (
    <div>
      <h1 className="h3 mb-3">
        <strong>Analytics</strong> Dashboard
      </h1>

      <div className="row">
        <div className="col-xl-6 col-xxl-5 d-flex">
          <div className="w-100">
            <div className="row">
              <div className="col-sm-6">
                <Card1 />
                <Card2 />
              </div>
              <div className="col-sm-6">
                <Card3 />
                <Card4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
