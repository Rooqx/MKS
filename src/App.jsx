import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./Component/UI/SearchInput.jsx";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductPage from "./Pages/ProductPage";
import AllCategories from "./Pages/AllCategories";
import basket from "./assets/cart.svg";
import fav from "./assets/fav.svg";
import menu from "./assets/menu.svg";
//import search from "./assets/search.svg";
import logo from "./assets/logo.png";
//import back from "./assets/back.svg";
import SideBar from "./SideBar";
import Favorites from "./Pages/Favorites";
import AllProducts from "./Pages/AllProducts.jsx";
import RecentViewed from "./Pages/RecentViewed";
import HospitalListItem from "./Pages/HospitalListItem";
import BabyGear from "./Pages/BabyGear";
import BabyCarrier from "./Pages/BabyCarrier";
import BabyBed from "./Pages/BabyBed";
import BabyWardrobe from "./Pages/BabyWardrobe.jsx";
import BabyBath from "./Pages/BabyBath";
import Diapers from "./Pages/Diapers";
import Strollers from "./Pages/Strollers";
import BabyWrappers from "./Pages/BabyWrappers";
import BabySeat from "./Pages/BabySeat";
import FashionAndClothing from "./Pages/FashionAndClothing";
import GirlsCloths from "./Pages/GirlsCloths";
import Towels from "./Pages/Towels";
import MummyProducts from "./Pages/MummyProducts";
import Flasks from "./Pages/Flasks";
import Feeding from "./Pages/Feeding";
import SkinCare from "./Pages/SkinCare";
import BoyCloths from "./Pages/BoyCloths";
import { updatedBabyProduct } from "./Products/Products";

// Custom hook with error handling
function useLocalStorage(key, initialValue) {
  const safeParse = (str) => {
    try {
      return str ? JSON.parse(str) : null;
    } catch (e) {
      console.error(`Error parsing ${key} from localStorage:`, e);
      return null;
    }
  };

  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue; // SSR guard
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? safeParse(storedValue) : initialValue;
    } catch (e) {
      console.error(`Error loading ${key} from localStorage:`, e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      console.error(`Error saving ${key} to localStorage:`, e);
    }
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [sidebar, setSidebar] = useState(null);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const menuRef = useRef(null);

  // ... rest of your component logic

  // ... rest of component

  return (
    <>
      <Router>
        <header className="flex justify-between items-center fixed w-full p-1 z-[100] bg-[#F5EBDD] text-[#4A4A4A] rounded-b-[50px]">
          <nav className="w-full flex flex-wrap gap-3 justify-between items-center py-3 px-4 md:py-4 md:px-6">
            <span
              className="bg-[#59d3fc] py-0.5 px-1 rounded-md"
              onClick={() => setSidebar("active")}
              ref={menuRef}
            >
              <img className="w-5" src={menu} alt="" />
            </span>
            <span>
              <img
                src={logo}
                className="w-[150px] absolute h-[90px] top-[35px] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                alt=""
              />
            </span>
            <span className="flex gap-5">
              <Link to="/favorites">
                <img src={fav} alt="" />
                <p>Favorites</p>
              </Link>
              <Link to="/cart">
                <img src={basket} alt="" />
                <p className="font-extrabold text-black">Cart</p>
              </Link>
            </span>

            {/* Search Area */}

            <SearchBar products={updatedBabyProduct} />
          </nav>
        </header>

        <SideBar sidebar={sidebar} setSidebar={setSidebar} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} favorites={favorites} />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/all-products"
            element={
              <AllProducts
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/recently-viewed" element={<RecentViewed />} />
          <Route
            path="/product/:productId"
            element={
              <ProductPage
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/hospital-list-items" element={<HospitalListItem />} />
          <Route
            path="/baby-gear"
            element={
              <BabyGear
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/baby-wardrobe"
            element={
              <BabyWardrobe
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/baby-bed"
            element={
              <BabyBed
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/diapers"
            element={
              <Diapers
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/stroller" element={<Strollers />} />
          <Route
            path="/baby-carrier"
            element={
              <BabyCarrier
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/baby-backing-wrapper"
            element={
              <BabyWrappers
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/baby-bath"
            element={
              <BabyBath
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/baby-car-seats" element={<BabySeat />} />
          <Route
            path="/fashion-and-clothing"
            element={<FashionAndClothing />}
          />

          <Route path="/towel" element={<Towels />} />
          <Route
            path="/girls-cloth"
            element={
              <GirlsCloths
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/mummy-products"
            element={
              <MummyProducts
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/flasks"
            element={
              <Flasks
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/feeding"
            element={
              <Feeding
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/skincare"
            element={
              <SkinCare
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/boys-cloth"
            element={
              <BoyCloths
                favorites={favorites}
                setFavorites={setFavorites}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
