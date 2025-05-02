function Demo25() {
  let products = [
    {
      id: "01",
      name: "Product 1",
      project: "Created 01.01.2019",
      photo: "1.png",
      price: 185,
      width: 25,
    },
    {
      id: "02",
      name: "Product 1",
      project: "Created 01.01.2019",
      photo: "1.png",
      price: 185,
      width: 50,
    },
    {
      id: "03",
      name: "Product 1",
      project: "Created 01.01.2019",
      photo: "1.png",
      price: 185,
      width: 75,
    },
    {
      id: "04",
      name: "Product 1",
      project: "Created 01.01.2019",
      photo: "1.png",
      price: 185,
      width: 60,
    },
    {
      id: "05",
      name: "Product 1",
      project: "Created 01.01.2019",
      photo: "1.png",
      price: 185,
      width: 40,
    },
  ];
  return (
    <div className="container" style={{ margin: "20px" }}>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <th>#</th>
              <th>Project Name</th>
              <th>Team Member</th>
              <th>Project Progress</th>
              <th>Status</th>
              <th></th>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                      {product.name} <br /> {product.project}
                    </td>
                    <td>
                      <img
                        src={"./img/" + product.photo}
                        alt=""
                        width={50}
                        className="rounded-circle"
                      />
                    </td>
                    <td>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                          style={{ width: product.width + "%" }}
                          aria-valuenow={product.width}
                          aria-valuemin={0}
                          aria-valuemax={10}
                        ></div>
                      </div>{" "}
                      <p> {product.width}% Complete</p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <span className="badge bg-success">Success</span>{" "}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <a href="https://github.com" className="btn btn-info">
                        <i className="bi bi-folder"></i>
                        <span style={{ marginLeft: "10px" }}>View</span>
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a href="https://github.com" className="btn btn-warning">
                        <i className="bi bi-pencil"></i>
                        <span style={{ marginLeft: "10px" }}>Edit</span>
                      </a>
                      &nbsp;&nbsp;
                      <a href="https://github.com" className="btn btn-danger">
                        <i className="bi bi-trash"></i>
                        <span style={{ marginLeft: "10px" }}>Delete</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Demo25;
