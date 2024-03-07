import CardStatsWrapper from "@/components/CardStatsWrapper";
import CreateFormBtn from "@/components/CreateForms/CreateFormBtn";
import FormCard from "@/components/CreateForms/FormCard";
import FormCardSkeleton from "@/components/CreateForms/FormCardSkeleton";
import { FormCards } from "@/components/CreateForms/FormCards";
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
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <CreateFormBtn/>
               <Suspense fallback={[1,2,3,4].map(el => (
                <FormCardSkeleton key={el} />
               ))}>
                <FormCards/>
               </Suspense>
               </div>
            </div>
        )
}