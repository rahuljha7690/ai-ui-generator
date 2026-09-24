export async function generateUI(prompt, currentSchema = null) {
  const response = await fetch("/api/generate-ui", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      currentSchema,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate UI");
  }

  const data = await response.json();

  return data.schema;
}