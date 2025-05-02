import { useState } from "react";
import { Link } from "react-router-dom";

import studentListWithDTB from "./BTStudentList";
import BTPaginate from "./BTPaginate";

function BTTables({ students }: { students: any[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 3;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(studentListWithDTB.length / studentsPerPage);
  const totalAnyPages = Math.ceil(students.length / studentsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              {currentStudents.map((student, index) => {
                return (
                  <>
                    <div
                      className="col-md-4"
                      key={index}
                      style={{ marginTop: "20px" }}
                    >
                      <div className="card">
                        <Link
                          to={`/react-final-project/student-details/${student.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="card-header bg-primary d-flex justify-content-center align-items-center">
                            <img
                              src={`/react-final-project/img/${student.image}`}
                              alt="avatar"
                              width={50}
                              className="rounded-5"
                            />
                          </div>
                          <div className="card-body card-title d-flex justify-content-center align-items-center">
                            <h4>{student.name}</h4>
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
            </div>{" "}
          </div>
          <div className="card-footer">
            <div className={totalAnyPages < 2 ? "d-none" : "d-block"}>
              <BTPaginate
                currentPage={currentPage}
                totalPages={totalAnyPages}
                nextPage={nextPage}
                prevPage={prevPage}
                setPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BTTables;
