function Demo26_1() {
  return (
    <div className="container" style={{ margin: "20px" }}>
      <div className="row">
        <div className="col-md-6">
          <div className="list-group">
            {/* 1 */}
            <a href="https:google.com" className="list-group-item d-flex justify-content-between align-items-center active">
              <span className="text-light"><i className="bi bi-camera"></i> Pictures</span>
              <span className="badge bg-danger">14</span>
            </a>
            {/* 2 */}
            <a href="https:google.com" className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-primary"><i className="bi bi-camera-video"></i> Document</span>
              <span className="badge bg-danger">14</span>
            </a>
            {/* 3 */}
            <a href="https:google.com" className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-primary"><i className="bi bi-music-note-beamed"></i> Musics</span>
              <span className="badge bg-danger">14</span>
            </a>
            {/* 4 */}
            <a href="https:google.com" className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-primary"><i className="bi bi-camera-video"></i> Videos</span>
              <span className="badge bg-danger">14</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Demo26_1;
