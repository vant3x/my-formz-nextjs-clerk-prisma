import useDesigner from "@/hooks/useDesigner";
import { FormElements } from "./FormBuilder/FormElements";
import SidebarBtnElement from "./FormBuilder/SideBarBtnElement";
import FormElementSidebar from "./FormBuilder/FormElementSidebar";
import PropertiesFormSidebar from "./FormBuilder/PropertiesFormSidebar";

export default function DesignerSidebarControl() {

    const { selectedElement } = useDesigner();

    return (
       <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
            {
                !selectedElement && <FormElementSidebar/>

            }
            {
                selectedElement && <PropertiesFormSidebar />
            }
       </aside>
    );
}