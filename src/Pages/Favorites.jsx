import { useNavigate } from "react-router-dom";
export default function Favorites({ favorites, setFavorites, cart, setCart }) {
  const navigate = useNavigate();
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
  return (
    <main className="flex flex-wrap gap-[10px] py-3 px-6 absolute top-[110px]">
      {favorites.length === 0 ? (
        <div className="font-bold text-[2rem] text-center text-[grey]">
          You did Not save any product as favorite
        </div>
      ) : (
        <ul className="w-full flex flex-wrap gap-2 justify-center items-center">
          {favorites.map((product) => (
            <li
              key={product.id}
              className="w-[150px] h-[200px] flex-shrink-0 mt-[10px] px-0.5 bg-[#fdfafa] rounded-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.3)] cursor-pointer"
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
                  className="w-full h-[100%] object-cover"
                  alt={product.name}
                />
              </div>
              <div className="px-2 py-1">
                <p className="text-[0.75rem] font-extrabold overflow-hidden text-ellipsis whitespace-nowrap">
                  {product.name}
                </p>
                <div className="flex justify-center items-center gap-2 mt-[10px]">
                  <button
                    onClick={() => addCart(product)}
                    className="font-extrabold text-[white] text-[0.75rem] bg-[#59d3fc] py-2 px-4 w-[100%] rounded-md"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
