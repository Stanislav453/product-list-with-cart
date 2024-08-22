import React, { useEffect, useRef } from "react";
import { NewProductType } from "../type";
import iconOrder from "../../public/assets/images/icon-order-confirmed.svg";
import { CustomButton } from "./CustomButton";

type OrderProps = {
  setIsOrderActive: React.Dispatch<React.SetStateAction<boolean>>;
  isOrderActive: boolean;
  orderProducts: NewProductType[];
  setProductsInCard: React.Dispatch<React.SetStateAction<NewProductType[]>>;
};

export const Order = ({
  setIsOrderActive,
  isOrderActive,
  orderProducts,
  setProductsInCard,
}: OrderProps) => {
  let totalPrice = 0;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }

    if (isOrderActive) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  };

  const handleCLoseOrder = (e?: KeyboardEvent) => {
    if (e?.key === "Escape") {
      setIsOrderActive(false);
    }
  };

  const handleNewOrder = () => {
    setIsOrderActive(false);
    setProductsInCard([]);
  };

  useEffect(() => {
    toggleDialog();
    window.addEventListener("keydown", handleCLoseOrder);
  }, [isOrderActive]);
  return (
    <dialog
      ref={dialogRef}
      className="p-4 rounded-lg backdrop:bg-gray-400 backdrop:bg-opacity-50 open:animate-fade-in"
    >
      <img
        className="py-2"
        src={iconOrder}
        width="40"
        height="40"
        alt="check_product"
      />
      <h2 className="pb-2 text-3xl capitalize font-bold text-darkRedColor">
        order confirmed
      </h2>
      <p className="mb-3">We hope you enjoy your food!</p>
      <div className="bg-dispaearText rounded-lg p-3">
        <ul>
          {orderProducts.map((oneProduct, index) => {
            const { name, count, price } = oneProduct;
            const { thumbnail } = oneProduct.image;
            const totalProductPrice = count * price;
            totalPrice += totalProductPrice;
            return (
              <li
                key={index}
                className="flex w-full sm:w-80 py-4 border-b-[1px] border-backgroundPageColor"
              >
                <img
                  width="50"
                  height="50"
                  className="rounded-md"
                  src={thumbnail}
                  alt="one_product"
                />
                <p className="flex flex-col ml-4 justify-between pr-4">
                  <h4 className="text-sm font-bold capitalize text-darkRedColor">
                    {name}
                  </h4>
                  <span className="text-xs text-backgroundPageColor">
                    <strong className="text-redFontColor pr-2">{count}x</strong>
                    @${price.toFixed(2)}
                  </span>
                </p>
                <h2 className="text-sm self-center ml-auto">
                  ${totalProductPrice.toFixed(2)}
                </h2>
              </li>
            );
          })}
        </ul>
        <p className="flex justify-between py-4">
          <span className="text-sm capitalize">order total</span>
          <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <CustomButton onClick={handleNewOrder} className="capitalize mt-4">
        start new order
      </CustomButton>
    </dialog>
  );
};
