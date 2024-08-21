import localData from "../data.json";
import addCart from "../../public/assets/images/icon-add-to-cart.svg";
import increment from "../../public/assets/images/icon-increment-quantity.svg";
import decrement from "../../public/assets/images/icon-decrement-quantity.svg";
import { type DataType, NewProductType } from "../type";

type ProductsContainerProps = {
  productsInCard: NewProductType[];
  setProductsInCard: React.Dispatch<React.SetStateAction<NewProductType[]>>;
};

export default function ProductsContainer({
  productsInCard,
  setProductsInCard,
}: ProductsContainerProps) {
  const handleSetCardData = (data: DataType) => {
    const newProduct = {
      ...data,
      count: 1,
    };
    setProductsInCard((prevState: NewProductType[]) => [
      ...prevState,
      newProduct,
    ]);
  };

  const productName = productsInCard?.map((item) => item.name);

  const handleCount = (productName: string, value: number) => {
    setProductsInCard((prevState) =>
      prevState
        .map((oneProduct) =>
          oneProduct.name === productName
            ? { ...oneProduct, count: oneProduct.count + value }
            : oneProduct
        )
        .filter((oneProduct) => oneProduct.count > 0)
    );
  };

  return (
    <main className="w-full max-w-4xl">
      <h1 className="w-full text-[2rem] pb-3 font-bold capitalize text-darkRedColor">
        desserts
      </h1>
      <ul className="flex flex-wrap gap-8">
        {localData.map((oneProduct, index) => {
          const { name, category, price } = oneProduct;
          const { desktop } = oneProduct.image;

          const totalPrice = price.toFixed(2);
          const isInCard = productName.includes(name);

          const actualProduct = productsInCard.find(
            (product) => product.name === name
          );

          return (
            <li className="w-full sm:max-w-[270px] flex flex-col gap-8" key={index}>
              <div className="relative flex justify-center items-end">
                <img src={desktop} alt="product" className="w-full rounded-2xl" />
                {isInCard ? (
                  <div className="absolute bottom-[-23px] flex justify-between items-center gap-2 w-full max-w-44  px-6 py-3 text-darkRedColor  bg-redFontColor  rounded-full transition-colors">
                    <button
                      onClick={() => handleCount(name, 1)}
                      className="flex justify-center items-center w-5 h-5 border-[1px] border-white rounded-full"
                    >
                      <img src={increment} alt="increment" />
                    </button>
                    <span className="text-white thisiscount">
                      {actualProduct?.count}
                    </span>
                    <button
                      onClick={() => handleCount(name, -1)}
                      className=" flex justify-center items-center w-5 h-5 border-[1px] border-white rounded-full"
                    >
                      <img
                        className="invert-[0] sepia-100 saturate-[0] hue-rotate-[21deg] brightness-[.97] contrast-[1.03]"
                        src={decrement}
                        alt="decrement"
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleSetCardData(oneProduct)}
                    className="absolute bottom-[-23px] flex items-center gap-2 w-full max-w-44 px-6 py-3 text-darkRedColor hover:text-redFontColor  bg-boxColor border-[1px] border-redFontColor rounded-full transition-colors	"
                  >
                    <span>
                      <img src={addCart} alt="add-card" />
                    </span>
                    <p className="font-medium">Add to Card</p>
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className=" text-penetratingWhite">{category}</h2>
                <h3 className="font-bold text-darkRedColor">{name}</h3>
                <h4 className="text-redFontColor font-medium">${totalPrice}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
