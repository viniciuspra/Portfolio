const StackPage = {
  name: "stackPage",
  title: "Stack Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      description: "The title of the Stack page.",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "localeString",
      description: "The subtitle or additional information for the Stack page.",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              title: "Category",
              type: "object",
              fields: [
                {
                  name: "en",
                  title: "en",
                  type: "string",
                  description: "Category in English",
                },
                {
                  name: "pt",
                  title: "pt",
                  type: "string",
                  description: "Category in Portuguese",
                },
              ],
              description:
                "The category of technologies (e.g., frontend, backend).",
            },
            {
              name: "technologies",
              title: "Technologies",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                      description: "The title of the technology.",
                    },
                    {
                      name: "image",
                      title: "Image URL",
                      type: "url",
                      description:
                        "URL of the image representing the technology.",
                    },
                  ],
                },
              ],
              description: "Technologies within this category.",
            },
          ],
          preview: {
            select: {
              category: "category.en",
            },
          },
        },
      ],
      description: "Technologies used in your projects, categorized by type.",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};

export default StackPage;
