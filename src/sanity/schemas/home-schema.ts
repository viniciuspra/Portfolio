const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title for the hero section",
    },
    {
      name: "position",
      title: "Position",
      type: "array",
      of: [{ type: "block" }],
      description: "Your position",
    },
    {
      name: "specialization",
      title: "Specialization",
      type: "string",
      description: "Your area of specialization or expertise",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Button text",
    },
    {
      name: "slogan",
      title: "Slogan",
      type: "string",
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
    {
      name: "formTitle",
      title: "Form Title",
      type: "string",
    },
  ],
};

export default homePage;
