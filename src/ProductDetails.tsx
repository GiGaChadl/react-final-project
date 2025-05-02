import { useParams } from "react-router-dom";
import Products from "./ProductList";

function ProductDetails() {
  let { id } = useParams();
  let product = Products.find((p) => p.id === parseInt(id));
  return (
    <>
      <h3>Product Details</h3>

      <table border={1}>

        <tbody>
          <tr>
            <td colSpan={2}>
              <img src={"/img/" + product.photo} alt="" width={100} />
            </td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{product.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{product.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{product.price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductDetails;
