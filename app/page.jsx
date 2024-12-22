import DataBahanKimia from "@/components/DataBahanKimia";
import DataPabrikPembuat from "@/components/DataPabrikPembuat";
import DataPenerimaanPenggunaan from "@/components/DataPenerimaanPenggunaan";
import LokasiBahanKimia from "@/components/LokasiBahanKimia";
import { Navbar } from "@/components/Navbar";
import Test from "@/components/Test";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav>
      <Navbar />
    </nav>
    {/* <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
      <Test />
    </div> */}
    {/* <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
      <LokasiBahanKimia />
    </div>
    <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
      <DataPabrikPembuat />
    </div>
    <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
      <DataBahanKimia />
    </div>
    <div className="lg:mx-[55rem] mx-[9rem] lg:my-0 my-24">
      <DataPenerimaanPenggunaan />
    </div> */}
    </>
  );
}
