import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react"; 
import { SidebarBtnElementDragOverlay } from "../FormBuilder/SideBarBtnElement";
import { ElementsType, FormElementInstance, FormElements } from "../FormBuilder/FormElements";
import useDesigner from "@/hooks/useDesigner";

export default function DragOverlayWrapper() {

    const [draggedItem, setDraggedItem] = useState<Active | null>(null);
    const { elements } = useDesigner();

    useDndMonitor({
        onDragStart: (event) =>  {
            console.log('drag item', event);
            setDraggedItem(event.active);
        },
        onDragCancel: () => {
            setDraggedItem(null);

        },
        onDragEnd: () => {
            setDraggedItem(null);
        },
    });

    if (!draggedItem) return null;

    let node = <div>No drag overlay</div>;
    const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

    if (isSidebarBtnElement) {
        const type = draggedItem.data?.current?.type as ElementsType;
        node = <SidebarBtnElementDragOverlay formElement={FormElements[type]}/>
    }

    const isDesignerElement = draggedItem.data?.current?.isDesignerElement;

    if (isDesignerElement) {
        const elementId = draggedItem.data?.current?.elementId;

        const element = elements.find(el => el.id === elementId);

        if (!element)node = <div>Element not found</div>;
        else {
            const DesignerElementComponent = FormElements[element.type].designerComponent;
            node = <div className="flex bg-accent border rounded-md h-[120px] w-full py-4 px-4 opacity-60 pointer pointer-events-none">
                 <DesignerElementComponent elementInstance={element}  />
            </div>
        }
    }


    return (
       <DragOverlay>
        {node}
       </DragOverlay>
    )
}