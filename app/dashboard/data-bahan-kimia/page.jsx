"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import DataBahanKimiaTable from "@/components/DataBahanKimiaTable";
import Pagination from "@/components/Pagination";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchQuery } from "@/components/SearchQuery";
import { fetchData, handleDelete, handleUpdate } from "@/components/HandleAPI";


export default function page() {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1"; // Default ke 1
    const querySearch = searchParams.get("search") || ""; // Default ke ''

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const [error, setError] = useState(null);

    const [characteristics, setCharacteristics] = useState([]);
    const [lokasiBahanKimia, setLokasiBahanKimia] = useState([]);
    const [dataPabrikPembuat, setDataPabrikPembuat] = useState([]);

    const apiUrl = "http://127.0.0.1:8000/";
    const routeUrl = "data_bahan_kimia";
    const responseKey = "list_data_bahan_kimia";

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const fetchData = async () => {
        try {
            const url = `${apiUrl}${routeUrl}/${responseKey}?page=${currentPage}&search=${search}`;
            const response = await axios.get(url);

            const {
                data:
                listData,
                page,
                total_pages,
            } = response.data.list_data_bahan_kimia;

            const { characteristics, lokasi_bahan_kimia, data_pabrik_pembuat } = response.data;

            setData(listData);
            setCurrentPage(page);
            setTotalPages(total_pages);

            // Store additional data in state
            setCharacteristics(characteristics);
            setLokasiBahanKimia(lokasi_bahan_kimia.data);
            setDataPabrikPembuat(data_pabrik_pembuat.data);
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch data setiap kali currentPage atau search berubah
    useEffect(() => {
        fetchData();
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
