import { useState } from "react";

function Demo10() {
  //   let msg = "Hello";
  let [msg, setMsg] = useState("Hello");

  let [width, setWidth] = useState("100");
  let [height, setHeight] = useState("100");

  const change = () => {
    setMsg("ABC");
    console.log("ABC");
  };

  const back = () => {
    setMsg("Hello World");
  };

  const resize = (evt: any) => {
    let src = evt.target.value;
    console.log(src);
    let size = src.split("x");
    // Say khi chặt chuỗi thì nhận được mảng.
    console.log(size);
    setWidth(size[0]);
    setHeight(size[1]);
  };
  // Muốn thay đổi thì phải reload component để thay đổi component;
  //   đổi let = "Hello" thành useState.
  return (
    <>
      <button type="button" onClick={change}>
        Click me
      </button>
      <button type="button" onClick={back}>
        Click me
      </button>
      <br />
      {msg}
      <br />
      <img src="./img/1.png" alt="" width={width} height={height} />
      <br />
      <button type="button" value={"100x100"} onClick={resize}>
        100x100
      </button>
      &nbsp;
      <button type="button" value={"200x200"} onClick={resize}>
        200x200
      </button>
      &nbsp;
      <button type="button" value={"300x300"} onClick={resize}>
        300x300
      </button>
      &nbsp;
    </>
  );
}

export default Demo10;
