import React from "react";

import "../../assets/admin/css/main.css";
import "../../assets/admin/css/styleadmin.css";
import Header from "../../components/admin/Header";
import NavUser from "../../components/admin/NavUser";
const Dashboard = () => {
  return (
    <>
      <div>
        <div className="wrapper">
          <div id="overlay" />
          {/* sidebar start */}
          <Header />
          {/* sidebar end */}
          <div className="content">
            {/* top navbar start */}
            <NavUser />
            {/* top navbar end */}
            {/* main content start */}
            <main className="bg-secondary bg-opacity-25 min-vh-100">
              <div className="container-fluid p-3 p-md-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                  <div className="fs-4 text-secondary fw-bolder">Dashboard</div>
                  <div
                    className="text-secondary lead fw-normal"
                    id="curr_date_time"
                  />
                </div>
                <hr />
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <a href="#" className="text-decoration-none">
                      <div className="card bg-primary bg-gradient shadow-sm custom-card">
                        <div className="card-body p-3 pb-2 px-3 d-flex flex-row justify-content-between align-items-center">
                          <div>
                            <h1>
                              <i className="fas fa-cart-shopping fa-2x text-white-50" />
                            </h1>
                          </div>
                          <div className="text-center">
                            <h2 className="display-4 fw-bold text-white">1</h2>
                            <h4 className="text-white-50">Orders</h4>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="#" className="text-decoration-none">
                      <div className="card bg-primary bg-success shadow-sm custom-card">
                        <div className="card-body p-3 pb-2 px-3 d-flex flex-row justify-content-between align-items-center">
                          <div>
                            <h1>
                              <i className="fas fa-list fa-2x text-white-50" />
                            </h1>
                          </div>
                          <div className="text-center">
                            <h2 className="display-4 fw-bold text-white">4</h2>
                            <h4 className="text-white-50">Products</h4>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="#" className="text-decoration-none">
                      <div className="card bg-danger bg-gradient shadow-sm custom-card">
                        <div className="card-body p-3 pb-2 px-3 d-flex flex-row justify-content-between align-items-center">
                          <div>
                            <h1>
                              <i className="fas fa-users fa-2x text-white-50" />
                            </h1>
                          </div>
                          <div className="text-center">
                            <h2 className="display-4 fw-bold text-white">5</h2>
                            <h4 className="text-white-50">Users</h4>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <a href="#" className="text-decoration-none">
                      <div className="card bg-dark bg-gradient shadow-sm custom-card">
                        <div className="card-body p-3 pb-2 px-3 d-flex flex-row justify-content-between align-items-center">
                          <div>
                            <h1>
                              <i className="fas fa-people-line fa-2x text-white-50" />
                            </h1>
                          </div>
                          <div className="text-center">
                            <h2 className="display-4 fw-bold text-white">8</h2>
                            <h4 className="text-white-50">Visitors</h4>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <div className="card shadow">
                      <div className="card-header">
                        <h4 className="text-secondary fw-bold">Charts</h4>
                      </div>
                      <div className="card-body">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="card shadow-sm">
                              <div className="card-body">
                                <canvas id="myChart" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card shadow-sm">
                              <div className="card-body">
                                <canvas id="lineChart" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* main content end */}
            {/* footer start */}
            <footer className="bg-light shadow text-secondary text-center d-flex flex-column flex-md-row justify-content-between p-3 p-md-4">
              <div>
                Copyright © 2022 <a href="https://dcodemania.com">DCodeMania</a>
              </div>
              <div>Made with ❤️ in India</div>
            </footer>
            {/* footer end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
