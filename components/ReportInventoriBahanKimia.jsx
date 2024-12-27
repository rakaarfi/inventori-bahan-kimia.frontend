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
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="p-8 bg-gray-100">
            <div className="mb-4">
                <SearchQuery
                    searchQuery={search}
                    setSearchQuery={setSearch}
                    placeHolder={"Cari Inventori Bahan Kimia"}
                />
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h1 className="text-xl font-bold">Inventori Bahan Kimia</h1>
                <span className="text-sm">{formattedDate}</span>
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto">
                <table className="table-auto max-w-full mx-auto border-collapse w-full">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">No</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Nama Bahan Kimia</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Pabrik Pembuat</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Karakteristik</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Limit Inventori</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Satuan</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Tanggal</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Jumlah</th>
                            <th className="border border-gray-700 px-4 py-2 text-[10px]">Satuan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{index + 1}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.nama_bahan}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.nama_pabrik}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.karakteristik}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.max_amount}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.unit_bahan}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs whitespace-nowrap">{item.tanggal}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.jumlah}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-xs">{item.unit_penerimaan}</td>
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
    );
}
