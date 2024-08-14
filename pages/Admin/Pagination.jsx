import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

    // Determine the start and end page numbers
    let startPage = Math.max(currentPage - halfMaxPageNumbersToShow, 1);
    let endPage = Math.min(currentPage + halfMaxPageNumbersToShow, totalPages);

    // Adjust the start and end if they go out of bounds
    if (currentPage - halfMaxPageNumbersToShow < 1) {
        endPage = Math.min(endPage + (halfMaxPageNumbersToShow - (currentPage - 1)), totalPages);
    }
    if (currentPage + halfMaxPageNumbersToShow > totalPages) {
        startPage = Math.max(startPage - (currentPage + halfMaxPageNumbersToShow - totalPages), 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-container">
            <ul className="pagination flex gap-2">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pagination-button"
                    >
                        &lt;
                    </button>
                </li>
                {startPage > 1 && (
                    <>
                        <li>
                            <button
                                onClick={() => onPageChange(1)}
                                className="pagination-button"
                            >
                                1
                            </button>
                        </li>
                        {startPage > 2 && (
                            <li className="pagination-ellipsis">...</li>
                        )}
                    </>
                )}
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`pagination-button ${number === currentPage ? 'active' : ''}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && (
                            <li className="pagination-ellipsis">...</li>
                        )}
                        <li>
                            <button
                                onClick={() => onPageChange(totalPages)}
                                className="pagination-button"
                            >
                                {totalPages}
                            </button>
                        </li>
                    </>
                )}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="pagination-button"
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

// CSS in JS
const styles = `
.pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
}

.pagination-button {
    background: none;
    border: none;
    margin: 0 5px;
    padding: 8px 12px;
    cursor: pointer;
    color: #007bff;
    font-size: 16px;
}

.pagination-button:disabled {
    cursor: not-allowed;
    color: #ccc;
}

.pagination-button.active {
    font-weight: bold;
    color: #f0ad4e;
    border-bottom: 2px solid #f0ad4e;
}

.pagination-ellipsis {
    margin: 0 5px;
    padding: 8px 12px;
    font-size: 16px;
    color: #333;
}
`;

// Inject the styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
