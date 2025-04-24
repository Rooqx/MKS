import call from "../assets/call.svg";

import diapers from "../assets/categories/dipers.png";
import skinCare from "../assets/categories/skinCare.png";
import feeding from "../assets/categories/feeding.png";
import boyCloth from "../assets/categories/boyCloth.png";
import babyGear from "../assets/categories/babygear.png";
import girlCloth from "../assets/categories/girlCloth.png";
import { useNavigate } from "react-router-dom";
import { updatedBabyProduct } from "../Products/Products";
import fav from "../assets/fav.svg";
import selectedFav from "../assets/selectedFav.svg";
import preg from "../assets/preg.jpeg";
import { phoneNumber } from "../utils";
import { useRef } from "react";
export default function Home({ cart, setCart, favorites, setFavorites }) {
  const navigate = useNavigate();

  const trending = updatedBabyProduct.filter((product) => {
    const category = product.category.toLowerCase();
    return (
      category === "boyscloth" ||
      category === "girlscloth" ||
      category === "feeding"
    );
  });
  const skinCareProduct = updatedBabyProduct.filter((product) => {
    return product.category.toLowerCase() === "skincare";
  });

  const addFavorite = (product) => {
    const existingItem = favorites.find((item) => item.id === product.id);
    if (!existingItem) {
      product.favorite = true;

      setFavorites([...favorites, product]);
    }
  };
  const removeFavorite = (product) => {
    product.favorite = false;
    setFavorites((favorites) =>
      favorites.filter((item) => item.id !== product.id)
    );
  };
  const addCart = (product) => {
    // Check if product50 exists in cart using ID
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
    <main className="flex flex-wrap gap-[20px] py-3 px-6 absolute top-[140px]">
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
      <div className="w-full bg-[#59d3fc] border-2 border-solid border-[#0d52fe] py-2 px-4 rounded-[10px] flex justify-center items-center">
        <a
          href={`tel:${phoneNumber}`}
          className="w-full flex justify-center items-center gap-5"
        >
          <img src={call} alt="" /> <p>For Inquiries Call 08030661976</p>
        </a>
      </div>
      <div
        className="w-full h-[150px] rounded-[10px] bg-slate-400 border border-solid overflow-hidden relative"
        onClick={() => navigate("/hospital-list-items")}
      >
        <img
          src={preg}
          alt=""
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <p className="absolute z-10 text-white text-center w-full px-4 top-1/2 -translate-y-1/2 text-lg font-semibold bg-black bg-opacity-40">
          Click here to view the hospital checklist for pregnant women.
        </p>
      </div>

      <div className="w-full h-150px flex flex-wrap gap-[5px]">
        <div className="w-full flex justify-between px-2">
          <p>Categories</p>
          <p
            className="cursor-pointer text-[#444444] active:bg-[rgba(0,0,0,0.2)] p-1 rounded"
            onClick={() => navigate("/categories")}
          >
            View all
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-2">
          <div
            className="w-[30%] md:w-[30%] rounded-[10px] h-[75px] overflow-hidden bg-slate-300 flex justify-center items-center relative "
            onClick={() => navigate("/diapers")}
          >
            <img src={diapers} className="z-10 object-cover " alt="" />
            <div className="absolute top-0 left-0 w-full z-10 h-full flex justify-center items-center text-[#fffcfc] font-extrabold bg-[rgba(0,0,0,0.1)]">
              Diaper
            </div>
          </div>
          <div
            className="w-[30%] relative overflow-hidden md:w-[30%] rounded-[10px] h-[75px] bg-slate-300 flex justify-center items-center"
            onClick={() => navigate("/skincare")}
          >
            <img
              src={skinCare}
              className="z-10 w-[150px] h-[100%] object-cover "
              alt=""
            />
            <div className="absolute top-0 left-0 w-full z-10 h-full flex justify-center items-center text-[#fffcfc] font-extrabold bg-[rgba(0,0,0,0.1)]">
              Skin Care
            </div>
          </div>
          <div
            className="w-[30%] md:w-[30%] h-[75px] rounded-[10px] bg-slate-300 flex justify-center items-center relative overflow-hidden"
            onClick={() => navigate("/boys-cloth")}
          >
            <img src={boyCloth} className="z-10 object-cover " alt="" />
            <div className="absolute top-0 left-0 w-full z-10 h-full flex justify-center items-center text-[#fffcfc] font-extrabold bg-[rgba(0,0,0,0.1)]">
              Boy Cloth
            </div>
          </div>
          <div
            className="w-[30%] md:w-[30%] h-[75px] rounded-[10px] bg-slate-300 flex justify-center items-center relative overflow-hidden"
            onClick={() => navigate("/girls-cloth")}
          >
            <img src={girlCloth} className="z-10 object-cover " alt="" />
            <div className="absolute top-0 left-0 w-full z-10 h-full flex justify-center items-center text-[#fffcfc] font-extrabold bg-[rgba(0,0,0,0.1)]">
              Girl Cloth
            </div>
          </div>
          <div
            className="w-[30%] md:w-[30%] rounded-[10px] h-[75px] bg-slate-300 flex justify-center items-center relative overflow-hidden"
            onClick={() => navigate("/baby-gear")}
          >
            <img src={babyGear} className="z-10 object-cover " alt="" />
            <div className="absolute top-0 left-0 w-full z-10 h-full flex justify-center items-center text-[#fffcfc] font-extrabold bg-[rgba(0,0,0,0.1)]">
              Baby Gear
            </div>
          </div>
          <div
            className="w-[30%] md:w-[30%] rounded-[10px] h-[75px] bg-slate-300 flex justify-center items-center relative overflow-hidden font-extrabold"
            onClick={() => navigate("/feeding")}
          >
            <img src={feeding} className="z-10 object-cover " alt="" />
            <div className="absolute top-0 left-0 w-full z-10 h-full flex justify-center items-center text-[#fffcfc] font-extrabold bg-[rgba(0,0,0,0.1)]">
              Feeding
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[blue] w-full py-2 px-4 font-extrabold text-white rounded-md text-center"
        onClick={() => navigate("/all-products")}
      >
        Click Here To View all Available Products
      </div>
      <section className="w-full relative overflow-hidden">
        <p className="font-extrabold italic bg-[#59d3fc] p-1">
          Trending Products
        </p>
        <div className="w-[88vw] flex overflow-x-auto gap-4 pb-2 scroll-container mt-3">
          {trending.map((trend, index) => (
            <div
              key={index}
              className="w-[120px] h-[170px] flex-shrink-0 mt-[10px] px-0.5 bg-[#fdfafa] rounded-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <div
                className="w-full h-[60%] overflow-hidden rounded-t-[10px] bg-slate-500 "
                onClick={() =>
                  navigate(`/product/${trend.id}`, {
                    state: {
                      product: trend,
                    },
                  })
                }
              >
                <img
                  src={trend.image}
                  className="w-full h-full object-cover"
                  alt={trend.name}
                />
              </div>
              <div className="px-2 py-1">
                <p className="text-[0.75rem] font-extrabold overflow-hidden text-ellipsis whitespace-nowrap">
                  {trend.name}
                </p>
                <div className="flex gap-2 justify-center items-center mt-[10px]">
                  {trend.favorite ? (
                    <button
                      className="scale-80"
                      onClick={() => {
                        removeFavorite(trend);
                        addMsg("remove");
                      }}
                    >
                      <img src={selectedFav} alt="" />
                    </button>
                  ) : (
                    <button
                      className="scale-80"
                      onClick={() => {
                        addFavorite(trend);
                        addMsg("add");
                      }}
                    >
                      <img src={fav} alt="" />
                    </button>
                  )}
                  <button
                    onClick={() => addCart(trend)}
                    className="font-bold text-[white] text-[0.5rem] bg-[#59d3fc] py-2 px-4 w-[90%] rounded-md "
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full relative overflow-hidden">
        <p className="font-extrabold italic bg-[#59d3fc] p-1">Skincare</p>
        <div className="w-[88vw] flex overflow-x-auto gap-4 pb-2 scroll-container mt-3">
          {skinCareProduct.map((product, index) => (
            <div
              key={index}
              className="w-[120px] h-[170px] flex-shrink-0 mt-[10px] px-0.5 bg-[#fdfafa] rounded-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.3)] cursor-pointer"
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
                    className="font-bold text-[white] text-[0.5rem] bg-[#59d3fc] py-2 px-4 w-[90%] rounded-md"
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
