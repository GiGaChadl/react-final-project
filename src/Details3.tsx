import { useParams } from "react-router-dom";

function Details3() {
  let { id, username } = useParams();

  return (
    <>
      <h3>Details 3</h3>
      id: {id}
      <br />
      username: {username}
    </>
  );
}

export default Details3;
