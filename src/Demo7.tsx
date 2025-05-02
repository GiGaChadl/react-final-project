import "./Demo7.css";
function Demo7() {
  let format = {
    color: "yellow",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <div style={{ fontSize: "30px", color: "red" }}>Hello World 1</div>
      <div style={format}>Hello World 2</div>
      <div className="format2">Hello World 3</div>
    </>
  );
}

export default Demo7;
