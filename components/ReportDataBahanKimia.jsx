'use client';

import { useSearchParams } from "next/navigation";
import { SearchQuery } from "./SearchQuery";
import axios from "axios";
import Pagination from './Pagination';
import React, { useState, useEffect } from 'react';
import { fetchTotalInventory } from "@/utils/api";

export default function ReportDataBahanKimia() {
    const searchParams = useSearchParams();
    const queryPage = searchParams.get("page") || "1";
    const querySearch = searchParams.get("search") || "";

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(queryPage));
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState(querySearch);

    const [inventories, setInventories] = useState({});

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const fetchData = async () => {
        try {
            const page = currentPage > 0 ? currentPage : 1;
            const response = await axios.get(
                `http://127.0.0.1:8000/reports/report_data_bahan_kimia?page=${page}&search=${search}`
            );
            const fetchedData = response.data.data;

            setData(fetchedData);
            setTotalPages(response.data.total_pages);

            // Fetch inventory data for all items
            const inventoriesResult = {};
            for (const item of fetchedData) {
                const inventory = await fetchTotalInventory(item.id_bahan_kimia);
                inventoriesResult[item.id_bahan_kimia] = inventory.total_received - inventory.total_used;
            }
            setInventories(inventoriesResult);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        setCurrentPage(Number(queryPage) || 1);
        setSearch(querySearch || "");
    }, [queryPage, querySearch]);

    useEffect(() => {
        fetchData();
    }, [currentPage, search]);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="p-8 bg-gray-100">
            <div className="mb-4">
                <SearchQuery
                    searchQuery={search}
                    setSearchQuery={setSearch}
                    placeHolder={"Cari Data Bahan Kimia"}
                />
            </div>
            <div className="bg-gray-700 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h1 className="text-xl font-bold">Data Bahan Kimia</h1>
                <span className="text-sm">{formattedDate}</span>
            </div>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded-b-lg bg-white p-4 space-y-6">
                        {/* Data Bahan Kimia */}
                        <section key={index} className="flex flex-row gap-4 text-left border border-gray-300 rounded-lg p-4">
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold text-sm">Nama Bahan Kimia</p>
                                <p className="pl-10 text-sm">Karakteristik:</p>
                                <p className="pl-10 text-sm">Jumlah Inventori Maksimum:</p>
                                <p className="pl-10 text-sm">Jumlah Inventori Saat Ini:</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold text-sm">{item.nama_bahan_kimia}</p>
                                <p className="font-semibold text-sm">{item.karakteristik}</p>
                                <p className="font-semibold text-sm">{item.jumlah_inventori_maksimum}</p>
                                <p className="font-semibold text-sm">
                                    {inventories[item.id_bahan_kimia] !== undefined
                                        ? inventories[item.id_bahan_kimia]
                                        : "Loading..."}
                                </p>
                            </div>
                        </section>

                        {/* Pabrik Pembuat */}
                        <section className="flex flex-col lg:flex-row gap-4 text-left rounded-lg ">
                            <div className="flex flex-row gap-4 border border-gray-300 rounded-lg p-4 flex-grow basis-1/2">
                                <div className="flex flex-col gap-4">
                                    <p className="font-semibold text-sm">Nama Pabrik Pembuat</p>
                                    <p className="pl-10 text-sm">Alamat:</p>
                                    <p className="pl-10 text-sm">Kota:</p>
                                    <p className="pl-10 text-sm">Kode Pos:</p>
                                    <p className="pl-10 text-sm">Provinsi:</p>
                                    <p className="pl-10 text-sm whitespace-nowrap">Nama Contact Person:</p>
                                    <p className="pl-20 text-sm">No Telepon:</p>
                                    <p className="pl-20 text-sm">Extension:</p>
                                    <p className="pl-20 text-sm">No HP:</p>
                                    <p className="pl-20 text-sm">Email:</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="font-semibold text-sm">{item.nama_pabrik}</p>
                                    <p className="text-sm">{item.alamat_pabrik}</p>
                                    <p className="text-sm">{item.kota_pabrik}</p>
                                    <p className="text-sm">{item.kodepos_pabrik}</p>
                                    <p className="text-sm">{item.provinsi_pabrik}</p>
                                    <p className="text-sm">{item.kontak_pabrik}</p>
                                    <p className="text-sm">{item.telepon_pabrik}</p>
                                    <p className="text-sm">{item.extension_pabrik}</p>
                                    <p className="text-sm">{item.mobile_pabrik}</p>
                                    <p className="text-sm">{item.email_pabrik}</p>
                                </div>
                            </div>

                            {/* Lokasi Penyimpanan */}
                            <div className="flex flex-row gap-4 border border-gray-300 rounded-lg p-4 flex-grow basis-1/2">
                                <div className="flex flex-col gap-4">
                                    <p className="font-semibold text-sm">Lokasi Penyimpanan</p>
                                    <p className="pl-10 text-sm">Ruang:</p>
                                    <p className="pl-10 text-sm">Lokasi:</p>
                                    <p className="pl-10 text-sm">Bangunan:</p>
                                    <p className="pl-10 text-sm">Departemen/Bagian:</p>
                                    <p className="pl-10 text-sm whitespace-nowrap">Nama Contact Person:</p>
                                    <p className="pl-20 text-sm">No Telepon:</p>
                                    <p className="pl-20 text-sm">Extension:</p>
                                    <p className="pl-20 text-sm">No HP:</p>
                                    <p className="pl-20 text-sm">Email:</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm font-semibold">​</p>
                                    <p className="text-sm ">{item.ruang_lokasi}</p>
                                    <p className="text-sm ">{item.lokasi_lokasi}</p>
                                    <p className="text-sm ">{item.bangunan_lokasi}</p>
                                    <p className="text-sm ">{item.departemen_lokasi}</p>
                                    <p className="text-sm ">{item.kontak_lokasi}</p>
                                    <p className="text-sm ">{item.telepon_lokasi}</p>
                                    <p className="text-sm ">{item.extension_lokasi}</p>
                                    <p className="text-sm ">{item.mobile_lokasi}</p>
                                    <p className="text-sm ">{item.email_lokasi}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                ))
            ) : (
                <div className="border border-gray-300 rounded-b-lg bg-white p-4 space-y-6">
                    <section className="flex flex-row gap-4 text-left border border-gray-300 rounded-lg p-4">
                        <p className="text-lg font-semibold">Data Tidak Ditemukan</p>
                    </section>
                </div>
            )
            }
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                searchQuery={search}
            />

            <footer className="text-right mt-6 p-2 border-t border-gray-700 bg-gray-100 text-sm">
                Page {currentPage} of {totalPages}
            </footer>
        </div >
    );
}

