import {

  WrapPagenate,
  PagenateBtn
  
} from "../style/pagination";

const Pagination = ({ total, postsPerPage, currentPage, setCurrentPage }) => {
  const pageCount = Math.ceil(total / postsPerPage);
  return (
    <>
      <WrapPagenate>
        <div>
          <PagenateBtn
            className="arrowBtn"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </PagenateBtn>
          {Array(pageCount)
            .fill()
            .map((_, i) => (
              <PagenateBtn
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                aria-current={currentPage === i + 1 ? "page" : null}
              >
                {i + 1}
              </PagenateBtn>
            ))}
          <PagenateBtn
            className="arrowBtn"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            &gt;
          </PagenateBtn>
        </div>
      </WrapPagenate>
    </>
  );
};

export default Pagination;
