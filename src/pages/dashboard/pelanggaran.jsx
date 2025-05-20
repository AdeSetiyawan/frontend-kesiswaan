import { useEffect, useState } from "react"

export default function Pelanggaran(){

    const [loading,setLoading] = useState(false);
    useEffect(() => {
        // Simulasikan waktu loading, misalnya fetching data
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 detik

        return () => clearTimeout(timer); // clear timer jika unmount
    }, []);

    if (loading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-orange-600"></span>
            </div>
        );
    }
    return (
        <>
            <h1>
                Pelanggaran
            </h1>
        </>
    )
}