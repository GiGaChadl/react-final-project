// import Hello from './Hello';
import Hi from "./Hi";
import Add from "./Add";
import Table from "./Table";
function Demo32() {
  let products = [
    {
      id: 1,
      name: "Iphone",
      price: 1000,
    },
    {
      id: 2,
      name: "Samsung",
      price: 2000,
    },
    {
      id: 3,
      name: "Nokia",
      price: 3000,
    },
    {
      id: 4,
      name: "Xiaomi",
      price: 4000,
    },
    {
      id: 5,
      name: "Oppo",
      price: 5000,
    },
  ];
  return (
    <>
      <h3>Hello World</h3>
      <br />
      {/* <Hello></Hello> */}
      <Hi fullName={"Duc Nha"} />
      <br />
      <Table products={products} />
    </>
  );
}

export default Demo32;
