const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "position",
      title: "Position",
      type: "object",
      fields: [
        {
          name: "en",
          title: "en",
          type: "array",
          of: [{ type: "block" }],
          description: "Your position in English",
        },
        {
          name: "pt",
          title: "pt",
          type: "array",
          of: [{ type: "block" }],
          description: "Sua posição em português",
        },
      ],
      description: "Your position",
    },
    {
      name: "specialization",
      title: "Specialization",
      type: "localeString",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "localeString",
    },
    {
      name: "slogan",
      title: "Slogan",
      type: "localeString",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "localeString",
            },
            {
              name: "description",
              title: "Description",
              type: "localeString",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "An image representing the service",
            },
          ],
          preview: {
            select: {
              title: "title.en",
              media: "image.asset",
            },
          },
        },
      ],
      description: "Additional services or expertise you offer",
    },
    {
      name: "formTitle",
      title: "Form Title",
      type: "localeString",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};

export default homePage;
