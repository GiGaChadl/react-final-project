import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import ProductList2 from "./ProductList2";
import EditProduct2 from "./EditProduct2";
import ProductsListAPI from "./ProductsListAPI";

function Demo37() {
  return (
    <BrowserRouter>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-dark bg-dark">
              <li>
                <Link to="/" className="navbar-brand">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add-product" className="navbar-brand">
                  Add Product
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/edit-product" className="navbar-brand">
                  Edit Product
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/delete-product" className="navbar-brand">
                  Delete Product
                </Link>
              </li>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Routes>
              <Route path="/" element={<ProductList2 />}></Route>
              <Route path="/add-product" element={<AddProduct />}></Route>
              <Route path="/edit-product/:id" element={<EditProduct2 />}></Route>
              <Route path="/delete-product" element={<DeleteProduct />}></Route>
              <Route path="/product-list/:id" element={<ProductsListAPI/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Demo37;
