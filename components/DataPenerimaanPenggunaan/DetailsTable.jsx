export default function DetailsTable({ selectedChemical, locations, factories, remainingAmount }) {
    const location = locations.find((loc) => loc.id === selectedChemical?.id_location) || {};
    const factory = factories.find((fac) => fac.id === selectedChemical?.id_factory) || {};

    return (
        <div className="flex flex-row gap-8 p-4">
            {/* Table Data Bahan Kimia */}
            <div className="w-1/3">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr>
                            <th colSpan="2" className="border px-4 py-2 bg-gray-200 text-center">
                                Data Bahan Kimia
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 whitespace-nowrap min-w-[150px]">Nama Bahan Kimia</td>
                            <td className="border px-4 py-2">{selectedChemical?.name || "__________"}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Merek Dagang</td>
                            <td className="border px-4 py-2">
                                {selectedChemical?.trade_name || "__________"}
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jumlah Maksimum Inventori</td>
                            <td className="border px-4 py-2">
                                {selectedChemical
                                    ? `${selectedChemical.max_amount} ${selectedChemical.unit}`
                                    : "__________"}
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sisa Maksimal</td>
                            <td className="border px-4 py-2">
                                {remainingAmount !== null ? `${remainingAmount} ${selectedChemical?.unit}` : "__________"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Table Lokasi Bahan Kimia */}
            <div className="w-1/3">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr>
                            <th colSpan="2" className="border px-4 py-2 bg-gray-200 text-center">
                                Lokasi Bahan Kimia
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Ruang</td>
                            <td className="border px-4 py-2">{location.room || "__________"}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Lokasi</td>
                            <td className="border px-4 py-2">{location.location || "__________"}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Bangunan</td>
                            <td className="border px-4 py-2">{location.building || "__________"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Table Data Pabrik Pembuat */}
            <div className="w-1/3">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr>
                            <th colSpan="2" className="border px-4 py-2 bg-gray-200 text-center">Data Pabrik Pembuat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 whitespace-nowrap min-w-[150px]">Nama Pabrik Pembuat</td>
                            <td className="border px-4 py-2">{factory.name || "__________"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
