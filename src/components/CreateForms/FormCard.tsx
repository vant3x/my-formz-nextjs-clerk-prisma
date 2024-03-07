import { Form } from "@prisma/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { formatDistance } from "date-fns";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export default function FormCard({form} : { form: Form }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <span className="flex items-center gap-2 justify-center">
                            {form.name}
                        </span>
                        {form.published && <Badge>Published</Badge> }
                        {!form.published && <Badge variant={"destructive"}>Draft</Badge> }
                    </CardTitle>
                    <CardDescription>
                        {formatDistance(form.createdAt, new Date(), {
                                addSuffix: true
                            })}
                            {form.published && (
                                <span className="flex items-center gap-2">
                                    <LuView className="text-muted-foreground"/>
                                    <span> {form.visits.toLocaleString()} </span>
                                    <FaWpforms className="text-muted-foreground"/>
                                    <span> {form.submissions.toLocaleString()} </span>

                                </span>
                            )}
                    </CardDescription>
                </CardHeader>
                <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
                                { form.description  ||  "No description"}
                </CardContent>
                <CardFooter>
                    { 
                        form.published && (
                            <Button asChild className="w-full mt-2 text-md gap-4">
                                <Link href={`/forms/${form.id}`}>View submissions <BiRightArrowAlt/></Link>
                            </Button>
                        )
                    }
                        { 
                        !form.published && (
                            <Button asChild className="w-full mt-2 text-md gap-4">
                                <Link href={`/builder/${form.id}`}>Edit form <FaEdit/></Link>
                            </Button>
                        )
                    }
                </CardFooter>
            </Card>
        </>
    )
}