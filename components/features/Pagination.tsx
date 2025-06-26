import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (newPage: number) => void;
  maxPageNumbers?: number;
}

const Pagination = ({
  currentPage,
  total,
  limit,
  onPageChange,
  maxPageNumbers = 5,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = () => {
    const pages = [];

    const half = Math.floor(maxPageNumbers / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxPageNumbers - 1);

    if (end - start < maxPageNumbers - 1) {
      start = Math.max(1, end - maxPageNumbers + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center flex-wrap gap-1">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="w-10 h-10 flex justify-center items-center hover:bg-gray-100 border-2 border-gray-300 hover:border-black aspect-square"
        >
          <IoIosArrowBack className="w-5 h-5" />
        </button>
      )}

      {pages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`${
              currentPage === 1 ? "max-w-8 max-h-8" : "w-10 h-10"
            } flex justify-center items-center aspect-square hover:bg-white-100 bg-white border-2 border-gray-300 hover:border-black`}
          >
            1
          </button>
          {pages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 flex justify-center items-center aspect-square  transition-all duration-300 ${
            currentPage === p
              ? "bg-black text-white max-w-9 max-h-9"
              : "hover:bg-gray-100 hover:border-black border-2 border-gray-300 bg-white px-4"
          }`}
        >
          {p}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="px-2">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`${
              currentPage === totalPages ? "max-w-8 max-h-8" : "w-10 h-10"
            } flex justify-center items-center aspect-square hover:bg-white-100 bg-white border-2 border-gray-300 hover:border-black`}
          >
            {totalPages}
          </button>
        </>
      )}

      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-10 h-10 flex justify-center items-center hover:bg-gray-100 border-2 border-gray-500 hover:border-black aspect-square"
        >
          <IoIosArrowForward className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
