import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SearchQuery } from '../SearchQuery';
import { fetchData, fetchPaginatedData } from '@/utils/api';
import { useSearchParams } from 'next/navigation';
import Pagination from '../Pagination';
import { ButtonDelete, ButtonDetail, InputButton } from '../ButtonComponents';

export default function DataBahanKimiaList({
    onDelete,
}) {
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
        <div className="container mx-auto p-4 font-jkt">

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                    <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Daftar Data Bahan Kimia</h1>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <InputButton
                            href="/dashboard/data-bahan-kimia/add"
                            text="Input Data Bahan Kimia"
                        />
                        <SearchQuery
                            searchQuery={search}
                            setSearchQuery={setSearch}
                            placeHolder={"Cari Data Bahan Kimia"}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-xs">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">No</th>
                                    <th className="border border-gray-300 px-4 py-2">Ruang</th>
                                    <th className="border border-gray-300 px-4 py-2">Nama Bahan Kimia</th>
                                    <th className="border border-gray-300 px-4 py-2">Nama Dagang</th>
                                    <th className="border border-gray-300 px-4 py-2">Rumus Kimia</th>
                                    <th className="border border-gray-300 px-4 py-2">Pabrik Pembuat</th>
                                    <th className="border border-gray-300 px-4 py-2">Karakteristik</th>
                                    <th className="border border-gray-300 px-4 py-2">Jumlah Inventori Maksimal</th>
                                    <th className="border border-gray-300 px-4 py-2">Satuan</th>
                                    <th className="border border-gray-300 px-4 py-2">Keterangan</th>
                                    <th className="border border-gray-300 px-4 py-2" colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {index + 1 + (currentPage - 1) * 10}
                                        </td>
                                        {lokasiBahanKimia.find((loc) => loc.id === item.id_location) && (
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                {lokasiBahanKimia.find((loc) => loc.id === item.id_location).room}
                                            </td>
                                        )}
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.trade_name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.chemical_formula}
                                        </td>
                                        {dataPabrikPembuat.find((factory) => factory.id === item.id_factory) && (
                                            <td className="border border-gray-300 px-4 py-2">
                                                {dataPabrikPembuat.find((factory) => factory.id === item.id_factory).name}
                                            </td>
                                        )}
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.characteristic}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.max_amount}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.unit}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDetail
                                                href={`/dashboard/data-bahan-kimia/detail/${item.id}`}
                                            />
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
