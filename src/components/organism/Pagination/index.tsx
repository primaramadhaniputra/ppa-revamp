import React from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./styles";

interface IProps {
  numberOfPages: number;
  currentPage: number;
  nextButtonEvent: () => void;
  previousButtonEvent: () => void;
}

export default function Pagination({
  numberOfPages,
  currentPage,
  nextButtonEvent,
  previousButtonEvent,
}: IProps) {
  console.log(currentPage);

  const handleClick = (e: {
    [x: string]: any;
    isPrevious: boolean;
    isNext: boolean;
  }) => {
    if (e.nextSelectedPage === undefined) {
      return;
    }
    if (e.isPrevious) {
      previousButtonEvent();
    } else if (e.isNext) {
      nextButtonEvent();
    }
  };

  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        // onPageChange={(e) => console.log('asdfasdfadsf', e)}
        pageRangeDisplayed={4}
        pageCount={numberOfPages}
        previousLabel="previous"
        // renderOnZeroPageCount={(e) => e}
        activeClassName="activePage"
        initialPage={0}
        onClick={handleClick}
      />
    </Container>
  );
}
