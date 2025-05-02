import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import BTTable from "./BTTable";
import studentListWithDTB from "./BTStudentList";
function BTStudentDetails() {
  const navigate = useNavigate();
  let { id } = useParams();
  let student = studentListWithDTB.find((p) => p.id === id);
  let str = JSON.stringify(student);
  let students = JSON.parse(str!);
  let styleGender;

  if (students.gender === "Male") {
    styleGender = "badge bg-danger";
  } else {
    styleGender = "badge bg-info";
  }

  let Xl, styleAVG;
  if (student.dtb >= 8) {
    Xl = "Giỏi";
    styleAVG = "badge bg-succes text-dark";
  } else if (student.dtb >= 6.5) {
    Xl = "Khá";
    styleAVG = "badge bg-info text-dark";
  } else if (student.dtb >= 5) {
    Xl = "Trung bình";
    styleAVG = "badge bg-warning text-dark";
  } else {
    Xl = "Yếu";
    styleAVG = "badge bg-danger text-dark";
  }

  return (
    <>
      <br />
      <h4 className="row d-flex justify-content-center">Student Details</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary d-flex justify-content-center align-items-center">
              <img
                src={`/react-final-project/img/${students.image}`}
                alt="avatar"
                width={50}
                className="rounded-5"
              />
            </div>
            <div className="card-body card-title d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-person-vcard-fill text-primary">
                  &nbsp; {student.id}
                </i>
              </span>
              <h4>{student.name}</h4>
              <span className={styleGender}>{student.gender}</span>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <span className={styleAVG}>Average: {student.dtb}</span>

              <span className={styleAVG}>{Xl}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "20px" }}
      >
        <button
          className="col-md-1 btn btn-primary btn text-light"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </>
  );
}
export default BTStudentDetails;
