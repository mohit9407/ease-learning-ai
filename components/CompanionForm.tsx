"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select"
import { SelectValue } from "@radix-ui/react-select"
import { fi } from "zod/v4/locales"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  name: z.string().min(1, { message: 'Companion is required.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  topic: z.string().min(1, { message: 'Topic is required.' }),
  voice: z.string().min(1, { message: 'Voice is required.' }),
  style: z.string().min(1, { message: 'Style is required.' }),
  duration: z.coerce.number().min(1, { message: 'Duration is required.' }),
})

const CompanionForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      voice: '',
      style: '',
      topic: '',
      duration: 10,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('values????', values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select the subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(sub => (
                      <SelectItem key={`select-subject-${sub}`} value={sub} className="capitalize">
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. Derivates & Intergrals" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voices</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the voice" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'male'} className="capitalize">
                      Male
                    </SelectItem>
                    <SelectItem value={'female'} className="capitalize">
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="input">
                    <SelectValue placeholder="Select the style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'formal'} className="capitalize">
                      Formal
                    </SelectItem>
                    <SelectItem value={'casual'} className="capitalize">
                      Casual
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ETA session duration in minutes</FormLabel>
              <FormControl>
                <Input placeholder="15" type="number" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
      </form>
    </Form>
  )
}

export default CompanionForm