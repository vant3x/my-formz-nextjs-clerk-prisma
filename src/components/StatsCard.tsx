import { GetFormStats } from "@/actions/form";
import { ReactNode } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface StatsCardsProps {
    loading: boolean;
    data?: Awaited<ReturnType<typeof GetFormStats>>;
}

export default function StatsCards(props: StatsCardsProps) {
    const { data, loading } = props;
    return (
        <>  
            <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard 
                    title="Total Visits"
                    icon={<LuView className="text-blue-600" />}
                    helperText="All time form visits"
                    value={data?.visits.toLocaleString() || ""}
                    loading={loading}
                    className="shadow-md shadow-blue-600 mr-2"
                />
                 <StatsCard 
                    title="Total Submissions"
                    icon={<FaWpforms className="text-yellow-600" />}
                    helperText="All time form submissions"
                    value={data?.visits.toLocaleString() || ""}
                    loading={loading}
                    className="shadow-md shadow-yellow-600 mr-2"
                />
                    <StatsCard 
                    title="Submissions Rate"
                    icon={<HiCursorClick className="text-red-600" />}
                    helperText="Visits that result in form submission"
                    value={data?.visits.toLocaleString() + "%" || ""}
                    loading={loading}
                    className="shadow-md shadow-red-600 mr-2"
                />
                 <StatsCard 
                    title="Bounce Rate"
                    icon={<TbArrowBounce className="text-green-600" />}
                    helperText="Visits that result in form submission"
                    value={data?.visits.toLocaleString() + "%" || ""}
                    loading={loading}
                    className="shadow-md shadow-green-600"
                />
            </div>
        </>
    )
}

function StatsCard ({
    title,
    value,
    icon, 
    helperText,
    loading,
    className
}: {
    title: string;
    value: string;
    helperText: string;
    className: string;
    loading: boolean;
    icon: ReactNode;
}) {
    return (
        <>
            <Card className={className}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-md font-medium text-muted-foreground">{title}</CardTitle>
                    {icon}
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {
                            loading && <Skeleton>
                                <span className="opacity-0">0</span>
                            </Skeleton>
                        }
                        {
                            !loading && value
                        }
                    </div>
                    <p className="text-xs text-muted-foreground pt-1"> {helperText} </p>
                </CardContent>
            </Card>
        </>
    )
}