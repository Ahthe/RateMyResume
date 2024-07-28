import MistralClient from '@mistralai/mistralai';
import { MistralStream, StreamingTextResponse } from 'ai';
 
const mistral = new MistralClient(process.env.MISTRAL_API_KEY || '');
 
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { prompt } = await req.json();
 
  const response = mistral.chatStream({
    model: "mistral-large-latest",
    messages: [
      {
        role: "user",
        content: `You're an expert sofware engineer resume creator with 20 years of experience helping software engineers land jobs in big tech companies like Google, Apple, etc. Make sure the resume follows this XYZ principle that is compatible with the latest Applicant Tracking System (ATS). The XYZ principle I want you to follow is:
         x what you built and what technologies you used
         y what it accomplished
         z measurements (percentage improvement, number of users, etc.)
         e.g. Built a telehealth platform using React, Node.js, and Azure (X Point) enabling 800+ patient self-service features such as appointment booking, and symptom tracking, reducing time doctor spends on each patient by 30%
         for all these points and don't just list responsibilities without metrics. Tell me which specific lines I should change because they don't follow xyz principle
         You are tasked to give the user a reality check on their resume. 
-------
TASK: 
- Analyze the resume given below and provide its estimated worth in percentage. Give a single percentage value, not a range.
- Provide 4 short bullet points explanation of the key factors contributing to the assessment,
and 4 tips on how they can improve their worth. Each bullet point should be less than 80 characters.
- Write in a funny and witty way to make the response more engaging. If you can add 1 or 2 creative/funny metaphors, do that.
- Always speak to the user in 'you'.
-------
RESUME:
${prompt}
-------
OUTPUT FORMAT: 
<Estimated Worth>$...</Estimated Worth>
<Explanation>
   <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      ...
   </ul>
</Explanation>
<Improvements>
   <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      ...
   </ul>
</Improvements>`,
      },
    ],
  });
 
  const stream = MistralStream(response);
 
  return new StreamingTextResponse(stream);
}