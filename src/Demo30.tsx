import { use } from "react";

function Demo30() {
  const listNames = [
    {
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      userName1: "johndoe",
      userName2: "johndoe",
      userName3: "johndoe",
    },
    {
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      userName1: "johndoe",
      userName2: "johndoe",
      userName3: "johndoe",
    },
    {
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      userName1: "johndoe",
      userName2: "johndoe",
      userName3: "johndoe",
    },
    {
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      userName1: "johndoe",
      userName2: "johndoe",
      userName3: "johndoe",
    },
    {
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      userName1: "johndoe",
      userName2: "johndoe",
      userName3: "johndoe",
    },
  ];
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            {/* header */}
            <div className="card-header d-flex justify-content-between align-items-center">
              <div>
                <span className="btn btn-success">
                  <i className="bi bi-windows"></i>
                </span>
                &nbsp;
                <span className="btn btn-success">
                  <i className="bi bi-microsoft"></i>
                </span>
              </div>
              <h3>Employee List</h3>
              <div>
                <span className="btn btn-success">
                  <i className="bi bi-pencil"></i>
                </span>{" "}
                &nbsp;
                <span className="btn btn-success">
                  <i className="bi bi-trash"></i>
                </span>{" "}
                &nbsp;
                <span className="btn btn-success">
                  <i className="bi bi-arrow-through-heart-fill"></i>
                </span>
              </div>
            </div>
            {/* body ne */}
            <div className="card-body">
              <table className="table table-striped">
                {/* thead ne */}
                <thead>
                  <tr>
                    <th className="text-dark">
                      <a
                        href="https:google.com"
                        className="text-dark btn"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name &nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                  </tr>
                </thead>
                {/* tbody ne */}
                <tbody>
                  {listNames.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.userName}</td>
                        <td>{item.userName1}</td>
                        <td>{item.userName2}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-dark">
                      <a
                        href="https:google.com"
                        className="text-dark btn"
                        style={{ fontWeight: "bold" }}
                      >
                        First Name &nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                    <th className="text-primary">
                      <a
                        href="https:google.com"
                        className="text-primary btn"
                        style={{ fontWeight: "bold" }}
                      >
                        UserName&nbsp;
                        <i className="bi bi-arrow-down-up"></i>
                      </a>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* footer */}
            <div className="card-footer d-flex justify-content-between">
              {/* <div className="row "> */}
              <p>Showing 1 to 5 of 57 entries</p>
              {/* <div className="col-md-12"> */}
              <ul className="pagination pagination-sm d-flex justify-content-center align-items-center">
                <li className="page-item">
                  <a href="https://google" className="page-link">
                    Pre
                  </a>
                </li>
                <li className="page-item ">
                  <a href="https://google" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item ">
                  <a href="https://google" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item ">
                  <a href="https://google" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item ">
                  <a href="https://google" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item ">
                  <a href="https://google" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item active">
                  <a href="https://google" className="page-link">
                    Next
                  </a>
                </li>
              </ul>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo30;
