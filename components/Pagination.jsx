import React from "react";
import Link from "next/link";

const Pagination = ({ currentPage, totalPages, searchQuery, onPageChange }) => {
    const buildQuery = (page) => {
        const params = new URLSearchParams();
        params.set("page", page);
        if (searchQuery) {
            params.set("search", searchQuery);
        }
        return `?${params.toString()}`;
    };

    const pages = [];

    // Selalu tampilkan halaman pertama
    if (currentPage > 3) {
        pages.push(
            <Link
                key={1}
                href={buildQuery(1)}
                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-[#4F4789] text-white" : "bg-gray-100"}`}
                onClick={(e) => {
                    e.preventDefault();
                    onPageChange(1);
                }}
            >
                1
            </Link>
        );
        if (currentPage > 4) {
            pages.push(
                <span key="start-dots" className="px-4 py-2">
                    ...
                </span>
            );
        }
    }

    // Halaman di sekitar halaman saat ini
    for (let i = Math.max(currentPage - 2, 1); i <= Math.min(currentPage + 2, totalPages); i++) {
        pages.push(
            <Link
                key={i}
                href={buildQuery(i)}
                className={`px-4 py-2 rounded ${i === currentPage ? "bg-[#4F4789] text-white" : "bg-gray-100"}`}
                onClick={(e) => {
                    e.preventDefault();
                    onPageChange(i);
                }}
            >
                {i}
            </Link>
        );
    }

    // Selalu tampilkan halaman terakhir
    if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
            pages.push(
                <span key="end-dots" className="px-4 py-2">
                    ...
                </span>
            );
        }
        pages.push(
            <Link
                key={totalPages}
                href={buildQuery(totalPages)}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-[#4F4789] text-white" : "bg-gray-100"}`}
                onClick={(e) => {
                    e.preventDefault();
                    onPageChange(totalPages);
                }}
            >
                {totalPages}
            </Link>
        );
    }

    return (
        <div className="flex justify-center mt-4 space-x-2">
            {currentPage > 1 && (
                <Link
                    href={buildQuery(currentPage - 1)}
                    className="bg-[#4F4789] text-white px-4 py-2 rounded"
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange(currentPage - 1);
                    }}
                >
                    Previous
                </Link>
            )}
            {pages}
            {currentPage < totalPages && (
                <Link
                    href={buildQuery(currentPage + 1)}
                    className="bg-[#4F4789] text-white px-4 py-2 rounded"
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange(currentPage + 1);
                    }}
                >
                    Next
                </Link>
            )}
        </div>
    );
};

export default Pagination;
