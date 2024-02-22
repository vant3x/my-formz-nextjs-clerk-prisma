import CardStatsWrapper from "@/components/CardStatsWrapper";
import StatsCards from "@/components/StatsCard";
import Image from "next/image";
import { Suspense } from "react";


export default function Home() {
        return (
            <div className="container pt-4">
            
                <Suspense fallback={<StatsCards loading={true} />}>
                <CardStatsWrapper/>
                </Suspense>
            </div>
        )
}