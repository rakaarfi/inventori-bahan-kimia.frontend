import { fetchData } from '@/utils/api';
import DataPenerimaanPenggunaan from '@/components/DataPenerimaanPenggunaan/DataPenerimaanPenggunaan';

export default async function page() {
    const chemicals = await fetchData('data_bahan_kimia');
    const locations = await fetchData('lokasi_bahan_kimia');
    const factories = await fetchData('data_pabrik_pembuat');

    return (
        <div className="lg:ml-[5rem] ml-[9rem] lg:my-0 my-24 mx-5">
            <DataPenerimaanPenggunaan
                initialChemicalMaterials={chemicals}
                initialLocations={locations}
                initialFactories={factories}
            />
        </div>
    );
}