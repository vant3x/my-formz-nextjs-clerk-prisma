import { IconType } from "react-icons";

import { TextFieldFormElement } from "./Fields/TextFields";

export type ElementsType = "TextField";

export type FormElement = {
   
    construct: (id: string) => FormElementInstance;
    type: ElementsType;
    designerBtnElement:{    
        icon: React.ElementType | IconType,
        label: string;
    };  
    designerComponent:  React.FC<{
        elementInstance: FormElementInstance
    }>;
    formComponent: React.FC;   
    propertiesComponent:  React.FC<{
        elementInstance: FormElementInstance
    }>;     
}

export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
}

type FormsElementsType = {
    [key in ElementsType]: FormElement;
};

export const FormElements = {
    TextField: TextFieldFormElement
};