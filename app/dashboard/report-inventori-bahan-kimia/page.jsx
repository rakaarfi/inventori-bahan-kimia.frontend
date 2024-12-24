import { Navbar } from '@/components/Navbar';
import ReportInventoriBahanKimia from '@/components/ReportInventoriBahanKimia';

export default function page() {

    return (
        <>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <ReportInventoriBahanKimia
                />
            </div>
        </>
    );
}
