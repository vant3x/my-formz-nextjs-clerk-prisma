"use client";

import { useDroppable } from "@dnd-kit/core";

import DesignerSidebarControl from "./DesignerSidebarControl";
import { cn } from "@/lib/utils";
import { FormElementInstance } from "./FormBuilder/FormElements";
import { useState } from "react";

export default function Designer() {

    const [elements, setElements] = useState<FormElementInstance[]>([]);
    const droppable = useDroppable({
        id: "design-drop-area",
        data: {
            isDesignerDropArea: true,
        }
    })

    return (
        <div className="flex w-full h-full">
            <div className="p-4 w-full">
                <div
                ref={droppable.setNodeRef}
                className={cn("bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto", droppable.isOver && "ring-2 ring-primary/20")}>
                    
                      {
                        !droppable.isOver && (
                            <p className="text-muted-foreground text-3xl flex flex-grow items-center font-bold">Drop here</p>
                        )
                      }
                        {droppable.isOver && (
                            <div className="p-4 w-full">
                                <div className="h-[120px] rounded-md bg-primary/20"></div>
                            </div>
                        )}
                    </div>    
            </div>
            <DesignerSidebarControl/>
        </div>
    )
}