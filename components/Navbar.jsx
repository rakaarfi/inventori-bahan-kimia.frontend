import Link from 'next/link';

export const Navbar = () => {

    const input_data = [
        { name: "Lokasi Bahan Kimia", link: "/dashboard/lokasi-bahan-kimia/detail/" },
        { name: "Data Pabrik Pembuat", link: "/dashboard/data-pabrik-pembuat/detail/" },
        { name: "Data Bahan Kimia", link: "/dashboard/data-bahan-kimia/detail/" },
        { name: "Data Penerimaan Penggunaan", link: "/dashboard/data-penerimaan-penggunaan/detail/" },
    ]

    const preview_report = [
        { name: "Daftar Bahan Kimia", link: "/dashboard/report-daftar-bahan-kimia/" },
        { name: "Inventori Bahan Kimia", link: "/dashboard/report-inventori-bahan-kimia/" },
        { name: "Data Bahan Kimia", link: "/dashboard/report-data-bahan-kimia/" },
    ]

    return (
        <nav className="dark:bg-[#12171c] bg-[#ffffff] p-3 lg:p-6 z-[9999] fixed left-0 rounded-3xl shadow h-[95vh] my-5 mx-5">
            <div className="flex flex-col container mx-auto justify-between gap-10">
                <div className="flex flex-col">
                    <h1 className='text-lg font-bold border-b font-jkt'>Input Data</h1>
                    <div className='flex flex-col gap-5 my-1'>
                        {input_data.map((item) => {
                            return (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className='font-jkt text-sm'
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className='text-lg font-bold border-b font-jkt'>Preview Report</h1>
                    <div className='flex flex-col gap-5 my-1'>
                        {preview_report.map((item) => {
                            return (
                                <Link
                                    key={item.link}
                                    href={item.link}
                                    className='font-jkt text-sm'
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav >
    );
};