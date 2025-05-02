import { Link } from "react-router-dom";
function BTTable({ students }: { students: any[] }) {
  return (
    <>
      <div className="row">
        {students.map((student, index) => {
          return (
            <>
              <div
                className="col-md-4"
                key={index}
                style={{ marginTop: "20px" }}
              >
                <div className="card">
                  <Link
                    to={"/student-details/" + student.id}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="card-header bg-primary d-flex justify-content-center align-items-center">
                      <img
                        src={"/img/" + student.image}
                        alt="avatar"
                        width={50}
                        className="rounded-5"
                      />
                    </div>
                    <div className="card-body card-title d-flex justify-content-center align-items-center">
                      <h4>{student.name}</h4>{" "}
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <span>
                        <i className="bi bi-person-vcard-fill text-primary">
                          &nbsp; {student.id}
                        </i>
                      </span>
                      <span
                        className={
                          student.gender === "Male"
                            ? "badge bg-danger"
                            : "badge bg-info"
                        }
                      >
                        {student.gender}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default BTTable;
