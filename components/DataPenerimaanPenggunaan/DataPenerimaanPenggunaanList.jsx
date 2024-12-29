import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SearchQuery } from '../SearchQuery';
import { useSearchParams } from 'next/navigation';
import { fetchData, fetchPaginatedData } from '@/utils/api';
import Pagination from '../Pagination';
import { ButtonDelete, ButtonDetail, InputButton } from '../ButtonComponents';

export default function DataPenerimaanPenggunaanList({
    onDelete,
}) {

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


    if (!chemicalMaterials.length) {
        return <p>Loading chemical materials...</p>;
    }
    return (
        <div className="container mx-auto p-4 font-jkt">

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                    <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Daftar Data Penerimaan Penggunaan</h1>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <InputButton
                            href="/dashboard/data-penerimaan-penggunaan/add"
                            text="Input Data Penerimaan Penggunaan"
                        />
                        <SearchQuery
                            searchQuery={search}
                            setSearchQuery={setSearch}
                            placeHolder={"Cari Data Penerimaan Penggunaan"}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-xs">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">No</th>
                                    <th className="border border-gray-300 px-4 py-2">Nama Bahan Kimia</th>
                                    <th className="border border-gray-300 px-4 py-2">Tanggal</th>
                                    <th className="border border-gray-300 px-4 py-2">Tipe Transaksi</th>
                                    <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                                    <th className="border border-gray-300 px-4 py-2">Satuan</th>
                                    <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
                                    <th className="border border-gray-300 px-4 py-2" colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {index + 1 + (currentPage - 1) * 10}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {chemicalMaterials.find(
                                                (chemicalMaterial) =>
                                                    chemicalMaterial.id === item.id_chemical_material
                                            )?.name || "Unknown"}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {item.date}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.transaction_type}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {item.amount}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.unit}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDetail href={`/dashboard/data-penerimaan-penggunaan/detail/${item.id}`} />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDelete onClick={() => onDelete(item.id, `${routeUrl}`)} />
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
