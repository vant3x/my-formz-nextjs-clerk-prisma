import { DragOverlay, useDndMonitor } from "@dnd-kit/core"

export default function DragOverlayWrapper() {

    useDndMonitor({
        onDragStart: (event) =>  {
            console.log('drag item', event);
        },
    })

    const node = <div>No drag overlay</div>;

    return (
       <DragOverlay>
        {node}
       </DragOverlay>
    )
}