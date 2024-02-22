import { GetFormStats } from "@/actions/form";
import StatsCards from "./StatsCard";


async function CardStatsWrapper () {

    const stats = await GetFormStats();
    return  (
        <>
            <StatsCards loading={false} data={stats} />
        </>
    );  
}

export default CardStatsWrapper;