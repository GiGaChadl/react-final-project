import "./Demo9.css";

function Demo9() {
  const hello = () => {
    alert("Hello World");
  };
  const changeBackground = (evt: any) => {
    let color = evt.target.value;
    console.log(color);
    document.bgColor = color;
  };

  const display = (evt: any) => {
    let src = evt.target.src;
    console.log(src);
  };

  let photos = ["1.png", "2.jpg", "3.jpg"];
  return (
    <>
      <button type="button" onClick={hello}>
        Click me
      </button>
      <br />
      <button type="button" value="white" onClick={changeBackground}>
        White
      </button>
      <button type="button" value="red" onClick={changeBackground}>
        Red
      </button>
      <button type="button" value="blue" onClick={changeBackground}>
        blue
      </button>
      <button type="button" value="green" onClick={changeBackground}>
        green
      </button>

      <br />
      <div>
        {photos.map((photo, index) => {
          return (
            <>
              <img
                key={index}
                src={"./img/" + photo}
                alt="photo"
                onClick={display}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Demo9;
