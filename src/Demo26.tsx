function Demo26() {
  return (
    <div className="container" style={{ margin: "20px" }}>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-info">Menu1</li>
            <li className="list-group-item active">Menu2</li>
            <li className="list-group-item disabled">Menu3</li>
            <li className="list-group-item list-group-item-hover">Menu4</li>
            <li className="list-group-item list-group-item-action list-group-item-dark">
              Menu5
            </li>
            <li
              className="list-group-item"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>span1</span>
              <span>span2</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-md-6">
          <div className="list-group">
            <a href="https:google.com" className="list-group-item">
              Menu1
            </a>
            <a href="https:google.com" className="list-group-item">
              Menu2
            </a>
            <a href="https:google.com" className="list-group-item">
              Menu3
            </a>
            <a href="https:google.com" className="list-group-item">
              Menu4
            </a>
            <a href="https:google.com" className="list-group-item active">
              Menu5
            </a>
            <a href="https:google.com" className="list-group-item d-flex justify-content-between align-items-center">
              <span>span1</span>
              <span>span2</span>    
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Demo26;
