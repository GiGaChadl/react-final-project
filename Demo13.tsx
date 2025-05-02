function Demo13() {
    let categories = [ 
        {
            id: 1,
            name: "Categorry 1"
        },
        {
            id: 2,
            name: "Categorry 2"
        }
        ,
        {
            id: 3,
            name: "Categorry 3"
        }
    ]

  const selectCategory = (evt: any) => {
    let value = evt.target.value;
    console.log("value: " + value);
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

      <br /><br />

      Category <select>
        {categories.map((category, index) => 
            return <option key = {index} value = {category.id}>{category.name}</option>>

            </option>
        )}
      </select>
    </>
  );
}

export default Demo13;
