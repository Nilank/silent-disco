'use server';

import { ai } from '@/ai/genkit';
import { QuoteRequestSchema, QuoteRequestOutputSchema, type QuoteRequestInput, type QuoteRequestOutput } from '@/ai/schemas';


export async function sendQuoteRequest(input: QuoteRequestInput): Promise<QuoteRequestOutput> {
  return sendQuoteRequestFlow(input);
}

const sendQuoteRequestFlow = ai.defineFlow(
  {
    name: 'sendQuoteRequestFlow',
    inputSchema: QuoteRequestSchema,
    outputSchema: QuoteRequestOutputSchema,
  },
  async (input) => {
    console.log('Received quote request:', input);
    return {
      success: true,
      message: 'Your quote request has been received!',
    };
  }
);
