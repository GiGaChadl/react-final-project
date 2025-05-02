import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BaiThiAVG from "./BaiThiAVG";
import BaiThiGender from "./BaiThiGender";
import BaiThiKeyWord from "./BaiThiKeyWord";
import BTStudentDetails from "./BTStudentDetails";
import BTTables from "./BTTables";
import studentListWithDTB from "./BTStudentList";
import "bootstrap/dist/css/bootstrap.min.css";

function BaiThiHome() {
  // let date = new Date();
  // let year = date.getFullYear();
  return (
    <>
      <BrowserRouter>
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            {/* menu */}
            {/* Navbar */}
            <nav className="navbar navbar-dark bg-dark">
              <li className="nav-item active">
                <Link to={"/react-final-project/home"} className="navbar-brand">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/react-final-project/search-by-keyword"}
                  className="navbar-brand"
                >
                  Search By KeyWord
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/react-final-project/search-by-avg"}
                  className="navbar-brand"
                >
                  Search By AVG
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/react-final-project/search-by-gender"}
                  className="navbar-brand"
                >
                  Search By Gender
                </Link>
              </li>
            </nav>
            {/* body */}
            <div className="col-md-12">
              <Routes>
                <Route
                  path="/react-final-project/"
                  element={<BTTables students={studentListWithDTB} />}
                />
                <Route
                  path="/react-final-project/home"
                  element={<BTTables students={studentListWithDTB} />}
                />
                <Route
                  path="/react-final-project/search-by-keyword"
                  element={<BaiThiKeyWord />}
                />
                <Route
                  path="/react-final-project/search-by-avg"
                  element={<BaiThiAVG />}
                ></Route>
                <Route
                  path="/react-final-project/search-by-gender"
                  element={<BaiThiGender />}
                ></Route>
                <Route
                  path="/react-final-project/student-details/:id"
                  element={<BTStudentDetails />}
                ></Route>
              </Routes>
            </div>
          </div>
          <div className="col-md-12">
            <span
              className="d-flex justify-content-center"
              style={{ margin: "10px 0" }}
            >
              © 2025 JosNguyen. All rights reserved.
            </span>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default BaiThiHome;
