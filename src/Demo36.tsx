import { useEffect, useState } from "react";
import baseUrl from "./BaseURL";
function Demo36
() {
  let [id, setID] = useState("");
  let [ok, setOk] = useState(false);
  let [product, setProduct] = useState({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    status: true,
  });
  const Search = () => {
    fetch(baseUrl + "product/find-by-id/" + id)
      .then((res) => {
        if (res.ok) {
          setOk(res.ok);
          return res.json();
        } else {
          setOk(false);
        }
      })
      .then((res) => {
        setProduct(res);
      });
  };
  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row"></div>
        <div className="row">
          Id{" "}
          <div className="col-md-1">
            <input
              type="text"
              className="form-control-sm form-control"
              onChange={(evt) => setID(evt.target.value)}
            />
          </div>
          <br />
          <button type="button" className="btn btn-danger" onClick={Search}>
            Search
          </button>
          {!ok ? <h3>SP kh tồn tại</h3> : ""}
          {ok === true && product !== null ? (
            <div>
              <br />
              id: {product.id}
              <br />
              name: {product.name}
              <br />
              price: {product.price}
              <br />
              quantity: {product.quantity}
              <br />
              status: {product.status ? "Show" : "Hide"}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Demo36
;
