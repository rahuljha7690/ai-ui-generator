const allowedTypes = [
  "heading",
  "text",
  "card",
  "button",
  "input",
  "grid",
  "container",
];

export function validateSchema(node) {
  if (!node || typeof node !== "object") {
    return {
      valid: false,
      error: "Schema must be an object.",
    };
  }

  if (!allowedTypes.includes(node.type)) {
    return {
      valid: false,
      error: `Unknown component type: ${node.type}`,
    };
  }

  if (node.children !== undefined && !Array.isArray(node.children)) {
    return {
      valid: false,
      error: `${node.type}.children must be an array.`,
    };
  }

  if (node.children) {
    for (const child of node.children) {
      const result = validateSchema(child);

      if (!result.valid) {
        return result;
      }
    }
  }

  return {
    valid: true,
    error: null,
  };
}