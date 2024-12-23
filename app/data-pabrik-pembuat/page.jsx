'use client';

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Pagination from '@/components/Pagination'
import DataPabrikPembuatTable from '@/components/DataPabrikPembuatTable'
import { SearchQuery } from '@/components/SearchQuery'
import { fetchData, handleDelete, handleUpdate } from '@/components/HandleAPI'


export default function page() {
    const searchParams = useSearchParams();

    // Ambil parameter dari URL
    const queryPage = searchParams.get("page") || "1"; // Default ke 1
    const querySearch = searchParams.get("search") || ""; // Default ke ''

    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const apiUrl = "http://127.0.0.1:8000/";
    const routeUrl = "data_pabrik_pembuat";
    const responseKey = "list_data_pabrik_pembuat";

    // Sinkronisasi query parameter ke state
    useEffect(() => {
        setCurrentPage(Number(queryPage)); // Sinkronkan currentPage dengan query
        setSearch(querySearch); // Sinkronkan search dengan query
    }, [queryPage, querySearch]);

    // Fetch data dari API
    useEffect(() => {
        fetchData({
            apiUrl,
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

    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Data Pabrik Pembuat</h1>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/data-pabrik-pembuat/add" className="bg-blue-500 text-white px-4 py-2 rounded mx-10 mt-4">
                        Input Data Pabrik Pembuat
                    </Link>
                    <SearchQuery searchQuery={search} setSearchQuery={setSearch} />
                </div>
                <DataPabrikPembuatTable
                    data={data}
                    error={error}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                    apiUrl={apiUrl}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    searchQuery={search}
                />
            </div>
        </>
    )
}
