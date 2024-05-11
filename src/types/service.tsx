type Services = {
  _id: string;
  title: string;
  description: string;
  services: Service[];
  _createdAt: Date;
};

type Service = {
  _key: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

export type { Services, Service };
