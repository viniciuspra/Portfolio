const projectPage = {
  name: "projectPage",
  title: "Projects Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      description: "The title of the project page.",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
      description:
        "The description or additional information for the project page.",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "localeString",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "object",
      fields: [
        {
          name: "en",
          title: "en",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "pt",
          title: "pt",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
  ],
};

export { project, projectPage };
