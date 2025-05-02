function Demo16() {
  const save = (evt: any) => {
    evt.preventDefault();
    console.log("saved");
    let username = evt.target.elements.username.value;
    let password = evt.target.elements.password.value;
    let description = evt.target.elements.description.value;
    let status = evt.target.elements.status.checked;
    let gender = evt.target.elements.gender.value;
    let role = evt.target.elements.role.value;
    let hid = evt.target.elements.id.value;
    console.log("-------------------------");
    console.log("Role:" + role);
    console.log("gender: " + gender);
    console.log("status: " + status);
    console.log(password);
    console.log(username);
    console.log(description);
    console.log("hidden: " + hid);
  };

  return (
    <>
      <h3>Register</h3>
      <form method="post" onSubmit={save}>
        <table>
          <tbody>
            <tr>
              <td>UserName</td>
              <td>
                <input type="text" name="username" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="text" name="password" />
              </td>
            </tr>
            <tr>
              <td valign="top">Description</td>
              <td>
                <textarea cols={21} rows={5} name="description"></textarea>
              </td>
            </tr>
            <tr>
              <td valign="top">Status</td>
              <td>
                <input type="checkbox" name="status" />
              </td>
            </tr>
            <tr>
              <td valign="top">Gender</td>
              <td>
                <input type="checkbox" name="gender" value={"m"} /> Male <br />
                <input type="checkbox" name="gender" value={"f"} /> Female
              </td>
            </tr>
            <tr>
              <td valign="top">Role</td>
              <td>
                <select name="role">
                  <option value={1}>Role 1</option>
                  <option value={2}>Role 2</option>
                  <option value={3}>Role 3</option>
                  <option value={4}>Role 4</option>
                  <option value={5}>Role 5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>
                <button type="submit">Save</button>
                <input type="hidden" name="id" value={123} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Demo16;

