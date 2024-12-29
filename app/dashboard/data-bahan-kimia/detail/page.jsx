"use client";

import { handleDelete } from "@/utils/api";
import DataBahanKimiaList from "@/components/DataBahanKimia/DataBahanKimiaList";


export default function page() {
    return (
        <>
            <div className="lg:ml-[19rem] ml-[9rem] lg:my-0 my-24 mx-5">
                <DataBahanKimiaList
                    onDelete={handleDelete}
                />
            </div>
        </>
    );
}
