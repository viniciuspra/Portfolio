const favorites = {
  name: "favorites",
  title: "Favorites Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title for the favorite",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
      description: "The Favorite description",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "An image representing the favorite",
    },
    {
      name: "resourceType",
      title: "Resource Type",
      type: "string",
    },
  ],
};

export default favorites;
