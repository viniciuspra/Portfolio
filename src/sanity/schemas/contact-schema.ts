const contact = {
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the contact page.",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description:
        "The subtitle or additional information for the contact page.",
    },
    {
      name: "form",
      title: "Form Fields",
      type: "object",
      description: "Fields for the contact form.",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
          description: "The name of the person contacting you.",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          description: "The email address of the person contacting you.",
        },
        {
          name: "message",
          title: "Message",
          type: "string",
          description: "The message or inquiry from the person contacting you.",
        },
        {
          name: "button",
          title: "Button",
          type: "string",
          description: "The text displayed on the submit button of the form.",
        },
      ],
    },
  ],
};

export default contact;
