import CardStatsWrapper from "@/components/CardStatsWrapper";
import StatsCards from "@/components/StatsCard";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Suspense } from "react";


export default function Home() {
        return (
            <div className="container pt-4">
            
                <Suspense fallback={<StatsCards loading={true} />}>
                <CardStatsWrapper/>
                </Suspense> 
                <Separator className="my-6" />
                <h2>Yours forms</h2>
                <Separator className="my-6" />
            </div>
        )
}