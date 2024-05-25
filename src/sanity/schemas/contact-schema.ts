const contact = {
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
      description: "The title of the contact page.",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "localeString",
      description:
        "The subtitle or additional information for the contact page.",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "localeString",
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
          type: "localeString",
          description: "The name of the person contacting you.",
        },
        {
          name: "email",
          title: "Email",
          type: "localeString",
          description: "The email address of the person contacting you.",
        },
        {
          name: "message",
          title: "Message",
          type: "localeString",
          description: "The message or inquiry from the person contacting you.",
        },
        {
          name: "button",
          title: "Button",
          type: "localeString",
          description: "The text displayed on the submit button of the form.",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};

export default contact;
