import { useState } from "react";

function Demo12() {
  let categories = [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
  ];

  let [category, setCategory] = useState(categories[0]);

  const selectCategory = (evt: any) => {
    let value = evt.target.value;
  };

  const selectCategory2 = (evt: any) => {
    let value = evt.target.value;
    let cat = categories.find((c) => c.id === parseInt(value)); // biểu thức lambda
    setCategory(cat);
  };

  return (
    <>
      Category
      <select onChange={selectCategory}>
        <option value={1}>Category 1</option>
        <option value={2}>Category 2</option>
        <option value={3}>Category 3</option>
        <option value={4}>Category 4</option>
        <option value={5}>Category 5</option>
        <option value={6}>Category 6</option>
      </select>
      <br />
      <br />
      Category
      <select onChange={selectCategory2}>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <br />
      Id: {category.id}
      <br />
      Name: {category.name}
    </>
  );
}

export default Demo12;
