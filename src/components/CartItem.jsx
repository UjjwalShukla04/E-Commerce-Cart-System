import { useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  const toggleSaved = () => {
    setIsSaved((prev) => !prev);
    toast.success(isSaved ? "Removed from saved" : "Saved for later");
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 px-8 py-6 flex items-center gap-10">

      {/* Product Image - bigger */}
      <div className="w-44 h-44 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {item.title}
        </h1>

        <p className="text-base text-gray-600 mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          {/* Price */}
          <p className="text-2xl font-extrabold text-green-600">
            ${item.price}
          </p>

          {/* Actions: Save + Delete */}
          <div className="flex items-center gap-3">
            {/* Save / Favourite */}
            <button
              onClick={toggleSaved}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
            >
              {isSaved ? (
                <AiFillHeart className="text-xl text-red-500" />
              ) : (
                <AiOutlineHeart className="text-xl text-gray-500" />
              )}
            </button>

            {/* Delete */}
            <button
              onClick={removeFromCart}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-red-200 bg-red-50 hover:bg-red-100 transition"
            >
              <FcDeleteDatabase className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
