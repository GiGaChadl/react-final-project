import msg from "./value1";
import { v1, v2 } from "./value2";
import { hello, hi } from "./value3";

function Demo8() {
  return (
    <>
      {msg} <br />
      {v1} <br />
      {v2} <br />
      {hello()} <br />
      {hi(" Nhã cube")}
    </>
  );
}

export default Demo8;
