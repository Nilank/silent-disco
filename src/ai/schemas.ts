import { z } from 'zod';

export const QuoteRequestSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).describe('The full name of the person requesting the quote.'),
  email: z.string().email().describe('The email address of the person.'),
  eventDate: z.string({
    required_error: "An event date is required.",
  }).describe('The date of the event in YYYY-MM-DD format.'),
  headphoneCount: z.coerce.number().min(10, { message: 'Must be at least 10 headphones.' }).describe('The number of headphones required.'),
  message: z.string().optional().describe('Any additional details about the event.'),
});

export type QuoteRequestInput = z.infer<typeof QuoteRequestSchema>;

export const QuoteRequestOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type QuoteRequestOutput = z.infer<typeof QuoteRequestOutputSchema>;
