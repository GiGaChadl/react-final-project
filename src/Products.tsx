import Products from "./ProductList";
import { Link } from "react-router-dom";
function ProductsComponent() {
  return (
    <>
      <table border={1}>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Photo</th>
        </thead>
        <tbody>
          {Products.map((product, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>
                    <Link to={"/product-details/" + product.id}>
                      {product.name}
                    </Link>
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={"/product-details/" + product.id}>
                      {" "}
                      <img
                        src={"./img/" + product.photo}
                        alt={"photo" + index}
                        width={100}
                      />
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsComponent;
