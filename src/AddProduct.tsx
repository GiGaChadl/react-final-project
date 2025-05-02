import { useState } from "react";
import baseUrl from "./BaseURL";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [status, setStatus] = useState(false);
  let [result, setResult] = useState(null);
  const navigate = useNavigate();

  const save = () => {
    console.log(name);
    console.log(price);
    console.log(quantity);
    console.log(status);
    let product = {
      // key: value (value = name....)
      name: name,
      price: price,
      quantity: quantity,
      status: status,
    };

    // Biến chuỗi thành JSON
    let strJSON = JSON.stringify(product);
    console.log(strJSON);
    console.log(baseUrl + "product/create");

    // dùng fetch để đẩy product lên database
    // method: 'post' để báo cho trình duyệt biết là truyền dữ liệu lên
    // headers: 'báo cho trình duyệt biết mình truyền dữ liệu lên kiểu JSON'
    fetch(baseUrl + "product/create", {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: strJSON,
    })
      .then((res) => {
        if (res.ok) {
          setResult(true);
          navigate("/");
        } else {
          setResult(false);
        }
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h3 className="col-md-6">Add product</h3>
      {/* name */}
      <div className="row">
        <div className="col-md-6">
          {result !== null && result === true ? (
            <span className="text-success">Success</span>
          ) : (
            ""
          )}
          {result !== null && result === false ? (
            <span className="text-danger">Fail</span>
          ) : (
            ""
          )}

          <form action="">
            {/* name */}
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={(evt) => setName(evt.target.value)}
              />
            </div>

            {/* price */}
            <div>
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="form-control"
                onChange={(evt) => setPrice(evt.target.value)}
              />
            </div>

            {/* quantity */}
            <div>
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className="form-control"
                onChange={(evt) => setQuantity(evt.target.value)}
              />
            </div>

            {/* status */}
            <div style={{ marginTop: "20px" }}>
              <div className="form-check form-switch">
                <input
                  type="checkbox"
                  id="active"
                  className="form-check-input"
                  onChange={(evt) => setStatus(evt.target.checked)}
                />
                <label htmlFor="active" className="form-check-label">
                  Active
                </label>
              </div>
            </div>

            {/* save btn */}
            <button
              type="button"
              className="btn btn-primary text-light"
              style={{ margin: "20px 0px" }}
              onClick={save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
