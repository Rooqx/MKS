import { updatedBabyProduct } from "../Products/Products";
import { useNavigate } from "react-router-dom";
import fav from "../assets/fav.svg";
import selectedFav from "../assets/selectedFav.svg";

import { useRef } from "react";
export default function AllProducts({
  favorites,
  setFavorites,
  cart,
  setCart,
}) {
  const navigate = useNavigate();

  const addFavorite = (product) => {
    const existingItem = favorites.find((item) => item.id === product.id);
    if (!existingItem) {
      product.favorite = true;

      setFavorites([...favorites, product]);
    }
  };
  // console.log(updatedBabyProduct);

  const removeFavorite = (product) => {
    product.favorite = false;
    setFavorites((favorites) =>
      favorites.filter((item) => item.id !== product.id)
    );
  };
  const addCart = (product) => {
    // Check if product exists in cart using ID
    const existingItem = cart.find((item) => item.id === product.id);

    // Only add to cart if NOT already present
    if (!existingItem) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1, // Add quantity property if missing
        },
      ]);
    }
  };
  const msgRemoveFav = useRef(null);
  const msgFav = useRef(null);
  function addMsg(type) {
    if (type === "add") {
      msgFav.current.classList.remove("hide");

      setTimeout(() => {
        msgFav.current.classList.add("hide");
      }, 2000);
    } else {
      msgRemoveFav.current.classList.remove("hide");

      setTimeout(() => {
        msgRemoveFav.current.classList.add("hide");
      }, 2000);
    }
  }
  return (
    <main className="flex flex-wrap gap-[20px] py-3 px-6 absolute top-[110px]">
      <div
        className="bg-[black] p-2 rounded-[10px] text-white font-extrabold fixed z-[100] top-10 right-0 hide "
        ref={msgFav}
      >
        Item as been added to Favorite
      </div>
      <div
        className="bg-[black] p-2 rounded-[10px] text-white font-extrabold fixed z-[100] top-10 right-0 hide "
        ref={msgRemoveFav}
      >
        Item as been Removed from Favorite
      </div>
      <div className="flex flex-wrap w-full gap-10 justify-center items-center">
        {updatedBabyProduct.map((product, index) => (
          <div
            key={index}
            className="w-[150px] h-[200px] flex-shrink-0 mt-[10px] gap-[10px] px-0.5 bg-[#fdfafa] rounded-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.3)] justify-center items-center cursor-pointer"
          >
            <div
              className="w-full h-[60%] overflow-hidden rounded-t-[10px] bg-slate-500"
              onClick={() =>
                navigate(`/product/${product.id}`, {
                  state: {
                    product: product,
                  },
                })
              }
            >
              <img
                src={product.image}
                className="w-full h-full object-cover"
                alt={product.name}
              />
            </div>
            <div className="px-2 py-1">
              <p className="text-[0.75rem] font-extrabold overflow-hidden text-ellipsis whitespace-nowrap">
                {product.name}
              </p>
              <div className="flex justify-center items-center gap-2 mt-[10px]">
                {product.favorite ? (
                  <button
                    className="scale-80"
                    onClick={() => {
                      removeFavorite(product);
                      addMsg("remove");
                    }}
                  >
                    <img src={selectedFav} alt="" />
                  </button>
                ) : (
                  <button
                    className="scale-80"
                    onClick={() => {
                      addFavorite(product);
                      addMsg("add");
                    }}
                  >
                    <img src={fav} alt="" />
                  </button>
                )}
                <button
                  onClick={() => addCart(product)}
                  className="font-bold text-[white] text-[0.7rem] bg-[#59d3fc] py-2 px-4 w-[70%] rounded-md"
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
