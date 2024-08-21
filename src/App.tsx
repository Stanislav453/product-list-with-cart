import { useState } from "react";
import ProductsContainer from "./componets/ProductsContainer";
import CardContainer from "./componets/CardContainer";
import { NewProductType } from "./type";
import { Order } from "./componets/Order";

export default function App() {
  const [productsInCard, setProductsInCard] = useState<NewProductType[]>([]);
  const [isOrderActive, setIsOrderActive] = useState(false);

  return (
    <section className="flex flex-col sm:flex-row justify-center gap-4 p-4 sm:p-20">
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
