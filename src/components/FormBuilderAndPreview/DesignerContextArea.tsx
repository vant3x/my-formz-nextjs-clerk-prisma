"use client";

import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";

import DesignerSidebarControl from "./DesignerSidebarControl";
import { cn } from "@/lib/utils";
import { ElementsType, FormElementInstance, FormElements } from "./FormBuilder/FormElements";
import { useState } from "react";
import useDesigner from "@/hooks/useDesigner";
import { idGenerator } from "@/lib/idGenerator";
import DesignerElementWrapper from "./Designer/DesignerElementWrapper";

export default function Designer() {

    const { elements, addElements, selectedElement, setSelectedlectedElement } = useDesigner();
    const droppable = useDroppable({
        id: "design-drop-area",
        data: {
            isDesignerDropArea: true,
        }
    });

    console.log("Elements", elements);
    
    useDndMonitor({
        onDragEnd: (event: DragEndEvent) => {
            const { active, over } = event;

            if (!active || !over) return;

            const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
            const isDroppingOverDesignerArea = over.data?.current?.isDesignerDropArea;

            const droppingSidebarBtnOverDesignerDropArea = isDesignerBtnElement && isDroppingOverDesignerArea;
            // first scenario
            if (droppingSidebarBtnOverDesignerDropArea) {
                const type = active.data?.current?.type;
                const newElement = FormElements[type as ElementsType].construct(idGenerator());

                addElements(elements.length, newElement);
                return;
            }

            const isDroppingOverDesignerElementTopHalf = over.data?.current?.isTopHalfDesignerElement;

            const isDroppingOverDesignerElementBottomHalf = over.data?.current?.isBottomHalfDesignerElement;

            const isDroppingOverDesignerElement = isDroppingOverDesignerElementTopHalf | isDroppingOverDesignerElementBottomHalf;

            const droppingSidebarBtnOverDesignerElement = isDesignerBtnElement && isDroppingOverDesignerElement;

            // second scenario
            if (droppingSidebarBtnOverDesignerElement) {
                const type = active.data?.current?.type;
                const newElement = FormElements[type as ElementsType].construct(idGenerator());

                const overId = over.data?.current?.elementId;

                const overElementIndex = elements.findIndex(el => el.id === overId);
                if (overElementIndex === -1) {
                    throw new Error("element not found");
                }

                let indexForNewElement = overElementIndex;
                if (isDroppingOverDesignerElementBottomHalf) {
                    indexForNewElement = overElementIndex + 1;
                }
                addElements(indexForNewElement, newElement);
                return;
            }
        },
    }) 

    return (
        <div className="flex w-full h-full">
            <div className="p-4 w-full" onClick={()=> {if (selectedElement) setSelectedlectedElement(null)}}>
                <div
                ref={droppable.setNodeRef}
                className={cn("bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto", droppable.isOver && "ring-2 ring-primary/20")}>
                    
                      {
                        !droppable.isOver && elements.length === 0 && (
                            <p className="text-muted-foreground text-3xl flex flex-grow items-center font-bold">Drop here</p>
                        )
                      }
                        {droppable.isOver &&  elements.length === 0 && (
                            <div className="p-4 w-full">
                                <div className="h-[120px] rounded-md bg-primary/20"></div>
                            </div>
                        )}
                        {
                           
                            elements.length > 0 && (
                                <div className="flex flex-col text-background w-full gap-2 p-4">
                                    {elements.map(element => (
                                        <DesignerElementWrapper key={element.id} element={element} />
                                    ))}
                                </div>
                            )
                        }
                    </div>    
            </div>
            <DesignerSidebarControl/>
        </div>
    )
}