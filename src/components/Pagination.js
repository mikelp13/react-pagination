import React from "react";
import usePaginationButtons from "../hooks/usePaginationButtons";

function Pagination({ pages = 10, setCurrentPage }) {
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }
  const [
    arrOfCurrButtons,
    currentButton,
    setCurrentButton,
  ] = usePaginationButtons(numberOfPages, setCurrentPage);

  return (
    <div className="pagination-container">
      <button
        type="button"
        className={`${currentButton === 1 ? "disabled" : ""}`}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        Prev
      </button>

      {arrOfCurrButtons.map((item, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`${currentButton === item ? "active" : ""}`}
            onClick={() => setCurrentButton(item)}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        className={`${
          currentButton === numberOfPages.length ? "disabled" : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
