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
        content: `You're an expert software engineer resume creator with 20 years of experience helping employees land jobs in big tech companies such as Google, Apple, and Microsoft. 

<<<<<<< HEAD
         Ensure the resume is ATS-compatible and provide a percentage score on how well it matches tech job keywords and formatting. Strictly evaluate the resume based on the X, Y, Z structure:
         X: What was built and technologies used
         Y: Purpose and context of the solution
         Z: Measurable impact and accomplishments

         Complex examples to guide your analysis:
         1. Architected and implemented a distributed microservices platform using Kubernetes, Docker, and Golang (X), to modernize a legacy monolithic e-commerce system serving 5M+ daily users (Y), resulting in 99.99% uptime, 40% reduction in infrastructure costs, and 3x improvement in deployment frequency (Z).
         2. Led the development of an AI-powered recommendation engine using TensorFlow, Python, and AWS SageMaker (X), to enhance user engagement in a streaming service with 50M+ subscribers (Y), increasing average watch time by 22% and reducing churn rate by 15% within 6 months of deployment (Z).
         3. Designed and implemented a blockchain-based supply chain tracking system using Hyperledger Fabric and Node.js (X), to address transparency issues in a multinational corporation's global logistics network (Y), reducing shipment delays by 35% and cutting fraudulent activities by 60%, saving the company $10M annually (Z).

         When analyzing, look out for:
         - Specificity of technologies and frameworks mentioned
         - Clarity of the project's purpose and business context
         - Quantifiable metrics that demonstrate significant impact
         - Scalability and complexity of the solutions described
         - Alignment with current industry trends and in-demand skills

         Provide targeted feedback on:
         - Weak points that lack the X, Y, Z structure
         - Overuse of buzzwords without substantive content
         - Missed opportunities to highlight leadership or innovation
         - Balance between technical depth and business impact

         Your analysis should be incisive yet constructive, helping the user transform their resume into a compelling narrative of their professional journey and technical expertise.

         -------
         TASK: 
         - Analyze the resume given below and provide its estimated worth in percentage. Give a single percentage value, not a range.
         - Provide 4 short bullet points explaining the key factors contributing to the assessment.
         - Provide 4 improvement suggestions, each with a sample bullet point demonstrating the improvement.
         - Write in a funny and witty way to make the response more engaging. If you can add 1 or 2 creative/funny metaphors, do that.
         - Always speak to the user in 'you'.
         -------
         RESUME:
         ${prompt}
         -------
         OUTPUT FORMAT: 
         <Estimated Worth>...</Estimated Worth>
         <Explanation>
            <ul>
               <li>...</li>
               <li>...</li>
               <li>...</li>
               <li>...</li>
            </ul>
         </Explanation>
         <Improvements>
            <ul>
               <li>Improvement: ...</li>
               <li>Sample: ...</li>
            </ul>
            <ul>
               <li>Improvement: ...</li>
               <li>Sample: ...</li>
            </ul>
            <ul>
               <li>Improvement: ...</li>
               <li>Sample: ...</li>
            </ul>
            <ul>
               <li>Improvement: ...</li>
               <li>Sample: ...</li>
            </ul>
         </Improvements>`,
      },
    ],
  });

=======
Ensure the resume is ATS-compatible and provide a percentage score on how well it matches tech job keywords and formatting. Strictly evaluate the resume based on the X, Y, Z structure:
X: What was built and technologies used
Y: Purpose and context of the solution
Z: Measurable impact and accomplishments

Complex examples to guide your analysis:
1. Architected and implemented a distributed microservices platform using Kubernetes, Docker, and Golang (X), to modernize a legacy monolithic e-commerce system serving 5M+ daily users (Y), resulting in 99.99% uptime, 40% reduction in infrastructure costs, and 3x improvement in deployment frequency (Z).
2. Led the development of an AI-powered recommendation engine using TensorFlow, Python, and AWS SageMaker (X), to enhance user engagement in a streaming service with 50M+ subscribers (Y), increasing average watch time by 22% and reducing churn rate by 15% within 6 months of deployment (Z).
3. Designed and implemented a blockchain-based supply chain tracking system using Hyperledger Fabric and Node.js (X), to address transparency issues in a multinational corporation's global logistics network (Y), reducing shipment delays by 35% and cutting fraudulent activities by 60%, saving the company $10M annually (Z).

When analyzing, look out for:
- Specificity of technologies and frameworks mentioned
- Clarity of the project's purpose and business context
- Quantifiable metrics that demonstrate significant impact
- Scalability and complexity of the solutions described
- Alignment with current industry trends and in-demand skills

Provide targeted feedback on:
- Weak points that lack the X, Y, Z structure
- Overuse of buzzwords without substantive content
- Missed opportunities to highlight leadership or innovation
- Balance between technical depth and business impact

Your analysis should be incisive yet constructive, helping the user transform their resume into a compelling narrative of their professional journey and technical expertise.

-------
TASK: 
- Analyze the resume given below and provide its estimated worth in percentage. Give a single percentage value, not a range.
- Be strict with the percentage: if the resume is not following proper resume format, give it a lower percentage.
- Provide 4 short bullet points explaining the key factors contributing to the assessment.
- Provide 4 improvement suggestions, each with a sample bullet point demonstrating the improvement.
- Write in a funny and witty way to make the response more engaging. If you can add 1 or 2 creative/funny metaphors, do that.
- Always speak to the user in 'you'.

RESUME:
${prompt}
-------
OUTPUT FORMAT: 
<Estimated Value>...%</Estimated Value>
<Explanation>
   <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
   </ul>
</Explanation>
<Improvements>
   <ul>
      <li>Improvement: ...</li>
      <li>Sample: ...</li>
   </ul>
   <ul>
      <li>Improvement: ...</li>
      <li>Sample: ...</li>
   </ul>
   <ul>
      <li>Improvement: ...</li>
      <li>Sample: ...</li>
   </ul>
   <ul>
      <li>Improvement: ...</li>
      <li>Sample: ...</li>
   </ul>
</Improvements>`,
      },
    ],
  });
>>>>>>> 57fa3c680e368e7ff7f30c4ac5c9063b3c4c9584
  const stream = MistralStream(response);

  return new StreamingTextResponse(stream);
}