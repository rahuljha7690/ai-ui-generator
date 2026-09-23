const mockGenerator = (prompt) => {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes("pricing")) {
    return {
      type: "container",
      children: [
        {
          type: "heading",
          props: {
            text: "Simple Pricing",
            size: "large",
          },
        },
        {
          type: "text",
          props: {
            text: "Choose the plan that works best for you.",
          },
        },
        {
          type: "grid",
          props: {
            columns: 3,
          },
          children: [
            {
              type: "card",
              props: {
                title: "Starter",
                value: "$9/month",
                description: "For individuals",
              },
            },
            {
              type: "card",
              props: {
                title: "Pro",
                value: "$29/month",
                description: "For growing teams",
              },
            },
            {
              type: "card",
              props: {
                title: "Enterprise",
                value: "$99/month",
                description: "For large organizations",
              },
            },
          ],
        },
      ],
    };
  }

  return {
    type: "container",
    children: [
      {
        type: "heading",
        props: {
          text: prompt,
          size: "large",
        },
      },
      {
        type: "text",
        props: {
          text: "Your AI-generated interface is ready.",
        },
      },
      {
        type: "grid",
        props: {
          columns: 3,
        },
        children: [
          {
            type: "card",
            props: {
              title: "Users",
              value: "12,450",
              description: "+12% this month",
            },
          },
          {
            type: "card",
            props: {
              title: "Revenue",
              value: "$48,290",
              description: "+18% this month",
            },
          },
          {
            type: "card",
            props: {
              title: "Orders",
              value: "1,284",
              description: "+9% this month",
            },
          },
        ],
      },
    ],
  };
};

export default mockGenerator;