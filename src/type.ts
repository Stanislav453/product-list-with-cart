type ImagesType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type DataType = {
  image: ImagesType;
  name: string;
  category: string;
  price: number;
};

export type NewProductType = DataType & {
  count: number;
};
