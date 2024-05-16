const page = {
  name: "page",
  title: "pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "groups",
      title: "Groups",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "groupName",
              title: "Group Name",
              type: "string",
              description: "Name of the group to which this page belongs",
            },
          ],
        },
      ],
    },
  ],
};

export default page;
