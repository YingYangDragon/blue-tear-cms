import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

type PromptInputs = {
  excerptText: string;
};

export async function runAIPrompt(
  promptTemplate: string,
  inputs: PromptInputs
): Promise<string> {
  if (!promptTemplate.includes('{{excerptText}}')) {
    throw new Error('Prompt template must include {{excerptText}} placeholder');
  }

  const prompt = promptTemplate.replace(
    '{{excerptText}}',
    inputs.excerptText
  );

  const result = await generateText({
    model: openai('gpt-4o-mini'),
    prompt,
  });

  return result.text;
}
