// components/Pagination.jsx
import React from "react";
import Link from "next/link";

const Pagination = ({ currentPage, totalPages, searchQuery }) => {
    return (
        <div className="flex justify-center mt-4">
            {currentPage > 1 && (
                <Link
                    href={`?page=${currentPage - 1}&search=${searchQuery}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                    Previous
                </Link>
            )}
            {currentPage < totalPages && (
                <Link
                    href={`?page=${currentPage + 1}&search=${searchQuery}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Next
                </Link>
            )}
        </div>
    );
};

export default Pagination;
