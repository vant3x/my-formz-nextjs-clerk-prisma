"use client";

import { Form } from "@prisma/client";
import React from "react";
import PreviewDialogBtn from "./FormBuilderAndPreview/PreviewDialogBtn";
import SaveFormBtn from "./FormBuilderAndPreview/SaveFormBtn";
import PublishFormBtn from "./FormBuilderAndPreview/PublishFomBtn";
import Designer from "./FormBuilderAndPreview/DesignerContextArea";
import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverlayWrapper from "./FormBuilderAndPreview/DND/DragOverlayWrapper";

function FormBuilder({form} : {  form: Form }) {

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10,
        }, 

    });

    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            distance: 10,
            tolerance:5
        }, 
    })

    const sensors = useSensors(mouseSensor, touchSensor);
    
    return (
        <DndContext sensors={sensors}>
                <main className="flex flex-col w-full">
            <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
                <h2 className="truncate font-medium">
                <span className="text-muted-foreground mr-2">FormBuilder:</span> 
                { form.name }
                </h2>
                <div className="flex items-center gap-2">
                <PreviewDialogBtn/>
                {
                    !form.published && (
                        <>
                            <SaveFormBtn/>
                            <PublishFormBtn/>
                        </>
                    )
                }
                </div>
            </nav>
            <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/graph-paper.svg)] dark:bg-[url(/graph-paper-dark.svg)]">
                <Designer/>
                
            </div>
       </main> 
       <DragOverlayWrapper/>
        </DndContext>
    );
}

export default FormBuilder;