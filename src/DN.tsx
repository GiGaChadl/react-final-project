import { useState } from "react";
import { Account } from "./entities/account";

function DN() {
  let accounts: Account[] = [
    {
      userName: "Name01",
      password: "123",
      fullName: "Nguyễn Văn A",
    },
    {
      userName: "Name02",
      password: "123",
      fullName: "Nguyễn Văn B",
    },
    {
      userName: "Name03",
      password: "123",
      fullName: "Nguyễn Văn C",
    },
  ];
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [msg, setMsg] = useState("");
  const userNameValid = (evt: any) => {
    let s = evt.target.value;
    setusername(s);
  };

  const passwordValid = (evt: any) => {
    let p = evt.target.value;
    setpassword(p);
  };
  const valid = (evt: any) => {
    let account = accounts.find(
      (a) => a.userName === username && a.password === password
    );
    console.log(username);
    console.log(password);
    let s = "";
    if (account == null) {
      setMsg("InValid");
    } else {
      for (let i = 0; i < evt.length; i++) {
        s += `Username: ${evt.userName} <br/>
              Password: ${evt.password} <br />
              Fullname: ${evt.fullName}`;
      }
      setMsg(s);
    }
  };
  return (
    <>
      <h3>Login</h3>
      UserName: <input type="text" onChange={userNameValid} />
      <br />
      Password: <input type="text" onChange={passwordValid} />
      <br />
      Fullname: <input type="text" />
      <br />
      <button onClick={valid}>Login</button>
      <span dangerouslySetInnerHTML={{ __html: msg }}></span>
    </>
  );
}
export default DN;
