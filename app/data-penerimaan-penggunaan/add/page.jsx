import DataPenerimaanPenggunaan from '@/components/DataPenerimaanPenggunaan'
import { Navbar } from '@/components/Navbar'

export default function page() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <DataPenerimaanPenggunaan />
            </div>
        </>
    )
}