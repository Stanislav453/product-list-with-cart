import { useState, useRef } from "react";
import ProductsContainer from "./componets/ProductsContainer";
import CardContainer from "./componets/CardContainer";
import { NewProductType } from "./type";
import { Order } from "./componets/Order";

export default function App() {
  const [productsInCard, setProductsInCard] = useState<NewProductType[]>([]);
  const [isOrderActive, setIsOrderActive] = useState(false);
  console.log(isOrderActive);

  return (
    <section className="flex flex-wrap justify-center gap-4 p-20">
      <ProductsContainer
        productsInCard={productsInCard}
        setProductsInCard={setProductsInCard}
      />

      <CardContainer
        setIsOrderActive={setIsOrderActive}
        products={productsInCard}
        setProductsInCard={setProductsInCard}
      />
      <Order
        setIsOrderActive={setIsOrderActive}
        isOrderActive={isOrderActive}
        orderProducts={productsInCard}
        setProductsInCard={setProductsInCard}
      />
    </section>
  );
}
