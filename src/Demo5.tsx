function Demo5() {
  let student = {
    id: 123,
    name: "Nguyen Van A",
    photo: "3.jpg",
    address: { street: "Huỳnh Văn Bánh", ward: "Phường 11" },
    emails: ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"],
  };

  return (
    <>
      <h3>Student Info</h3>
      <table border={1}>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img
                src={"./img/" + student.photo}
                alt="my-photo"
                width={100}
                // text-align="center"
                justify-content="center"
                display-flex="flex"
                margin-left={20}
              />
            </td>
          </tr>
          <tr>
            <td>ID</td>
            <td>{student.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{student.name}</td>
          </tr>
          <tr>
            <td>Street</td>
            <td>{student.address.street}</td>
          </tr>
          <tr>
            <td>Ward</td>
            <td>{student.address.ward}</td>
          </tr>
          <tr>
            <td valign="middle">emails</td>
            <td>
              {student.emails.map((email, index) => {
                return (
                  <>
                    {email}
                    <br />
                  </>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>{" "}
    </>
  );
}

export default Demo5;
