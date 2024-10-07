import React, { useEffect } from "react";
import feather from "feather-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Row5 = () => {
  return (
    <div>
      <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
        <div className="card flex-fill">
          <div className="card-header">
            <h5 className="card-title mb-0">Calendar</h5>
          </div>
          <div className="card-body d-flex">
            <div className="align-self-center w-100">
              <div className="chart">
                <div id="datetimepicker-dashboard"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row5;
