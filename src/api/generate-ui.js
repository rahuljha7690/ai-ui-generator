import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are an expert UI schema generator.

Your job is to convert a user's natural language UI request into a JSON UI schema.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Never return JSX.
3. Never return HTML.
4. Never return Markdown.
5. Use ONLY these component types:

- container
- heading
- text
- card
- button
- input
- grid

6. Every component must follow this structure:

{
  "type": "componentType",
  "props": {},
  "children": []
}

7. "children" is optional for leaf components.
8. container and grid can contain children.
9. Do not invent component types.
10. Keep the generated UI practical and visually useful.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { prompt, currentSchema } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6",
      instructions: systemPrompt,
      input: `
User request:

${prompt}

Current UI schema:

${JSON.stringify(currentSchema || null)}
      `,
    });

    const output = response.output_text;

    const schema = JSON.parse(output);

    return res.status(200).json({
      schema,
    });
  } catch (error) {
    console.error("AI generation error:", error);

    return res.status(500).json({
      error: "Failed to generate UI",
    });
  }
}