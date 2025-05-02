import { useState } from "react";

function Demo15() {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [size, setSize] = useState("");

  let [result, setResult] = useState("");

  const selectFiles = (evt: any) => {
    let files = evt.target.files;
    console.log("files: " + files.length);
    let s = "files: " + files.length + "<br/><br/>";
    for (let i = 0; i < files.length; i++) {
      s += `Name: ${files[i].name} <br/>
              Type: ${files[i].type}<br/>
              Size: ${files[i].size}<br/><br/>
              `;
    }
    setResult(s);
  };

  const selectFile = (evt: any) => {
    let file = evt.target.files[0];
    console.log(file);
    setName(file.name);
    setType(file.type);
    setSize(file.size);
  };

  return (
    <>
      File <input type="file" onChange={selectFile} />
      <br />
      Name: {name}
      <br />
      Type: {type}
      <br />
      Size: {size}
      <br />
      kích thước: {Number(size) / 1024};
      <br />
      Files <input type="file" multiple onChange={selectFiles} />
      <br />
      <span dangerouslySetInnerHTML={{ __html: result }}></span>
    </>
  );
}

export default Demo15;
