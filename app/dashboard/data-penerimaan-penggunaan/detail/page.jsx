"use client";

import { useState, useEffect } from "react";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchQuery } from "@/components/SearchQuery";
import { handleDelete } from "@/utils/api";
import DataPenerimaanPenggunaanList from "@/components/DataPenerimaanPenggunaan/DataPenerimaanPenggunaanList";
import { fetchPaginatedData, fetchData } from "@/utils/api";


export default function page() {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1";
    const querySearch = searchParams.get("search") || "";

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage))
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const [error, setError] = useState(null);

    const [chemicalMaterials, setChemicalMaterials] = useState([]);

    const routeUrl = "data_penerimaan_penggunaan";
    const responseKey = "list_data_penerimaan_penggunaan";

    const transactions_type = ["Penerimaan", "Penggunaan"]

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Fetch data setiap kali currentPage atau search berubah
    useEffect(() => {
        fetchData('data_bahan_kimia').then(response => setChemicalMaterials(response));
    }, [currentPage, search]);

    // Fetch data setiap kali currentPage atau search berubah
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
        <>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Data Penerimaan Penggunaan</h1>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/dashboard/data-penerimaan-penggunaan/add" className="bg-blue-500 text-white px-4 py-2 rounded mx-10 mt-4">
                        Input Data Penerimaan Penggunaan
                    </Link>
                    <SearchQuery
                        searchQuery={search}
                        setSearchQuery={setSearch}
                        placeHolder={"Cari Data Penerimaan Penggunaan"}
                    />
                </div>
                <DataPenerimaanPenggunaanList
                    data={data}
                    chemicalMaterials={chemicalMaterials}
                    transactionsType={transactions_type}
                    error={error}
                    onDelete={handleDelete}
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
