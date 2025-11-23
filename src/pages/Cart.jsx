import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-[#f3f3f3] pt-10">
      {cart.length > 0 ? (
        <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-start justify-between gap-10">

          {/* LEFT = Cart Items */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* RIGHT = Summary */}
          <div className="w-full md:w-2/5 bg-white rounded-xl shadow-md px-8 py-6">
            <p className="text-xs font-semibold text-green-600 tracking-widest">
              YOUR CART
            </p>
            <h2 className="text-3xl font-extrabold text-green-700 mb-6">
              SUMMARY
            </h2>

            <p className="text-sm font-medium text-gray-700 mb-3">
              Total Items: <span className="font-bold">{cart.length}</span>
            </p>

            <p className="text-base font-semibold text-gray-800 mb-8">
              Total Amount :{" "}
              <span className="font-bold">
                ${totalAmount.toFixed(2)}
              </span>
            </p>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        // EMPTY CART
        <div className="min-h-[70vh] flex flex-col justify-center items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-700">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
