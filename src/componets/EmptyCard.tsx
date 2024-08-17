import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";

export default function EmptyCard() {
  return (
    <>
      <img className="mx-auto" src={emptyCart} alt="empty card" />

      <p className="text-sm text-center font-medium text-secondTextColor">
        Your added items will appear here
      </p>
    </>
  );
}
