import { useState } from "react";
import studentListWithDTB from "./BTStudentList";
import BTTables from "./BTTables";

function BaiThiGender() {
  let [gender, setGender] = useState(studentListWithDTB);
  let [inVisible, setInvisible] = useState(false);

  const selectGender = (evt: any) => {
    let key = evt.target.value;
    let stu = studentListWithDTB.filter((c) => c.gender === key);
    if (stu !== null) {
      setInvisible(true);
      setGender(stu);
    }
  };
  return (
    <>
      <br />

      <div className="row d-flex justify-content-center align-items-center">
        <h4 className="row d-flex justify-content-center align-items-center">
          Gender
        </h4>
        <div className="col-md-1 d-flex justify-content-center align-items-center">
          <select name="role" id="" onChange={selectGender}>
            <option value="">-Chọn Gender-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-md-12" style={{ marginBottom: "20px" }}>
          {inVisible ? <BTTables students={gender} /> : ""}
        </div>
      </div>
    </>
  );
}

export default BaiThiGender;
