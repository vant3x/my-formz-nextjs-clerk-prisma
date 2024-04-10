import { useForm } from "react-hook-form";
import { CustomInstance, extraAttributes } from "../Fields/TextFields";
import { FormElementInstance } from "../FormElements";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import useDesigner from "@/hooks/useDesigner";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const propertiesSchemas = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

type propertiesFormSchemaType = z.infer<typeof propertiesSchemas>;

export default function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const { updateElement } = useDesigner();

  const element = elementInstance as CustomInstance;

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchemas),
    mode: "onBlur",
    defaultValues: {
      label: element.extraAttributes.label,
      helperText: element.extraAttributes.helperText,
      placeHolder: element.extraAttributes.placeHolder,
      required: element.extraAttributes.required,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { label, helperText, placeHolder, required } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label,
        helperText,
        placeHolder,
        required,
      },
    });
  }

  return (
    <div>
      <Form {...form}>
        <form
          onBlur={form.handleSubmit(applyChanges)}
          className="space-y-3 "
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.currentTarget.blur();
                    }}
                  />
                </FormControl>
                <FormDescription>
                  The label of the field. <br /> It will be displayed above the
                  field
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="placeHolder"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PlaceHolder</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.currentTarget.blur();
                    }}
                  />
                </FormControl>
                <FormDescription>The placeHolder of the field.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="helperText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>HelperText</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") e.currentTarget.blur();
                    }}
                  />
                </FormControl>
                <FormDescription>
                  The HelperText of the field. <br /> It will be displayed below
                  the field
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="required"
            render={({ field }) => (
              <FormItem  className="flex items-center justify-between rounded-lg shadow-sm border p-3">
                <div className="space-y-0.5">

                <FormLabel>Required</FormLabel>

                <FormDescription>
                  The HelperText of the field. <br /> It will be displayed below
                  the field
                </FormDescription>
     
                </div>
                <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange}></Switch>
             </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
