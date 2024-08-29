export type User = {
  idUser: string;
  username: string;
  email: string;
};

export type Users = User[];

export type Product = {
  id: string;
  title: string;
  img: string;
  desc: string;
  price: number;
  category?: string;
};

export type UserProducts = {
  [idUser: string]: Product[];
};

export type Categories = string[];
