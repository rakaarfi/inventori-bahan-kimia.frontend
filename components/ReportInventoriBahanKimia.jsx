'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { SearchQuery } from './SearchQuery';
import Pagination from './Pagination';

export default function ReportInventoriBahanKimia() {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1";
    const querySearch = searchParams.get("search") || "";

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const fetchData = async () => {
        try {
            const page = currentPage > 0 ? currentPage : 1;
            const response = await axios.get(
                `http://127.0.0.1:8000/reports/inventori_bahan_kimia?page=${page}&search=${search}`
            );
            setData(response.data.data);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        setCurrentPage(Number(queryPage) || 1);
        setSearch(querySearch || "");
    }, [queryPage, querySearch]);

    useEffect(() => {
        fetchData();
    }, [currentPage, search]);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        weekday: "long", // Nama hari
        year: "numeric",
        month: "long", // Nama bulan
        day: "numeric",
    });

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="justify-items-center border rounded-3xl p-6 shadow-lg w-full max-w-6xl bg-white flex flex-col gap-4">
                {/* Header */}
                <header className="text-2xl font-bold mb-6 text-center">
                    Inventori Bahan Kimia
                </header>

                <div className="mb-4">
                    <SearchQuery
                        searchQuery={search}
                        setSearchQuery={setSearch}
                        placeHolder={"Cari Inventori Bahan Kimia"}
                    />
                </div>

                {/* Table Wrapper */}
                <div className="overflow-x-auto px-10">
                    <table className="table-auto max-w-full mx-auto border-collapse w-full">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="border border-gray-700 px-4 py-2">No</th>
                                <th className="border border-gray-700 px-4 py-2">Nama Bahan Kimia</th>
                                <th className="border border-gray-700 px-4 py-2">Pabrik Pembuat</th>
                                <th className="border border-gray-700 px-4 py-2">Karakteristik</th>
                                <th className="border border-gray-700 px-4 py-2">Limit Inventori</th>
                                <th className="border border-gray-700 px-4 py-2">Satuan</th>
                                <th className="border border-gray-700 px-4 py-2">Tanggal</th>
                                <th className="border border-gray-700 px-4 py-2">Jumlah</th>
                                <th className="border border-gray-700 px-4 py-2">Satuan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.nama_bahan}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.nama_pabrik}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.karakteristik}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.max_amount}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.unit_bahan}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center whitespace-nowrap">{item.tanggal}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.jumlah}</td>
                                        <td className="border border-gray-700 px-4 py-2 text-center">{item.unit_penerimaan}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="9"
                                        className="border border-gray-700 px-4 py-2 text-center text-gray-500"
                                    >
                                        Tidak ada data tersedia.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    searchQuery={search}
                />

                {/* Footer */}
                <footer className="text-right mt-6 p-2 border-t border-gray-700 bg-gray-100 text-sm">
                {formattedDate} &nbsp;&nbsp;&nbsp;&nbsp; Page {currentPage} of {totalPages}
                </footer>
            </div>
        </div>

    );
}
