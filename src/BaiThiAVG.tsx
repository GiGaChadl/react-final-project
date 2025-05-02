import { useState } from "react";
import studentListWithDTB from "./BTStudentList";
import BTTables from "./BTTables";
function BaiThiAVG() {
  let [result, setResult] = useState(() => {
    const savedResult = sessionStorage.getItem("result");
    return savedResult ? JSON.parse(savedResult) : "";
  });
  // Khi có giá trị from được lưu thì hiện ra kết quả
  // Không có thì để trống
  let [from, setFrom] = useState(() => {
    return sessionStorage.getItem("from") || "";
  });
  let [to, setTo] = useState(() => {
    return sessionStorage.getItem("to") || "";
  });
  // hiện và show bảng
  let [inVisible, setInvisible] = useState(() => {
    const savedResult = sessionStorage.getItem("result");
    return savedResult ? true : false;
  });
  // lưu giá trị vào from và to
  sessionStorage.setItem("from", from);
  sessionStorage.setItem("to", to);
  // remove
  const disVisible = () => {
    setResult([]);
    setTo("");
    setFrom("");
    sessionStorage.removeItem("from");
    sessionStorage.removeItem("to");
    sessionStorage.removeItem("result");
    setInvisible(false);
  };
  // btn
  const valid = (evt: any) => {
    evt.preventDefault();
    let studentName = studentListWithDTB.filter(
      (a) => a.dtb >= parseFloat(from) && a.dtb <= parseFloat(to)
    );
    setInvisible(true);
    if (studentName.length > 0) {
      sessionStorage.setItem("result", JSON.stringify(studentName));
      setResult(studentName);
    }
  };

  return (
    <>
      <br />
      <h4 className="row d-flex justify-content-center">Search By AVG</h4>
      <form onSubmit={(evt) => valid(evt)}>
        <div className="d-flex justify-content-center">
          <div className="col-md-2">
            from
            <input
              type="number"
              className="form-control"
              value={from}
              onChange={(evt) => setFrom(evt.target.value)}
            />
            - to
            <input
              type="number"
              className="form-control"
              value={to}
              onChange={(evt) => setTo(evt.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary text-light"
            onClick={valid}
          >
            Check
          </button>
          <button
            type="button"
            className="btn btn-primary text-light"
            onClick={disVisible}
            style={{ marginLeft: "20px" }}
          >
            Reload
          </button>
        </div>
      </form>
      <div className="col-md-12" style={{ marginBottom: "20px" }}>
        {inVisible === false ? (
          ""
        ) : result.length === 0 ? (
          <span
            className="d-flex justify-content-center text-danger"
            style={{ marginTop: "20px" }}
          >
            Không tìm thấy kết quả
          </span>
        ) : (
          <BTTables students={result} />
        )}{" "}
      </div>
    </>
  );
}

export default BaiThiAVG;
