"use client";

import { FormElementInstance } from "@/components/FormBuilderAndPreview/FormBuilder/FormElements";
import { ReactNode, createContext, useState } from "react";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElements: (index: number, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);

  const addElements = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev]  ;
      newElements.splice(index, 0, element);
      return newElements;
    });
  };
  return (
    <>
      <DesignerContext.Provider value={{ 
        elements, 
        addElements
        }}>

        {children}
      </DesignerContext.Provider>
    </>
  );
}
