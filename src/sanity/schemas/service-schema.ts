const service = {
  name: "service",
  title: "Service Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title for the service section",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
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
              type: "string",
              description: "The title of the service",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              description: "A brief description of the service",
            },
            {
              name: "price",
              title: "Price",
              type: "string",
              description: "The price of the service",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              description: "An image representing the service",
            },
          ],
        },
      ],
      description: "Additional services or expertise you offer",
    },
  ],
};

export default service;
