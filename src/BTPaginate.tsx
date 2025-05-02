type Props = {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};

function BTPaginate({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  setPage,
}: Props) {
  return (
    <>
      <div className="col-md-12 d-flex justify-content-center align-items-center">
        <div className="col-md-3 d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <ul className="pagination pagination-sm">
              <li className="page-item ">
                <button
                  onClick={prevPage}
                  className="btn btn-secondary"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
              </li>
            {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <li
                    key={pageNum}
                    className={`page-item ${
                      pageNum === currentPage ? "active" : ""
                    }`}
                  >
                    <button
                      className={`btn ${
                        pageNum === currentPage
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  </li>
                );
              })}

              <li className="page-item active">
                <button
                  onClick={nextPage}
                  className="btn btn-secondary"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
          {/* <div className="d-flex">
            <span
              className="d-flex flex-nowrap justify-content-center align-items-center"
              style={{ width: "80px" }}
            >
              Page {currentPage}/{totalPages}
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default BTPaginate;
