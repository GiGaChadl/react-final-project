import { useState } from "react";
import { Product } from "./entities/product";
function Demo14() {
  let products: Product[] = [
    {
      id: "p01",
      name: "TV",
      price: 4.5,
      photo: "1.png",
      category: "Category 1",
    },
    {
      id: "p02",
      name: "TL",
      price: 5.5,
      photo: "2.jpg",
      category: "Category 2",
    },
    {
      id: "p03",
      name: "MG",
      price: 7,
      photo: "3.jpg",
      category: "Category 3",
    },
  ];

  let [keyword, setKeyword] = useState("");

  let [result, setResult] = useState(products);

  let [from, setPriceFrom] = useState("");
  let [to, setPriceTo] = useState("");

  const searchByKeyword = (evt: any) => {
    let key = products.filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) ||
        p.name.toUpperCase().includes(keyword)
    );
    setResult(key);
  };
  const searchByPrice = (evt: any) => {
    let res = products.filter(
      (a) => a.price >= parseFloat(from) && a.price <= parseFloat(to)
    );
    setResult(res);
  };

  return (
    <>
      {/* Search by key word */}
      <fieldset>
        <legend>Search By Keyword</legend>
        Keyword
        <input type="text" onChange={(evt) => setKeyword(evt.target.value)} />
        <button onClick={searchByKeyword}>search</button>
      </fieldset>

      {/* Search by key Price*/}
      <fieldset>
        <legend>Search By Price</legend>
        From
        <input type="text" onChange={(evt) => setPriceFrom(evt.target.value)} />
        - to
        <input type="text" onChange={(evt) => setPriceTo(evt.target.value)} />
        <button onClick={searchByPrice}>search</button>
      </fieldset>

      <div style={{ padding: "10", width: "800", display: "flex" }}>
        <table border={1} style={{ margin: "10 auto" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Photo</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {result.map((product, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                      <img
                        src={"./img/" + product.photo}
                        width={100}
                        alt="pt"
                      />
                    </td>
                    <td>{product.category}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Demo14;
