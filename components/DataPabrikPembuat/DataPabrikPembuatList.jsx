import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import { ButtonDelete, ButtonDetail, InputButton } from '../ButtonComponents';
import Link from 'next/link';
import { SearchQuery } from '../SearchQuery';
import { useSearchParams } from 'next/navigation';
import { fetchPaginatedData } from '@/utils/api';
import Pagination from '../Pagination';

export default function DataPabrikPembuatList({
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

    const routeUrl = "data_pabrik_pembuat";
    const responseKey = "list_data_pabrik_pembuat";

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
                <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                    <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Daftar Data Pabrik Pembuat</h1>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <InputButton
                            href="/dashboard/data-pabrik-pembuat/add"
                            text="Input Data Pabrik Pembuat"
                        />
                        <SearchQuery
                            searchQuery={search}
                            setSearchQuery={setSearch}
                            placeHolder={"Cari Data Pabrik Pembuat"}
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
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.address}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.city}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.zipcode}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.province}
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
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDetail href={`/dashboard/data-pabrik-pembuat/detail/${item.id}`} />
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
