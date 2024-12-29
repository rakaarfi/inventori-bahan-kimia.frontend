import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import { ButtonDetail, ButtonDelete } from '../ButtonComponents';
import { SearchQuery } from '../SearchQuery';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { fetchPaginatedData } from '@/utils/api';
import Pagination from '../Pagination';
import { InputButton } from '../ButtonComponents';

export default function LokasiBahanKimiaList({
    onDelete,
}) {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1";
    const querySearch = searchParams.get("search") || "";

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const [error, setError] = useState(null);

    const routeUrl = "lokasi_bahan_kimia";
    const responseKey = "list_lokasi_bahan_kimia";

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Fetch data dari API
    useEffect(() => {
        fetchPaginatedData({
            routeUrl,
            responseKey,
            currentPage,
            search,
            setData,
            setCurrentPage,
            setTotalPages,
            setError,
        });
    }, [currentPage, search]);

    // Sinkronisasi query parameter ke URL
    useEffect(() => {
        const params = new URLSearchParams();
        params.set("page", currentPage);
        if (search) {
            params.set("search", search);
        }
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, "", newUrl);
    }, [currentPage, search]);
    return (
        <div className="container mx-auto p-4 font-jkt">

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff] dark:border-0">
                    <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Daftar Lokasi Bahan Kimia</h1>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <InputButton
                            href="/dashboard/lokasi-bahan-kimia/add"
                            text="Input Lokasi Bahan Kimia"
                        />
                        <SearchQuery
                            searchQuery={search}
                            setSearchQuery={setSearch}
                            placeHolder={"Cari Lokasi Bahan Kimia"}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-xs">
                            <TableHeader />
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {index + 1 + (currentPage - 1) * 10}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.room}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.location}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.building}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.department_name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.contact_person}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.phone}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.extension}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.mobile}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.email}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDetail href={`/dashboard/lokasi-bahan-kimia/detail/${item.id}`} />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDelete
                                                onClick={() => onDelete(item.id, routeUrl)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        searchQuery={search}
                    />
                </div>
            </div>
        </div>
    );
}
