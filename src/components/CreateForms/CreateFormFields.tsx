import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormDescription,
  FormMessage,
  FormItem,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "../ui/use-toast";
import { formSchema, formSchemaType } from "@/schemas/form";
import { CreateForm } from "@/actions/form";


export default function CreateFormFields() {

  const [disabledButton, setDisabledButton] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const disabledButtonAct = () => {
    setTimeout(() => {
        setDisabledButton(false);
    }, 4000);
  }

  async function onSubmit(values: formSchemaType) {
    setDisabledButton(true);
    disabledButtonAct();
    try {
      if (!disabledButton) {
        const formId = await CreateForm(values);
        console.log(values);
        await CreateForm(values); 
        toast({
          title: "Success",
          description: "Form created successfully",
      });
      console.log("FORM ID", formId);
      }

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive"
    })
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <DialogFooter>
        <Button onClick={
            form.handleSubmit(onSubmit)
        } disabled={form.formState.isSubmitting} className="w-full mt-4">
            { !form.formState.isSubmitting && <span> Save</span>}
             {form.formState.isSubmitting && (
                <ImSpinner2 className="animate-span" />
            )} </Button>
      </DialogFooter>
    </>
  );
}
