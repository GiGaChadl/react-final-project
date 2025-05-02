import { useState } from "react";
import studentListWithDTB from "./BTStudentList";
import BTTables from "./BTTables";

function BaiThiGenderMale() {
  let [gender, setGender] = useState([]);
  let [invisible, setInvisible] = useState(false);
  let key = "Male";
  // let key = String(Gender);
  let stu = studentListWithDTB.filter((c) => c.gender === key);
  if (stu !== null) {
    setInvisible(true);
    setGender(stu);
  }

  return (
    <>
      <br />

      <div className="row d-flex justify-content-center align-items-center">
        <h4 className="row d-flex justify-content-center align-items-center">
          Gender
        </h4>
        <div className="col-md-12" style={{ marginBottom: "20px" }}>
          <div className={invisible ? "d-blox" : "d-none"}>
            <BTTables students={gender} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BaiThiGenderMale;
