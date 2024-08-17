// import EmptyCard from "./EmptyCard";
import removeIcon from "../../public/assets/images/icon-remove-item.svg"
import { NewProductType } from "../type";

type CardContainerProps = {
  products: NewProductType[];
};

export default function CardContainer({ products }: CardContainerProps) {
  return (
    <aside className="self-start w-full max-w-80 h-auto p-4 bg-boxColor rounded-2xl ">
      <h2 className=" text-2xl font-bold text-redFontColor ">Your cart (0)</h2>
      <div className="p-2">
        {/* <EmptyCard /> */}
        <ul>
          {products?.map((oneProduct: NewProductType, index: number) => {
            const { name, price, count } = oneProduct;
            const totalPrice = price * count;
            
            return (
              <li key={index}>
                <h2>{name}</h2>
                <div>
                  <p>
                    <span>{count}</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </p>
                  <button>
                    <img src={removeIcon} alt="remove_item" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
