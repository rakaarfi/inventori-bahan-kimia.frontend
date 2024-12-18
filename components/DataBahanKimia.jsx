export default function DataBahanKimia() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Data Bahan Kimia</h1>
                <form action="">
                    <table className="table-auto border-collapse">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Ruang:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="ruang" name="ruang" className="ruang-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Nama Bahan Kimia:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="nama-bahan-kimia" name="nama-bahan-kimia" className="lokasi-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Nama Dagang:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="nama-dagang" name="nama-dagang" className="bangunan-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Rumus Kimia:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="rumus-kimia" name="rumus-kimia" className="bangunan-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Pabrik Pembuat:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="pabrik-pembuat" name="pabrik-pembuat" className="contact-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Karakteristik:</td>
                                <td className="px-4 py-2">
                                    <select id="karakteristik" className="karakteristik-bahan p-2.5 block w-full rounded-md bg-white text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required >
                                        <option value="" disabled selected>Pilih Karakteristik</option>
                                        <option value={"Flammable"}>Flammable</option>
                                        <option value={"Toxic"}>Toxic</option>
                                        <option value={"Corrosive"}>Corrosive</option>
                                        <option value={"Explosive"}>Explosive</option>
                                        <option value={"Carcinogen"}>Carcinogen</option>
                                        <option value={"Iritating"}>Iritating</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Jumlah Inventori Maksimal:</td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-row gap-1">
                                        <input type="text" id="jumlah-inventori-max" name="jumlah-inventori" className="jumlah-max-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required />
                                        <input type="text" id="satuan" name="satuan" className="satuan-max-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" placeholder="Satuan" required />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Keterangan:</td>
                                <td className="px-4 py-2">
                                    <textarea name="information" id="information" rows="2" className="informasi-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-right align-bottom p-4">
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </div>
        </div>

    );
}