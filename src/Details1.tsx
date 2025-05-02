import { useSearchParams } from "react-router-dom";

function Details1() {
    const [queryString] = useSearchParams();

  return (
    <>
      <h3>Details 1</h3> id: {queryString.get("id")}
    </>
  );
}

export default Details1;
