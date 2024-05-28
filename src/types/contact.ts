export type Contact = {
  _id: string;
  title: string;
  subtitle: string;
  phone: string;
  form: {
    name: string;
    email: string;
    message: string;
    button: string;
  };
  _createdAt: Date;
};
