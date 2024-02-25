"use client";

import { Button } from "../ui/button";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription } from "../ui/dialog";
import CreateFormFields from "./CreateFormFields";
import { BsFileEarmarkPlus } from "react-icons/bs";

export default function CreateFormBtn () {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button  variant={"outline"} className="text-[#000] group border border-dashed gap-4 bg-white hover:text-white border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer">
                <BsFileEarmarkPlus className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                   <p className="font-bold text-xl text-muted-foreground group-hover:text-primary"></p>
                   Create new form
                    </Button>
            </DialogTrigger>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>
                 
                   Create form
                  
                </DialogTitle>
                <DialogDescription>
                Create a new form to start collecting and review responses

                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
                <CreateFormFields/>
            </div>
            </DialogContent>
        </Dialog>
    );
}