import { useState } from "react";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import { FormElementInstance, FormElements } from "../FormBuilder/FormElements";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BiSolidTrash } from "react-icons/bi";
import useDesigner from "@/hooks/useDesigner";


export default function DesignerElementWrapper({
  element,
}: {
  element: FormElementInstance;
}) {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);
  const { elements, removeElement, selectedElement, setSelectedlectedElement } = useDesigner();

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalffDesignerElement: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
        type: element.type,
        elementId: element.id,
        isDesignerElement: true
    }
  })

  if (draggable.isDragging) return null;

  const DesignerElement = FormElements[element.type].designerComponent;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
    
      className={cn("relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset", element.id === selectedElement?.id && "ring-blue-600")}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={(e)=> {
        e.stopPropagation();
        setSelectedlectedElement(element)
      }}
    >
      <div
        ref={topHalf.setNodeRef}
        className={"absolute w-full h-1/2 rounded-t-md"}
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full bottom-0 h-1/2 rounded-t-md"
      />
      {
        mouseIsOver && (
            <>
            <div className="absolute right-0 h-full ">
                <Button className="flex justify-center h-full border rounded-md bg-red-500" variant={"outline"} onClick={(e) => {
                    e.stopPropagation();
                    removeElement(element.id);
                }}>
                    <BiSolidTrash className="h-6 w-6" />
                </Button>
            </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                    <p className="text-muted-foreground text-sm">
                        Click for properties or drag to move
                    </p>
                </div>
            </>
        )
      }
      {
        topHalf.isOver && <div className="absolute top-0  w-full rounded-md h-[7px] bg-primary rounded-b-none" />
      }
      <div className={cn("flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none opacity-100", mouseIsOver && "opacity-30", topHalf.isOver && "border-t-4 border-t-foreground", bottomHalf.isOver && "border-b-4 border-b-foreground")}>
        <DesignerElement elementInstance={element} />
      </div>
      {
        bottomHalf.isOver && <div className="absolute bottom-0 w-full rounded-md h-[7px] bg-primary rounded-t-none" />
      }
    </div>
  );
}
