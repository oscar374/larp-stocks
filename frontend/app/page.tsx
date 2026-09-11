import Sidebar from "@/components/sidebar";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="siteContainer">
                <Sidebar />
                <div className="content">
                    <h1 className="text-5xl">larp stocks</h1>
                    <a href="/sampleStocks">sample stocks link</a>
                    <a href="/example">Lvidia example link</a>
                </div>
            </div>
        </>
    );
}
