import { useState } from "react";
import baseUrl from "./BaseURL";
function DeleteProduct() {
  let [id, setId] = useState("");
  let [result, setResult] = useState(null);

  const del = () => {
    //  Cái này yêu cầu người dùng đồng ý không
    let res = window.confirm("Are You Sure");
    console.log(baseUrl + "product/delete/" + id);
    if (res) {
      fetch(baseUrl + "product/delete/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setResult(true);
        } else {
          setResult(false);
        }
      });
    }
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h3 className="col-md-6">Add product</h3>
      {/* name */}
      <div className="row">
        <div className="col-md-6">
          {result !== null && result === true ? (
            <span className="text-success">Successed</span>
          ) : (
            ""
          )}
          {result !== null && result === false ? (
            <span className="text-danger">Failed</span>
          ) : (
            ""
          )}

          <form action="">
            {/* id */}
            <div>
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="text"
                id="id"
                className="form-control"
                onChange={(evt) => setId(evt.target.value)}
              />
            </div>

            {/* delete btn */}
            <button
              type="button"
              className="btn btn-danger text-light"
              style={{ margin: "20px 0px" }}
              onClick={del}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
