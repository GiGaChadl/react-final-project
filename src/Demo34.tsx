import { useState } from "react";

function Demo34() {
  let [fullName, setFullname] = useState("");
  const save = () => {
    localStorage.setItem("fullName", fullName);
  };

  return (
    <>
      Full Name
      <input type="text" onChange={(evt) => setFullname(evt.target.value)} />
      <button onClick={save}>Save</button>
    </>
  );
}

export default Demo34;
