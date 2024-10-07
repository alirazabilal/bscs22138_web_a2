import React from "react";

const Card3 = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col mt-0">
              <h5 className="card-title">Earnings</h5>
            </div>

            <div className="col-auto">
              <div className="stat text-primary">
                <i className="align-middle" data-feather="dollar-sign"></i>
              </div>
            </div>
          </div>
          <h1 className="mt-1 mb-3">$21.300</h1>
          <div className="mb-0">
            <span className="text-success">
              {" "}
              <i className="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
            </span>
            <span className="text-muted">Since last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
