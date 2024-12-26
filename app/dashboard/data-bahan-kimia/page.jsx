"use client";

import { useState, useEffect, use } from "react";
import DataBahanKimiaTable from "@/components/DataBahanKimia/DataBahanKimiaTable";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchQuery } from "@/components/SearchQuery";
import { handleDelete, handleUpdate } from "@/components/dataHandlers";
import { fetchPaginatedData, fetchData } from "@/utils/api";


export default function page() {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1"; // Default ke 1
    const querySearch = searchParams.get("search") || ""; // Default ke ''

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const [error, setError] = useState(null);

    const [lokasiBahanKimia, setLokasiBahanKimia] = useState([]);
    const [dataPabrikPembuat, setDataPabrikPembuat] = useState([]);

    const characteristics = ["Flammable", "Toxic", "Corrosive", "Explosive", "Carcinogen", "Iritating"]

    const routeUrl = "data_bahan_kimia";
    const responseKey = "list_data_bahan_kimia";

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Fetch data setiap kali currentPage atau search berubah
    useEffect(() => {
        fetchData('lokasi_bahan_kimia').then(response => setLokasiBahanKimia(response));
    }, [currentPage, search]);

    useEffect(() => {
        fetchData('data_pabrik_pembuat').then(response => setDataPabrikPembuat(response));
    }, [currentPage, search]);

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
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Data Bahan Kimia</h1>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/dashboard/data-bahan-kimia/add" className="bg-blue-500 text-white px-4 py-2 rounded mx-10 mt-4">
                        Input Data Bahan Kimia
                    </Link>
                    <SearchQuery
                        searchQuery={search}
                        setSearchQuery={setSearch}
                        placeHolder={"Cari Data Bahan Kimia"}
                    />
                </div>
                <DataBahanKimiaTable
                    data={data}
                    characteristics={characteristics}
                    lokasiBahanKimia={lokasiBahanKimia}
                    dataPabrikPembuat={dataPabrikPembuat}
                    error={error}
                    onUpdate={handleUpdate}
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
