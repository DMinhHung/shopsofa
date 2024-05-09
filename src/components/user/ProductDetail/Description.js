import React from "react";

const Description = () => {
  return (
    <>
      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-pills-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <p>
            {/* With supporting text below as a natural lead-in to additional
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. */}
          </p>
          <div className="row mb-2">
            {/* <div className="col-12 col-md-6">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Some great feature name here
                </li>
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Duis aute irure dolor in reprehenderit
                </li>
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Optical heart sensor
                </li>
              </ul>
            </div> */}
            <div className="col-12 col-md-6 mb-0">
              {/* <ul className="list-unstyled">
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Easy fast and ver good
                </li>
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Some great feature name here
                </li>
                <li>
                  <i className="fas fa-check text-success me-2" />
                  Modern style and design
                </li>
              </ul> */}
            </div>
          </div>
          <table className="table border mt-3 mb-2">
            <tbody>
              <tr>
                <th className="py-2">Display:</th>
                <td className="py-2">13.3-inch LED-backlit display with IPS</td>
              </tr>
              <tr>
                <th className="py-2">Processor capacity:</th>
                <td className="py-2">2.3GHz dual-core Intel Core i5</td>
              </tr>
              <tr>
                <th className="py-2">Camera quality:</th>
                <td className="py-2">720p FaceTime HD camera</td>
              </tr>
              <tr>
                <th className="py-2">Memory</th>
                <td className="py-2">8 GB RAM or 16 GB RAM</td>
              </tr>
              <tr>
                <th className="py-2">Graphics</th>
                <td className="py-2">Intel Iris Plus Graphics 640</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade mb-2"
          id="ex1-pills-2"
          role="tabpanel"
          aria-labelledby="ex1-tab-2"
        >
          Tab content or sample information now <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
        </div>
        <div
          className="tab-pane fade mb-2"
          id="ex1-pills-3"
          role="tabpanel"
          aria-labelledby="ex1-tab-3"
        >
          Another tab content or sample information now <br />
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div
          className="tab-pane fade mb-2"
          id="ex1-pills-4"
          role="tabpanel"
          aria-labelledby="ex1-tab-4"
        >
          Some other tab content or sample information now <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </>
  );
};

export default Description;
