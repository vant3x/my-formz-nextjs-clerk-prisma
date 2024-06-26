"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance } from "../FormElements";
import DesignerComponent from "../../Designer/DesignerComponent";
import PropertiesComponent from "../PropertiesForm/PropertiesComponent";

const type: ElementsType = "TextField";


export const TextFieldFormElement: FormElement = {
 type,
 construct: (id: string) => ({
    id,
    type,
    extraAttributes,
 }),
 designerBtnElement: {
    icon: MdTextFields,
    label: "Text field",
 },
 designerComponent: DesignerComponent,
 formComponent: () => <div>Form component</div> ,
 propertiesComponent: PropertiesComponent,
}
   

export const  extraAttributes = {
   label: "Text field",
   helperText: "Helper text",
   required: false,
   placeHolder: "Value here...",
}

export type CustomInstance = FormElementInstance  & {
   extraAttributes: typeof extraAttributes;
}