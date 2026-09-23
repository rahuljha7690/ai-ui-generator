const sampleSchema = {
  type: "container",

  children: [
    {
      type: "heading",
      props: {
        text: "Analytics Dashboard",
        size: "large",
      },
    },

    {
      type: "text",
      props: {
        text: "Welcome back! Here's what's happening with your business.",
      },
    },

    {
      type: "grid",
      props: {
        columns: 4,
      },

      children: [
        {
          type: "card",
          props: {
            title: "Total Revenue",
            value: "$24,780",
            description: "+12.5% from last month",
          },
        },

        {
          type: "card",
          props: {
            title: "Total Orders",
            value: "1,248",
            description: "+8.2% from last month",
          },
        },

        {
          type: "card",
          props: {
            title: "New Customers",
            value: "458",
            description: "+14.6% from last month",
          },
        },

        {
          type: "card",
          props: {
            title: "Conversion Rate",
            value: "3.24%",
            description: "+2.1% from last month",
          },
        },
      ],
    },
  ],
};

export default sampleSchema;