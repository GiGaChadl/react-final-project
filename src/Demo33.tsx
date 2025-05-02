import { useState } from "react";
function Demo33() {
  let [fullName, setFullName] = useState("");
  const save = () => {
    console.log("Full Name: ", fullName);
    sessionStorage.setItem("fullName", fullName);
    // alert("Full Name: " + fullName);
    // alert("Full Name: " + sessionStorage.getItem("fullName"));
  };
  const remove = () => {
    sessionStorage.removeItem("fullName");
  };

  const read = () => {
    if (sessionStorage.getItem("fullName") == null) {
      alert("No data found in session storage");
    } else {
      let fullName = sessionStorage.getItem("fullName");
      alert("Full Name: " + fullName);
    }
  };

  //   saveObject
  const saveObject = () => {
    let student = {
      id: 1,
      name: "A",
      age: 20,
    };
    let strJSON = JSON.stringify(student);
    console.log(strJSON);
    sessionStorage.setItem("student", strJSON);
  };
  const readObjectList = () => {
    if (sessionStorage.getItem("students") == null) {
      alert("No data found in session storage");
    } else {
      let strJSON = sessionStorage.getItem("students");
      let students = JSON.parse(strJSON!);
      console.log("students: " + students.length);
      for (let i = 0; i < students.length; i++) {
        console.log("id: " + students[i].id);
        console.log("name: " + students[i].name);
        console.log("age: " + students[i].age);
        console.log("-----------------------------");
      }
    }
  };

  const removeObject = () => {
    // let strJSON = sessionStorage.getItem("student");
    sessionStorage.removeItem("student");
  };

  const saveObjectList = () => {
    let students = [
      {
        id: "01",
        name: "A",
        age: 20,
      },
      {
        id: "02",
        name: "B",
        age: 22,
      },
      {
        id: "03",
        name: "C",
        age: 25,
      },
    ];
    let stringJSON = JSON.stringify(students);
    console.log(stringJSON);
    sessionStorage.setItem("students", stringJSON);
  };
  return (
    <>
      Full Name{" "}
      <input type="text" onChange={(evt) => setFullName(evt.target.value)} />
      <br />
      <br />
      <button onClick={save} className="btn btn-primary btn-outline-black">
        Save
      </button>
      &nbsp;
      <button onClick={remove} className="btn btn-primary btn-outline-black">
        Remove
      </button>
      &nbsp;
      <button onClick={read} className="btn btn-primary btn-outline-black">
        Read
      </button>
      <br /> <br />
      <button onClick={saveObject} className="btn btn-secondary">
        Save Object
      </button>
      <button onClick={readObjectList} className="btn btn-secondary">
        Read Objects List
      </button>
      <button onClick={removeObject} className="btn btn-secondary">
        Remove Object
      </button>
      <button onClick={saveObjectList} className="btn btn-secondary">
        Save Object List
      </button>
    </>
  );
}
export default Demo33;
