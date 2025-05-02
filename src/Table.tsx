function Tr({ product }) {
  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

function Table({ products }) {
  return (
    <>
      <table className="table">
        {/* head cua table ne */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* body của table nè */}
          {products.map((p, index) => {
            return <Tr product={p} key={index} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
