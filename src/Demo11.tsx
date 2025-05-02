import { useState } from "react";

function Demo11() {
  let [name, setName] = useState("");
  const hello = (evt: any) => {
    let value = evt.target.value;
    console.log(value);
    setName("Hello " + value);
  };
  let [nhietDo, setNhietDo] = useState("");
  const change = (evt: any) => {
    let doC = parseFloat(evt.target.value);

    let doF = doC * 1.8 + 32;
    console.log(doF);
    // let F = Text(doF);
    setNhietDo(doF.toString());
  };

  let [width, setWidth] = useState("100");
  let [height, setHeight] = useState("100");

  const changeW = (evt: any) => {
    let w = evt.target.value;
    setWidth(w);
  };
  const changeH = (evt: any) => {
    let h = evt.target.value;
    setHeight(h);
  };

  return (
    <>
      Full name <input type="text" onChange={hello} />
      <br />
      {name}
      <br />
      Nhập độ C <input type="text" onChange={change} />
      <p>Độ F: {nhietDo}</p>
      <br /> <br />
      Width: <input type="text" style={{ width: "70px" }} onChange={changeW} />
      Height: <input type="text" style={{ width: "70px" }} onChange={changeH} />
      <br /> <br />
      <img
        src="./img/2.jpg"
        alt=""
        width={width}
        height={height}
        style={{ marginLeft: "70px" }}
      />
    </>
  );
}

export default Demo11;
