function Demo23() {
  let products = [
    {
      id: "01",
      name: "Product 1",
      photo: "1.png",
      price: 185,
    },
    {
      id: "02",
      name: "Product 1",
      photo: "1.png",
      price: 185,
    },
    {
      id: "03",
      name: "Product 1",
      photo: "1.png",
      price: 185,
    },
    {
      id: "04",
      name: "Product 1",
      photo: "1.png",
      price: 185,
    },
    {
      id: "05",
      name: "Product 1",
      photo: "1.png",
      price: 185,
    },
  ];
  return (
    <div className="container" style={{ margin: "20px" }}>
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Price</th>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        src={"./img/" + product.photo}
                        alt={product.name}
                        width={100}
                      />
                    </td>
                    <td>{product.price}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        src={"./img/" + product.photo}
                        alt={product.name}
                        width={100}
                      />
                    </td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Demo23;
