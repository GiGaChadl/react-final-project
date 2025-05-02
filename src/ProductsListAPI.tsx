import { useEffect, useState } from "react";
import baseUrl from "./BaseURL";
import { useParams } from "react-router-dom";

function ProductsListAPI() {
  let { ID } = useParams();
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [status, setStatus] = useState(true);

  useEffect(() => {
    fetch(baseUrl + "product/find-by-id/" + ID)
      .then((res) => res.json())
      .then((res) => {
        setId(res.id);
        setName(res.name);
        setPrice(res.price);
        setQuantity(res.quantity);
        setStatus(res.status);
      });
  }, []);
  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductsListAPI;
