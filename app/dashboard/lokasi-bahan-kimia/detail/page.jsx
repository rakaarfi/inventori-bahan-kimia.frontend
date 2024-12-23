"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Pagination from "@/components/Pagination";
import { SearchQuery } from "@/components/SearchQuery";
import { fetchData, handleDelete, handleUpdate } from "@/components/HandleAPI";
import LokasiBahanKimiaList from "@/components/LokasiBahanKimiaList";


export default function page() {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1";
    const querySearch = searchParams.get("search") || "";

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const [error, setError] = useState(null);

    const apiUrl = "http://127.0.0.1:8000/";
    const routeUrl = "lokasi_bahan_kimia";
    const responseKey = "list_lokasi_bahan_kimia";

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

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
        <>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Lokasi Bahan Kimia</h1>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/dashboard/lokasi-bahan-kimia/add" className="bg-blue-500 text-white px-4 py-2 rounded mx-10 mt-4">
                        Input Lokasi Bahan Kimia
                    </Link>
                    <SearchQuery
                        searchQuery={search}
                        setSearchQuery={setSearch}
                        placeHolder={"Cari Lokasi Bahan Kimia"}
                    />
                </div>
                <LokasiBahanKimiaList
                    data={data}
                    error={error}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                    apiUrl={apiUrl}
                    routeUrl={routeUrl}
                    currentPage={currentPage}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    searchQuery={search}
                />
            </div>
        </>
    );
}
