import removeIcon from "../../public/assets/images/icon-remove-item.svg";
import { type NewProductType } from "../type";
import EmptyCard from "./EmptyCard";
import carbonNeutralIcon from "../../public/assets/images/icon-carbon-neutral.svg";
import { CustomButton } from "./CustomButton";

type CardContainerProps = {
  setIsOrderActive: React.Dispatch<React.SetStateAction<boolean>>;
  products: NewProductType[];
  setProductsInCard: React.Dispatch<React.SetStateAction<NewProductType[]>>;
};

export default function CardContainer({
  setIsOrderActive,
  products,
  setProductsInCard,
}: CardContainerProps) {
  let totalPrice = 0;
  let totalCount = 0;

  const removeCardListItem = (name: string) => {
    setProductsInCard((prevState) => {
      return prevState.filter((oneProduct) => oneProduct.name !== name);
    });
  };

  products.forEach((oneProduct) => {
    totalCount += oneProduct.count;
  });

  return (
    <aside className="sticky top-[20px] self-start w-full max-w-80 h-auto p-4 bg-boxColor rounded-2xl ">
      <h2 className=" text-2xl font-bold text-redFontColor ">
        Your cart ({totalCount})
      </h2>
      <div className="p-2">
        {products.length === 0 ? (
          <EmptyCard />
        ) : (
          <>
            <ul className="flex flex-col gap-4 max-h-80 overflow-y-auto">
              {products?.map((oneProduct: NewProductType, index: number) => {
                const { name, price, count } = oneProduct;
                const productTotalPrice = price * count;
                totalPrice += productTotalPrice;

                return (
                  <li className="border-b-[1px] pb-4 px-1" key={index}>
                    <h2 className="text-black font-medium">{name}</h2>
                    <div className="flex justify-between">
                      <p>
                        <span className="text-sm text-redFontColor">
                          {count}x
                        </span>
                        <span className="text-sm pl-3 text-backgroundPageColor">
                          <span className="text-[10px]">@</span>$
                          {price.toFixed(2)}
                        </span>
                        <span className="text-sm pl-2 text-penetratingWhite">
                          ${productTotalPrice.toFixed(2)}
                        </span>
                      </p>
                      <button onClick={() => removeCardListItem(name)}>
                        <img
                          className="border-2 p-1 rounded-full"
                          src={removeIcon}
                          alt="remove_item"
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="flex justify-between py-4 ">
              <span>Order total</span>
              <span className="font-bold text-xl">
                ${totalPrice.toFixed(2)}
              </span>
            </p>
            <div className="flex gap-2 justify-center p-3 text-sm text-center bg-dispaearText rounded-md">
              <img src={carbonNeutralIcon} alt="carbon_neutral" />
              <p>
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <CustomButton
              onClick={() => setIsOrderActive(true)}
              className="mt-4"
            >
              {" "}
              Confirm order{" "}
            </CustomButton>
          </>
        )}
      </div>
    </aside>
  );
}
