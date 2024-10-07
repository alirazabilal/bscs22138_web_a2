import React from "react";

const Card4 = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col mt-0">
              <h5 className="card-title">Orders</h5>
            </div>

            <div className="col-auto">
              <div className="stat text-primary">
                <i className="align-middle" data-feather="shopping-cart"></i>
              </div>
            </div>
          </div>
          <h1 className="mt-1 mb-3">64</h1>
          <div className="mb-0">
            <span className="text-danger">
              {" "}
              <i className="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
            </span>
            <span className="text-muted">Since last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
