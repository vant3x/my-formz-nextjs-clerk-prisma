"use client";

import { FormElementInstance } from "@/components/FormBuilderAndPreview/FormBuilder/FormElements";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type DesignerContextType = {
  elements: FormElementInstance[];
  addElements: (index: number, element: FormElementInstance) => void;
  removeElement: (id: string) => void;
  updateElement: (id: string, form: FormElementInstance) => void;
  selectedElement: FormElementInstance | null;
  setSelectedlectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
}

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementInstance[]>([]);
  const [selectedElement, setSelectedlectedElement] = useState<FormElementInstance | null>(null);

  const addElements = (index: number, element: FormElementInstance) => {
    setElements((prev) => {
      const newElements = [...prev]  ;
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements(prev => prev.filter(element => element.id !== id));
  }

  const updateElement = (id: string, element: FormElementInstance) => {
    setElements(prev => {
      const newElements = [...prev];
      const index = newElements.findIndex(el => el.id === id);
      newElements[index] = element;
      return newElements;
    })
  }

  return (
    <>
      <DesignerContext.Provider value={{ 
        elements, 
        selectedElement,
        addElements,
        removeElement,
        updateElement,
        setSelectedlectedElement
        }}>

        {children}
      </DesignerContext.Provider>
    </>
  );
}
