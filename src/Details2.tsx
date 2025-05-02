import { useSearchParams } from "react-router-dom";

function Details2() {
  const [queryString] = useSearchParams();

  return (
    <>
      <h3>Details 2</h3>
      id: {queryString.get("id")}
      <br />
      username: {queryString.get("username")}
      <br />
      from: {queryString.get("from")}
      <br />
      to: {queryString.get("to")}
    </>
  );
}

export default Details2;
