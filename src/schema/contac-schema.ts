import { ZodType, z } from "zod";


export const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(50),
    lastname: z.string().min(1, "Last name is required").max(50),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Number is required").max(50),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });


export  type contactSchemaType= z.infer<typeof contactSchema>