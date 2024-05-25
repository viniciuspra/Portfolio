const service = {
  name: "service",
  title: "Service Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      description: "The main title for the service section",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
      description: "The main description for the service section",
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
              description: "The title of the service",
            },
            {
              name: "description",
              title: "Description",
              type: "localeString",
              description: "A brief description of the service",
            },
            {
              name: "price",
              title: "Price",
              type: "localeString",
              description: "The price of the service",
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
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};

export default service;
