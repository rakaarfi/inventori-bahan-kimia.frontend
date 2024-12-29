'use client';

import { useState, useEffect } from 'react';
import DropdownChemical from './DropdownChemical';
import DetailsTable from './DetailsTable';
import TransactionForm from './TransactionForm';
import { fetchTotalInventory, createTransactions } from '@/utils/api';


export default function DataPenerimaanPenggunaan({
    initialChemicalMaterials,
    initialLocations,
    initialFactories,
}) {
    const [chemicalMaterials] = useState(initialChemicalMaterials);
    const [locations] = useState(initialLocations);
    const [factories] = useState(initialFactories);

    const [errorMessage, setErrorMessage] = useState("");
    const [remainingAmount, setRemainingAmount] = useState(null);
    const [selectedChemical, setSelectedChemical] = useState(null);
    const [currentInventory, setCurrentInventory] = useState(null);
    const [rows, setRows] = useState([
        { date: "", transaction_type: "", amount: "", unit: "", description: "" },
    ]);

    const handleChemicalMaterialChange = async (selectedId) => {
        const chemical = chemicalMaterials.find((item) => item.id === selectedId);
        setSelectedChemical(chemical);

        if (chemical) {
            try {
                const { total_received, total_used } = await fetchTotalInventory(selectedId);
                const currentInventory = total_received - total_used;
                setCurrentInventory(currentInventory);
                setRemainingAmount(chemical.max_amount - currentInventory);
            }
            catch (error) {
                console.error('Error fetching total inventory:', error);
            }
        } else {
            setCurrentInventory(null);
            setRemainingAmount(null);
        }
        setErrorMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedChemical) {
            alert("Harap pilih bahan kimia sebelum mengirim.");
            return;
        }

        try {

            // Perhitungan Total Used dari input pengguna
            const totalUsedFromInput = rows
                .filter((row) => row.transaction_type === "Penggunaan")
                .reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);

            // Validasi Penggunaan Tidak Melebihi Sisa Inventori
            if (totalUsedFromInput > currentInventory) {
                alert(`Total penggunaan (${totalUsedFromInput}) tidak boleh melebihi inventori saat ini (${currentInventory}).`);
                return;
            }

            // Kirim Data Jika Valid
            const payload = rows.map((row) => ({
                ...row,
                id_chemical_material: selectedChemical.id,
            }));

            await createTransactions(payload);
            alert("Data berhasil disimpan!");
            setRows([{ date: "", transaction_type: "", amount: "", unit: "", description: "" }]);
        } catch (error) {
            console.error("Error submitting data:", error.message);
            alert("Terjadi kesalahan saat menyimpan data.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen ml-56 font-jkt text-xs">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-xl font-bold text-center mb-4">
                    Data Penerimaan Penggunaan Bahan Kimia
                </h1>
                <DropdownChemical
                    chemicalMaterials={chemicalMaterials}
                    selectedChemical={selectedChemical}
                    onChange={handleChemicalMaterialChange}
                />
                <DetailsTable
                    selectedChemical={selectedChemical}
                    locations={locations}
                    factories={factories}
                    remainingAmount={remainingAmount}
                />
                <TransactionForm
                    rows={rows}
                    setRows={setRows}
                    handleSubmit={handleSubmit}
                    errorMessage={errorMessage}
                    selectedChemical={selectedChemical}
                />
            </div>
        </div>
    );
}
