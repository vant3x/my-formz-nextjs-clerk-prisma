import { Button } from "../ui/button";
import { MdPreview } from "react-icons/md"; 

export default function PreviewDialogBtn() {
    return (
        <Button variant={"outline"} className="gap-2"><MdPreview className="h-6 w-6 mr-1"/>  Preview</Button>
    )
}