function Demo3() {
  let id = 123,
    userName = "acc1",
    status = true,
    price = 4.5,
    quantity = 2;

  let photo = "2.jpg",
    width = 500,
    height = 500;

  return (
    <>
      id: {id}
      <br />
      username: {userName}
      <br />
      status: {status ? "show" : "hide"}
      <br />
      price: {price}
      <br />
      quantity: {quantity}
      <br />
      total = {price * quantity}
      <br />
      <img src="./img/1.png" alt="hinh-doc-sach" width={200} />
      <br />
      <img src={"./img/" + photo} alt="photo" width={width} height={height} />
    </>
  );
}

export default Demo3;
