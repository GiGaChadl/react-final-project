function Demo26_2() {
  return (
    <div className="container" style={{ margin: "20px" }}>
      <div className="row">
        <div className="col-md-6">
          <div className="list-group">
            {/* 1 */}
            <a
              href="https:google.com"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="text-dark">
                List group items 1
              </span>

                <div>
                  <span><i className="bi bi-camera-video text-primary"></i></span>&nbsp;&nbsp;
                  <span><i className="bi bi-trash"></i></span>&nbsp;&nbsp;
                  <span><i className="bi bi-flag"></i></span>
                </div>
            </a>
            {/* 2 */}
            <a
              href="https:google.com"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="text-primary">
                <i className="bi bi-camera-video"></i>List group items 2
              </span>
              <span className="badge bg-danger">14</span>
            </a>
            {/* 3 */}
            <a
              href="https:google.com"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="text-primary">
                <i className="bi bi-music-note-beamed"></i>List group items 3
              </span>
              <span className="badge bg-danger">14</span>
            </a>
            {/* 4 */}
            <a
              href="https:google.com"
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="text-primary">
                <i className="bi bi-camera-video"></i>List group items 4
              </span>
              <span className="badge bg-danger">14</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Demo26_2;
