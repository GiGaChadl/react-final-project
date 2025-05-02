function Demo4() {
  let names = ["Name 1", "Name 2", "Name 3", "Name 4"];
  let photos = ["1.png", "2.jpg"];
  let width = 500;

  return (
    <>
      <ul>
        {names.map((name, index) => {
          return (
            <li>
              {name} - {index}
            </li>
          );
        })}
      </ul>
      <br /> <br />
      {photos.map((photo, index) => {
        return (
          <>
            <img src={"./img/" + photo} alt="photo" width={width} />
          </>
        );
      })}
    </>
  );
}

export default Demo4;
