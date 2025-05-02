import { BrowserRouter } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import AboutUs from "./AboutUs";
import News from "./News";
import Details1 from "./Details1";
import Details2 from "./Details2";
import Details3 from "./Details3";
import ProductsComponent from "./Products";
import ProductDetails from "./ProductDetails";

function Demo17Layout() {
  return (
    <>
      <BrowserRouter>
        <Link to={"/home"}>Home</Link> &nbsp;&nbsp;
        <Link to={"/about-us"}>About Us</Link>&nbsp;&nbsp;
        <Link to={"/news"}>News Page</Link>&nbsp;&nbsp;
        <Link to={"/details-1?id=567"}>Details 1</Link>&nbsp;&nbsp;
        <Link to={"/details-2?id=123&username=acc1&from=4.5&to=10.1"}>
          Details 2
        </Link>
        &nbsp;&nbsp;
        <Link to={"/details-3/456/acc2"}>Details 3</Link> &nbsp;&nbsp;
        <Link to={"/product-list"}>Product List</Link>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/news" element={<News />}></Route>
          <Route path="/details-1" element={<Details1></Details1>}></Route>
          <Route path="/details-2" element={<Details2></Details2>}></Route>
          <Route
            path="/details-3/:id/:username"
            element={<Details3></Details3>}
          ></Route>
          <Route path="/product-list" element={<ProductsComponent />}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
        </Routes>
        <br />
        <br />
        copyright
      </BrowserRouter>
    </>
  );
}

export default Demo17Layout;
