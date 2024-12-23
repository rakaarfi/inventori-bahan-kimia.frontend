"use client";

import { useState, useEffect } from "react";
import axios from "axios";
// import DataBahanKimiaTable from "@/components/DataBahanKimiaTable";
import Pagination from "@/components/Pagination";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchQuery } from "@/components/SearchQuery";
import { fetchData, handleDelete, handleUpdate } from "@/components/HandleAPI";
import DataPenerimaanPenggunaanTable from "@/components/DataPenerimaanPenggunaanTable";


export default function page() {
    const searchParams = useSearchParams();

    // Ambil parameter dari URL
    const queryPage = searchParams.get("page") || "1"; // Default ke 1
    const querySearch = searchParams.get("search") || ""; // Default ke ''

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage))
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);
    const [error, setError] = useState(null);

    const apiUrl = "http://127.0.0.1:8000/";
    const routeUrl = "data_penerimaan_penggunaan";
    const responseKey = "list_data_penerimaan_penggunaan";

    const [chemicalMaterials, setChemicalMaterials] = useState([]);
    const [transactionsType, setTransactionsType] = useState([]);

    const fetchData = async () => {
        try {
            const url = `${apiUrl+routeUrl}`;
            const response = await axios.get(
                `${url}/${responseKey}?page=${currentPage}&search=${search}`
            );
            const {
                data: 
                    listData,
                    page,
                    total_pages,
            } = response.data.list_data_penerimaan_penggunaan;

            const { transactions_type, data_bahan_kimia } = response.data;

            setData(listData);
            setCurrentPage(page);
            setTotalPages(total_pages);

            // Store additional data in state
            setChemicalMaterials(data_bahan_kimia.data);
            setTransactionsType(transactions_type);
        } catch (err) {
            setError(err.message);
        }
    };

    // Sinkronisasi query parameter ke state
    useEffect(() => {
        setCurrentPage(Number(queryPage)); // Sinkronkan currentPage dengan query
        setSearch(querySearch); // Sinkronkan search dengan query
    }, [queryPage, querySearch]);

    useEffect(() => {
        fetchData();
    }, [currentPage, search]);

    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Data Penerimaan Penggunaan</h1>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/data-penerimaan-penggunaan/add" className="bg-blue-500 text-white px-4 py-2 rounded mx-10 mt-4">
                        Input Data Bahan Kimia
                    </Link>
                    <SearchQuery
                        searchQuery={search}
                        setSearchQuery={setSearch}
                        placeHolder={"Cari Data Penerimaan Penggunaan"}
                    />
                </div>
                <DataPenerimaanPenggunaanTable
                    data={data}
                    chemicalMaterials={chemicalMaterials}
                    transactionsType={transactionsType}
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
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}
