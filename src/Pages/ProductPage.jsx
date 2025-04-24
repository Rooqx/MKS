import call from "../assets/call.svg";
import fav from "../assets/fav.svg";
import addCart from "../assets/addcart.svg";
import selectedFav from "../assets/selectedFav.svg";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { phoneNumber } from "../utils";

export default function ProductPage({
  favorites,
  setFavorites,
  cart,
  setCart,
}) {
  const [selectImg, setSelectImg] = useState(null);

  //const { index } = useParams();
  const { state } = useLocation();
  const productData = state?.product;

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
  const addToCart = (product) => {
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

  const generateWhatsAppMessage = () => {
    const product = productData.name;
    const baseMessage = `Hi! I want to order:%0A%0A${product}`;
    return baseMessage;
  };

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;

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
    <main className="flex flex-wrap gap-[5px] py-3 px-6 absolute top-[140px]">
      <div className="w-full h-[250px] bg-white rounded-[10px] relative">
        <img
          src={productData?.image}
          className="object-contain w-full h-full scale-70  absolute"
          alt=""
          onClick={() => setSelectImg(productData?.image)}
        />
      </div>
      <div className="w-full relative h-[150px] bg-white py-3 px-2 flex flex-col items-start rounded-[10px]">
        <p className="font-extrabold">{productData?.name}</p>
        <div className="flex gap-[5px] text-[0.7rem]">
          Brand: <p className="font-bold"></p>
        </div>

        <a
          href={whatsAppUrl}
          target="blank"
          rel="noopener noreferrer"
          className="bg-[#59d3fc] absolute right-5 top-[70px] py-[12px] px-[24px] rounded-md font-bold text-[white] shadow-[2px_3px_10px_rgba(0,0,0,0.5)] active:shadow-none"
        >
          Negotiate Price
        </a>
        {selectImg && (
          <div className="w-full  absolute top-[-400px] h-[100vh] z-50 flex  items-center justify-center bg-black bg-opacity-85">
            <button
              onClick={() => setSelectImg(null)}
              className="absolute text-white top-0 right-5 font-extrabold"
            >
              X Click to close
            </button>
            <img
              src={selectImg}
              onClick={() => setSelectImg(null)}
              className="max-h-[90vh]  max-w-full"
              alt=""
            />
          </div>
        )}
        {/*
        <div className="w-full flex flex-col">
          <p className="text-[grey] text-[0.9rem] font-semibold">
            
            Select Color:
          </p>
          <div className="flex gap-[5px]">
            <button className="bg-[green] text-[white] py-1 px-2 rounded-[10px] cursor-pointer">
              Green
            </button>
            <button className="bg-[Red] cursor-pointer text-[white] py-1 px-2 rounded-[10px]">
              Red
            </button>
            <button className="bg-[blue] cursor-pointer text-[white] py-1 px-2 rounded-[10px]">
              Blue
            </button>
            <button className="cursor-pointer bg-[black] rounded-[10px] text-[white] py-1 px-2">
              Black
            </button>
          </div>
        </div>*/}
      </div>

      <ul className="flex flex-col bg-white rounded-[10px] p-2 w-full">
        <p className="mb-2">Support</p>
        <li className="text-[#0b83a7]">
          &#x2B55; call 08030661976 To place order
        </li>
        <li className="text-[#0b83a7]"> &#x2B55; Cheap delivery</li>
      </ul>
      <div className="bg-white rounded-[10px] py-3 px-2">
        <p className="underline font-bold">Descriptions</p>
        <p className="text-[#4c4c4c]">{productData.description}</p>
      </div>
      <div className="bg-white w-full p-2 mb-[100px]">
        <p className="mb-2">Delivery and Returns policy</p>
        <p className="mb-2">
          <b>Delivery:</b> <br />
          Offers Best Product Pay On Delivery with super fast delivery
        </p>
        <p>
          <b>Refund:</b> <br /> 100% money back if returned with in 2 days
        </p>
      </div>
      {/*
      <section className="w-full overflow-hidden mb-[100px]">
        <p className="font-extrabold">You may also Want</p>
        <div></div>
      </section>*/}
      <footer className="fixed bottom-0 left-0 right-0 h-[80px]  bg-[#F5EBDD] w-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex gap-2 justify-center items-center">
        <button className="border-[3px] border-[#59d3fc] p-3 flex justify-center items-center rounded-[5px]">
          <img src={call} alt="" />
        </button>
        {productData.favorite ? (
          <button
            className="scale-80 border-[3px] border-[#59d3fc] p-3 flex justify-center items-center rounded-[5px]"
            onClick={() => {
              removeFavorite(productData);
              addMsg("remove");
            }}
          >
            <img src={selectedFav} alt="" />
          </button>
        ) : (
          <button
            className="scale-80 border-[3px] border-[#59d3fc] p-3 flex justify-center items-center rounded-[5px]"
            onClick={() => {
              addFavorite(productData);
              addMsg("add");
            }}
          >
            <img src={fav} alt="" />
          </button>
        )}

        <button
          className="bg-[#59d3fc] flex justify-center items-center p-2 rounded-[5px] text-[1.2rem] cursor-pointer w-[50%] text-[white] font-bold"
          onClick={() => addToCart(productData)}
        >
          <img src={addCart} alt="" />
          Add to Cart
        </button>
      </footer>
    </main>
  );
}
