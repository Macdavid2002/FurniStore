import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { wishlistActions } from "../../redux/slices/wishlist-slice";
export const WishlistPreview = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  const iswishlistOpen = useSelector(
    (state) => state.wishlist.showWishlistPreview
  );
  const dispatch = useDispatch();
  const closeWishlistHandler = () => {
    dispatch(wishlistActions.hideWishlist());
  };
  return (
    <div
      className={`fixed top-0 right-0 w-[30%] h-full z-50 bg-white shadow-md transition-opacity duration-300 ease-in-out ${
        iswishlistOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="flex justify-between items-center p-4">
        <span>
          <h1 className="text-md font-semibold text-gray-500 py-3">
            Shopping wishlist
          </h1>
          <Link
            to="/wishlist"
            className="text-sm text-gray-400 underline"
            onClick={closeWishlistHandler}
          >
            View Full wishlist
          </Link>
        </span>
        <XMarkIcon className="w-8" onClick={closeWishlistHandler} />
      </span>
      <div className="overflow-y-auto h-[calc(90vh-200px)] px-4">
        {wishlistItems.map((wishlistItem) => (
          <div className="flex items-center p-4 justify-between">
            <span className="flex items-center gap-8">
              <img src={wishlistItem.imgUrl} className="h-24" alt="" />
              <span>
                <h2>{wishlistItem.name}</h2>
                <h2 className="py-2 font-semibold text-sm">
                  Quantity: {wishlistItem.quantity}{" "}
                </h2>
              </span>
            </span>
            <h2>${wishlistItem.price} </h2>
          </div>
        ))}
      </div>
      <span className="flex px-8 py-4 justify-between">
        <h1 className="font-bold">Subtotal:</h1>
      </span>
      <button className="p-4 w-[90%] block font-bold text-md text-center mx-auto bg-gray-400 rounded-full">
        Checkout
      </button>
    </div>
  );
};
