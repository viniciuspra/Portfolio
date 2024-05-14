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
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "The Favorite description",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "An image representing the favorite",
    },
  ],
};

export default favorites;
