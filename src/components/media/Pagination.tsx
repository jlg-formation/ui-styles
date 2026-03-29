import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = ""
}: PaginationProps) {
  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  };

  const generatePages = () => {
    const totalPageNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 ellipsis

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, "ellipsis-right", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, "ellipsis-left", ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [1, "ellipsis-left", ...middleRange, "ellipsis-right", totalPages];
  };

  const pages = generatePages();

  return (
    <nav className={`pagination ${className}`} aria-label="Pagination">
      <button
        className="pagination__button pagination__button--prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        <ChevronLeftIcon width={20} height={20} />
      </button>

      <ul className="pagination__list">
        {pages.map((page, index) => {
          if (typeof page === "string") {
            return (
              <li key={page + index} className="pagination__item">
                <span className="pagination__ellipsis">...</span>
              </li>
            );
          }

          return (
            <li key={page} className="pagination__item">
              <button
                className={`pagination__page ${currentPage === page ? "pagination__page--active" : ""}`}
                onClick={() => onPageChange(page)}
                aria-current={currentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        className="pagination__button pagination__button--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        <ChevronRightIcon width={20} height={20} />
      </button>
    </nav>
  );
}
