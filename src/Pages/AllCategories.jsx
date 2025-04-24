import { useNavigate } from "react-router-dom";
import pampers from "../assets/categories/photo_1_2025-04-22_20-20-43.jpg";
import bath from "../assets/categories/photo_1_2025-04-22_20-35-06.jpg";
import bed from "../assets/categories/photo_1_2025-04-22_20-54-03.jpg";
import wrapper from "../assets/categories/photo_2_2025-04-22_20-54-03.jpg";
import wardrobe from "../assets/categories/photo_3_2025-04-22_20-54-03.jpg";
import preg from "../assets/preg.jpeg";

import diapers from "../assets/categories/dipers.png";
import skinCare from "../assets/categories/skinCare.png";
import feeding from "../assets/categories/feeding.png";
import boyCloth from "../assets/categories/boyCloth.png";
import babyGear from "../assets/categories/babygear.png";
import girlCloth from "../assets/categories/girlCloth.png";

export default function AllCategories() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-wrap gap-[20px] py-3 px-6 absolute top-[140px] ">
      <p className="font-[500] text-[#4e4e4e]">All Categories</p>
      <ul className="flex flex-wrap items-center w-full gap-2 justify-center">
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/baby-bath")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={preg}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Hospital List
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/hospital-list-items")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={babyGear}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Baby Carrier
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/baby-bed")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={bed}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Baby Bed
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/girls-cloth")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={girlCloth}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-Black">
            Girl Cloth
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/diapers")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={pampers}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Diapers and Wipes
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/baby-wardrobe")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={wardrobe}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Baby Wardrobe
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/baby-bath")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={bath}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Baby Baths
          </p>
        </li>

        <li className="categoryList" onClick={() => navigate("/flasks")}>
          Flasks
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/baby-backing-wrapper")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={wrapper}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Baby Backing Wrappers
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/skincare")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={skinCare}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Skin Care
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/boys-cloth")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={boyCloth}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Boy Cloth
          </p>
        </li>
        <li
          className="categoryList relative rounded-md overflow-hidden"
          onClick={() => navigate("/feeding")}
        >
          <div className="absolute w-full h-full rounded-md">
            <img
              src={feeding}
              className="absolute w-[100%] h-full z-10"
              alt=""
            />{" "}
          </div>
          <p className="z-20 font-extrabold text-[1.5rem] text-black">
            Feeding
          </p>
        </li>
      </ul>
    </main>
  );
}
