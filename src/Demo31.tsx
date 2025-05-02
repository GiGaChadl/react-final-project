function Demo28() {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-6">
          <form action="">
            <div>
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input type="text" id="userName" className="form-control" />
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="input-group">
                <input type="text" id="email" className="form-control" />
                <span className="input-group-text">@</span>
                <select name="" id="role" className="form-select-sm">
                  <option value="">gmail.com</option>
                  <option value="">email.com</option>
                  <option value="">gmail.vn</option>
                  <option value="">email.vn</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              &nbsp;
              <textarea
                name=""
                id="description"
                cols={72}
                rows={5}
                className="form-control"
              ></textarea>
            </div>
            <div className="mt-5">
              <label htmlFor="description" className="form-label">
                file
              </label>
              &nbsp;
              <input type="file" id="file" className="form-control" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select name="" id="role" className="form-select-sm">
                <option value="">Role 1</option>
                <option value="">Role 2</option>
                <option value="">Role 3</option>
                <option value="">Role 4</option>
              </select>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="form-check ">
                <input
                  type="checkbox"
                  id="status"
                  className="form-check-input"
                />
                <label htmlFor="status" className="form-check-label">
                  Status
                </label>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="form-check ">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="form-check-input"
                />
                <label htmlFor="male" className="form-check-label">
                  Male
                </label>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div className="form-check ">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="form-check-input"
                />
                <label htmlFor="female" className="form-check-label">
                  Female
                </label>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  id="active"
                  className="form-check-input"
                />
                <label htmlFor="active" className="form-check-label">
                  Active
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary text-light"
              style={{ margin: "20px 0px" }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Demo28;
