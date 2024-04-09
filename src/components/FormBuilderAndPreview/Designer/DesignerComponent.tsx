import { Label } from "@/components/ui/label";
import { CustomInstance } from "../FormBuilder/Fields/TextFields"
import { FormElementInstance } from "../FormBuilder/FormElements"
import { Input } from "@/components/ui/input";

export default function DesignerComponent({
    elementInstance
} : {
    elementInstance: FormElementInstance
}) {

    const element = elementInstance as CustomInstance;

    const { label, placeHolder, required, helperText } = element.extraAttributes;

    return (
        <> 
            <div className="text-white flex flex-col gap-2 w-full">
                <Label>
                {label}    
                {required && "*"}    
                </Label>
                <Input readOnly disabled placeholder={placeHolder} />
                {helperText && (
                    <p className="text-muted-foreground text-[0.8rem]"> {helperText} </p>
                )}
                </div> 
        </>
    )
}