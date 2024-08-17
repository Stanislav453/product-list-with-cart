import { useState } from "react";
import  ProductsContainer  from "./componets/ProductsContainer";
import CardContainer from "./componets/CardContainer";
import { NewProductType } from "./type";

export default function App() {
  const [productsInCard, setProductsInCard] = useState<NewProductType[]>([]);
  console.log(productsInCard);
  
  

  return (
    <main className="flex gap-5 p-20">
      <ProductsContainer
        productsInCard={productsInCard}
        setProductsInCard={setProductsInCard}
      />
      <CardContainer products={productsInCard} />
    </main>
  );
}
