function Demo21() {
  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="row">
        <div className="col-md-12">
          <p className="text-center">Hello1</p>
          <p className="text-left">Hello2</p>
          <p className="text-end">Hello3</p>
          <p className="text-info">Hello3</p>
          <p className="text-success">Hello3</p>
          <p className="text-warning">Hello3</p>
          <p className="text-danger">Hello3</p>
          <p className="text-secondary">Hello3</p>
          <p className="text-light" style={{ backgroundColor: "blue" }}>
            Hello3
          </p>
          <i
            className="bi bi-badge-8k"
            style={{ fontSize: "50px", color: "blue" }}
          ></i>
        </div>
      </div>
      <div className="col-md-12">
        <p className="bg-info">Hello1</p>
        <p className="bg-success">Hello1</p>
        <p className="bg-warning">Hello1</p>
        <p className="bg-danger">Hello1</p>
        <p className="bg-secondary">Hello1</p>
        <p className="bg-light">Hello1</p>
        <button type="button" className="btn btn-secondary">
          secondary
        </button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-info">
          info
        </button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-success">
          success
        </button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-warning">
          warning
        </button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-danger">
          warning
        </button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-light">
          light
        </button>
        &nbsp;&nbsp;
        <button type="button" className="btn btn-light">
          {" "}
          <i
            className="bi bi-floppy"
            style={{color: "blue" }}
          ></i> <span style={{marginLeft: "10px"}}>Save</span>
        </button>
        &nbsp;&nbsp;
        <a href="https://github.com" className="btn btn-danger"><i
            className="bi bi-trash"
          ></i><span style={{marginLeft: "10px"}}>Delete</span></a>
                  &nbsp;&nbsp;
        <a href="https://github.com" className="btn btn-outline-success"><i
            className="bi bi-download"
          ></i><span style={{marginLeft: "10px"}}>Download</span></a>
      </div>
      &nbsp;&nbsp;
      <div className="row">
<div className="col-md-12">
            <span className="badge bg-success">Tag1</span> &nbsp;&nbsp;
            <span className="badge bg-danger">Tag1</span> &nbsp;&nbsp;
            <span className="badge bg-info rounded-pill">Tag1</span> &nbsp;&nbsp;
</div>
      </div>
    </div>
  );
}
export default Demo21;
