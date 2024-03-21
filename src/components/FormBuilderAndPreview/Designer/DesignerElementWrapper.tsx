import { FormElementInstance, FormElements } from "../FormBuilder/FormElements";

export default function DesignerElementWrapper({element}: { element: FormElementInstance}) {
    const DesignerElement = FormElements[element.type].designerComponent;

    return (
        <><DesignerElement  /></>
    )
}