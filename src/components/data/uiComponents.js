export const availableComponents = {
  heading: {
    description: "A heading for a section or page",
    props: {
      text: "string",
      size: "small | medium | large",
    },
  },

  text: {
    description: "A paragraph or descriptive text",
    props: {
      text: "string",
    },
  },

  card: {
    description: "A card displaying information",
    props: {
      title: "string",
      value: "string",
      description: "string",
    },
  },

  button: {
    description: "A clickable button",
    props: {
      text: "string",
      variant: "primary | secondary",
    },
  },

  input: {
    description: "A text input field",
    props: {
      placeholder: "string",
    },
  },

  grid: {
    description: "A responsive grid",
    props: {
      columns: "1 | 2 | 3 | 4",
    },
  },

  container: {
    description: "A layout container",
    props: {},
  },
};