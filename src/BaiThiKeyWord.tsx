import { useState } from "react";
import BTTables from "./BTTables";
import studentListWithDTB from "./BTStudentList";
function BaiThiKeyWord() {
  let [result, setResult] = useState(() => {
    const saveResult = sessionStorage.getItem("result");
    return saveResult ? JSON.parse(saveResult) : [];
  });

  // biến ẩn hiện

  let [inVisible, setInVisible] = useState(() => {
    const savedResult = sessionStorage.getItem("result");
    return savedResult ? true : false;
  });
  // biến từ khoá nhập vào

  let [keyword, setKeyword] = useState(() => {
    return sessionStorage.getItem("store") || "";
  });

  // lưu biến keyword

  sessionStorage.setItem("store", keyword);
  sessionStorage.getItem("store");

  // btn ẩn hiện table
  const disVisible = () => {
    setInVisible(false);
    setResult([]);
    setKeyword("");
    sessionStorage.removeItem("store");
    // window.location.reload();
  };

  // btn
  const valid = (evt: any) => {
    evt.preventDefault();
    let studentName = studentListWithDTB.filter((a) =>
      a.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setInVisible(true);
    setResult(studentName);
    if (studentName.length > 0) {
      sessionStorage.setItem("result", JSON.stringify(studentName));
    }
  };

  return (
    <>
      <br />
      <h4 className="row d-flex justify-content-center">Search By KeyWord</h4>
      <br />
      <div className="d-flex justify-content-center">
        <form className="justify-content-center" onSubmit={(evt) => valid(evt)}>
          <input
            type="text"
            className="form-control w-100"
            value={keyword}
            onChange={(evt) => {
              setKeyword(evt.target.value);
            }}
          />

          <br />
          <button
            type="button"
            className="btn btn-primary text-light"
            onClick={valid}
          >
            Check
          </button>
        </form>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-38px", marginLeft: "120px" }}
      >
        <button
          type="button"
          className="btn btn-primary text-light"
          onClick={disVisible}
          style={{ marginLeft: "20px" }}
        >
          Reload
        </button>
      </div>

      <div className="col-md-12" style={{ marginBottom: "20px" }}>
        {inVisible === false ? (
          ""
        ) : result.length <= 0 ? (
          <span
            className="d-flex justify-content-center text-danger"
            style={{ marginTop: "20px" }}
          >
            Không tìm thấy kết quả
          </span>
        ) : (
          <BTTables students={result} />
        )}
      </div>
    </>
  );
}

export default BaiThiKeyWord;
