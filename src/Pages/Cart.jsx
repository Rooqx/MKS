import { useNavigate } from "react-router-dom";
import call from "../assets/call.svg";

import { phoneNumber } from "../utils";

export default function Cart({ cart, setCart, favorites }) {
  const navFav = useNavigate();
  const navigate = useNavigate();
  //const [quantity, setQuantity] = useState(1);

  //  console.log(updateCart);
  const increaseQuantity = (productId) => {
    setCart((c) =>
      c.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      )
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

  const decreaseQuantity = (productId) => {
    setCart((c) =>
      c.map((product) =>
        productId === product.id
          ? { ...product, quantity: Math.max((product.quantity || 1) - 1, 1) }
          : product
      )
    );
  };

  const removeProduct = (productId) => {
    setCart((c) => c.filter((product) => productId !== product.id));
  };
  const generateWhatsAppMessage = () => {
    const productList = cart
      .map(
        (item) =>
          `*${item.name}*%0A` +
          `Quantity: ${item.quantity}%0A` +
          `Image: ${item.imageUrl}%0A%0A`
      )
      .join("");
    const baseMessage = `Hi! I want to order:%0A%0A${productList}`;
    return baseMessage;
  };

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <main className="flex flex-wrap gap-[5px] py-3 px-6 absolute top-[140px] rounded-[10px]">
      <div className="w-full shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[20px] bg-white p-2 ">
        <p className="text-[#666666] border-b-[0.1px] border-b-[rgba(0,0,0,0.2)] border-solid ">
          Cart Summary
        </p>
        <div className="flex justify-between py-2 px-0">
          <p>Total Amount:</p>
          <p className="font-normal text-[1rem] mr-[10px]">
            Click <b>Negotiate Price </b> for Total amount
          </p>
        </div>
      </div>
      <p className="font-thin">Cart({cart.length})</p>
      {cart.length === 0 ? (
        <div>Your Cart is Empty</div>
      ) : (
        <ul className="w-full min-h-[150px] bg-white p-2 flex flex-wrap gap-[10px] justify-center items-center rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
          {cart.map((product) => (
            <li key={product.id} className="flex gap-5 flex-wrap w-full p-2">
              <div
                className="w-[20%] h-[50px] "
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: {
                      product: product,
                    },
                  })
                }
              >
                <div className="w-full h-[50px] bg-slate-400 ">
                  <img
                    src={product.image}
                    className="w-full object-cover h-[60px]"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="w-[75%] "
                onClick={() =>
                  navigate(`/product/${product.id}`, {
                    state: {
                      product: product,
                    },
                  })
                }
              >
                <p className="font-extrabold mb-4">{product.name}</p>
                <p></p>
                <p className="font-normal">
                  Click <b>Negotiate Price</b> to get Price
                </p>
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between items-center">
                  <div className="p-2">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-[#59d3fc] font-extrabold cursor-pointer rounded-md py-1.5 px-1  active:bg-[rgba(0,0,0,0.2)]"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex gap-[30px] justify-center items-center">
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="text-[1rem] bg-[#59d3fc] py-2 px-4 rounded-[10px] text-[white] font-extrabold cursor-pointer"
                    >
                      -
                    </button>
                    <p>{product.quantity || 1}</p>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="text-[1rem] bg-[#59d3fc] py-2 px-4 rounded-[10px] text-[white] font-extrabold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="w-full  bg-white px-4 py-2 flex flex-wrap gap-[10px] justify-center items-center rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <p>
          <b>Returns are easy</b> <br />
          Free return within 2 days for all eligible items
        </p>
      </div>
      <div className="w-full py-5 mb-[50px]">
        <div className="w-full flex justify-between px-2 ">
          <p>Your Favorites</p>
          <p className="text-[grey]" onClick={() => navFav("/favorites")}>
            {" "}
            View All
          </p>
        </div>
        <div className="w-[88vw] flex overflow-x-auto gap-4 pb-2 scroll-container mt-3 mb-[50px]">
          {favorites.map((product, index) => (
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
                <div className="flex justify-center items-center gap-2 mt-[5px]">
                  <button
                    onClick={() => addCart(product)}
                    className="font-[900] text-[white] text-[0.5rem] w-full bg-[#59d3fc] py-2 px-4 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        {/*<div className="w-full flex justify-between px-2">
          <p>Items you Recently viewed</p>
          <p className="text-[grey]" onClick={() => navFav("/recently-viewed")}>
            View All
          </p>
        </div>*/}
      </div>
      <footer className="fixed bottom-0 left-0 right-0 h-[80px] bg-[#F5EBDD] w-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex gap-2 justify-center items-center">
        <a
          href={`tel:${phoneNumber}`}
          className="border-[3px] border-[#59d3fc] p-3 flex justify-center items-center rounded-[5px]"
        >
          <img src={call} alt="" />
        </a>

        <a
          className="bg-[#59d3fc] p-2 rounded-[5px] text-[1.4rem] cursor-pointer  w-[50%] text-[white] font-extrabold text-center"
          href={whatsAppUrl}
          target="blank"
          rel="noopener noreferrer"
        >
          Negotiate Price
        </a>
      </footer>
    </main>
  );
}
