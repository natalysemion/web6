import React, { FC } from "react";
import usePagination from "../hooks/usePagination";
import classnames from "classnames";
import * as Unicons from "@iconscout/react-unicons";

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className = "",
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}
      className={className}
    >
      <li
        style={{
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.375rem",
          fontFamily: "Inter",
          fontSize: "0.813rem",
          backgroundColor: "#4a5568",
          color: "#ffffff",
          cursor: "pointer",
          userSelect: "none",
        }}
        className={classnames({
          hidden: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <Unicons.UilAngleDoubleLeft size={20} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "DOTS") {
          return (
            <li
              key={index}
              style={{
                userSelect: "none",
                color: "#4a5568",
              }}
            >
              ...
            </li>
          );
        }
        return (
          <li
            key={index}
            style={{
              padding: "8px 16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0.375rem",
              fontFamily: "Inter",
              fontSize: "0.813rem",
              backgroundColor:
                pageNumber === currentPage ? "#6b46c1" : "#e2e8f0",
              color: pageNumber === currentPage ? "#ffffff" : "#4a5568",
              cursor: "pointer",
              userSelect: "none",
              fontWeight: pageNumber === currentPage ? "bold" : undefined,
            }}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        style={{
          padding: "8px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.375rem",
          fontFamily: "Inter",
          fontSize: "0.813rem",
          backgroundColor: "#4a5568",
          color: "#ffffff",
          cursor: "pointer",
          userSelect: "none",
        }}
        className={classnames({
          hidden: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <Unicons.UilAngleDoubleRight size={20} />
      </li>
    </ul>
  );
};

export default Pagination;
