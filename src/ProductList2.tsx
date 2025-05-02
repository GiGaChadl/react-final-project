import { useEffect, useState } from "react";
import baseUrl from "./BaseURL";
import DeleteProduct from "./DeleteProduct";
import { Link } from "react-router-dom";

function ProductList2() {
  let [products, setProducts] = useState([]);
  let [result, setResult] = useState(null);
  // http://192.168.150.105:3000/api/product/find-all cung cap ...

  // React hỗ trợ uesEffect khi trang vừa tải nó sẽ lấy dữ liệu từ backend đổ về server
  useEffect(() => {
    let url = baseUrl + "product/find-all";
    fetch(url)
      .then((res) => {
        // console.log(res.json());
        return res.json();
      })
      .then((res) => {
        setProducts(res);
        // console.log(res);
      });
  }, []);
  let [keyword, setKeyWord] = useState("");
  const searchByKeyWord = (evt: any) => {
    evt.preventDefault();
    let url = baseUrl + "product/find-all";
    if (keyword.length !== 0) {
      url = baseUrl + "product/find-by-keyword/" + keyword;
    }
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  };

  let [min, setMin] = useState("");
  let [max, setMax] = useState("");

  const minMax = (evt: any) => {
    let url = baseUrl + "product/find-all";
    if (Number(min) > 0 && Number(max) > 0) {
      url = baseUrl + "product/find-by-prices/" + min + "/" + max;
    }
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        console.log(res);
      });
  };

  // Hàm remove
  const remove = (id: any) => {
    alert(id);
    let res = window.confirm("Are You Sure");
    console.log(baseUrl + "product/delete/" + id);
    if (res) {
      fetch(baseUrl + "product/delete/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setResult(true);
          let url = baseUrl + "product/find-all";
          fetch(url)
            .then((res) => {
              // console.log(res.json());
              return res.json();
            })
            .then((res) => {
              setProducts(res);
              // console.log(res);
            });
        } else {
          setResult(false);
        }
      });
    }
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4 className="align-items-center">Search By KeyWord</h4>
          <form
            action=""
            className="d-flex flex-row"
            onSubmit={(evt) => searchByKeyWord(evt)}
          >
            <label
              htmlFor="keyword"
              className="control-label justify-content-center d-flex align-items-center"
            >
              KeyWord
            </label>
            <input
              type="text"
              id="keyword"
              onChange={(evt) => setKeyWord(evt.target.value)}
              className="form-control"
              style={{ marginLeft: "20px" }}
            />
            <button
              type="button"
              className="btn btn-info"
              onClick={searchByKeyWord}
              style={{ marginLeft: "20px" }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div
        className="row d-flex justify-content-between"
        style={{ marginTop: "20px" }}
      >
        <div className="col-md-12">
          <form
            action=""
            className="control-label d-flex flex-row"
            onSubmit={(evt) => minMax(evt)}
          >
            <label htmlFor="Min">Nhap min</label>
            <input
              type="number"
              id="min"
              className="form-control w-25"
              onChange={(evt) => setMin(evt.target.value)}
            />
            <label htmlFor="Max">Nhap max</label>
            <input
              type="number"
              id="max"
              className="form-control w-25"
              onChange={(evt) => setMax(evt.target.value)}
            />
            <button type="button" className="btn btn-info" onClick={minMax}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
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
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {product.status ? (
                      <span className="badge bg-info">Show</span>
                    ) : (
                      <span className="badge bg-danger">Hide</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(evt) => remove(product.id)}
                    >
                      <span>
                        <i className="bi bi-trash-fill"></i> Delete
                      </span>
                    </button>
                    <Link
                      to={"/edit-product/" + product.id}
                      type="button"
                      className="btn btn-warning"
                      style={{ marginLeft: "5px" }}
                    >
                      <span>
                        <i className="bi bi-pencil-fill"></i> Edit
                      </span>
                    </Link>
                    <Link
                      to={"/product-list/" + product.id}
                      type="button"
                      className="btn btn-info"
                      style={{ marginLeft: "5px" }}
                    >
                      <span>
                        <i className="bi bi-pencil-fill"></i> Detail
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList2;
