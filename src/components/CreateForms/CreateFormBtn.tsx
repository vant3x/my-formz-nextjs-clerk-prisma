"use client";

import { Button } from "../ui/button";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription } from "../ui/dialog";
import CreateFormFields from "./CreateFormFields";

export default function CreateFormBtn () {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create new form</Button>
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