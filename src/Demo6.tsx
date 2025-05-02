import "./Demo6.css";
function Demo6() {
  let Students = [
    {
      id: "st01",
      name: "Name 1",
      photo: "3.jpg",
    },
    {
      id: "st02",
      name: "Name 2",
      photo: "1.png",
    },
    {
      id: "st03",
      name: "Name 3",
      photo: "2.jpg",
    },
  ];

  return (
    <>
      <h3>Student list</h3>
      <div id="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Photo</th>
            </tr>
          </thead>

          <tbody>
            {Students.map((student, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>
                      <img
                        src={"./img/" + student.photo}
                        alt="photo"
                        width={80}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Demo6;
