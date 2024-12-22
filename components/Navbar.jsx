import Link from 'next/link';

export const Navbar = () => {

    const input_data = [
        { name: "Lokasi Bahan Kimia", link: "/lokasi-bahan-kimia/" },
        { name: "Data Pabrik Pembuat", link: "/data-pabrik-pembuat/" },
        { name: "Data Bahan Kimia", link: "/data-bahan-kimia/" },
        { name: "Data Penerimaan Penggunaan", link: "/data-penerimaan-penggunaan/" },
    ]

    const preview_report = [
        "Daftar Bahan Kimia",
        "Inventori Bahan Kimia",
        "Data Bahan Kimia"
    ]

    return (
        <nav className="dark:bg-[#000000] bg-[#ffffff] p-3 lg:p-6 z-[9999] fixed left-0 rounded-3xl shadow h-[95vh] my-5 mx-5">
            <div className="flex flex-col container mx-auto justify-between gap-10">
                <div className="flex flex-col">
                    <h1 className='text-xl font-bold border-b'>Input Data</h1>
                    <div className='flex flex-col gap-5 my-1'>
                        {input_data.map((item) => {
                            return (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className='text-xl font-bold border-b'>Preview Report</h1>
                    <div className='flex flex-col gap-5 my-1'>
                        {preview_report.map((item) => {
                            return (
                                <Link
                                    key={item}
                                    href={`#${item}`}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav >
    );
};