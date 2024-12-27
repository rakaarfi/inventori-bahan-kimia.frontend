'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { useSearchParams } from "next/navigation";
import { SearchQuery } from './SearchQuery';

export default function ReportDaftarBahanKimia() {
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

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const fetchData = async () => {
        try {
            const page = currentPage > 0 ? currentPage : 1;
            const response = await axios.get(
                `http://127.0.0.1:8000/reports/daftar_bahan_kimia?page=${page}&search=${search}`
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

    return (
        <div className="p-8 bg-gray-100">
            <div className="mb-4">
                <SearchQuery
                    searchQuery={search}
                    setSearchQuery={setSearch}
                    placeHolder={"Cari Daftar Bahan Kimia"}
                />
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h1 className="text-xl font-bold">Daftar Bahan Kimia</h1>
                <span className="text-sm">{formattedDate}</span>
            </div>
            <div>
                <table className="table-auto max-w-full mx-auto border-collapse w-full ">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border border-gray-700 px-4 py-2 text-sm">No</th>
                            <th className="border border-gray-700 px-4 py-2 text-sm">Nama Bahan Kimia</th>
                            <th className="border border-gray-700 px-4 py-2 text-sm">Pabrik Pembuat</th>
                            <th className="border border-gray-700 px-4 py-2 text-sm">Karakteristik</th>
                            <th className="border border-gray-700 px-4 py-2 text-sm">Limit Inventori</th>
                            <th className="border border-gray-700 px-4 py-2 text-sm">Satuan</th>
                            <th className="border border-gray-700 px-4 py-2 text-sm">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">
                                        {(currentPage - 1) * 10 + index + 1}
                                    </td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">{item.nama_bahan}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">{item.nama_pabrik}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">{item.karakteristik}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">{item.max_amount}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">{item.unit_bahan}</td>
                                    <td className="border border-gray-700 px-4 py-2 text-center text-[10px]">{item.deskripsi}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="border border-gray-700 px-4 py-2 text-center text-gray-500">
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
            <footer className="text-right mt-6 p-2 border-t border-gray-700 bg-gray-100 text-sm">
                Page {currentPage} of {totalPages}
            </footer>
        </div>
    );
}
