"use client";

import { useDroppable } from "@dnd-kit/core";

import DesignerSidebarControl from "./DesignerSidebarControl";

export default function Designer() {

    const droppable = useDroppable({
        id: "design-drop-area",
        data: {
            isDesignerDropArea: true,
        }
    })

    return (
        <div className="flex w-full h-full">
            <div className="p-4 w-full">
                <div className="bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
                    
                        <p className="text-muted-foreground text-3xl flex flex-grow items-center font-bold">Drop here</p>
                    </div>    
            </div>
            <DesignerSidebarControl/>
        </div>
    )
}