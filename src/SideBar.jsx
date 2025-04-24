import { useNavigate } from "react-router-dom";

export default function SideBar({ sidebar, setSidebar }) {
  //TURN THE LIST INTO AN ARRAY
  if (sidebar === "active") {
    return (
      <aside className="absolute top-0 w-[60%] z-[60] h-[100%] bg-[#59d3fc82] backdrop-blur-[5px] rounded-br-[50px] text-[#302f2f]">
        <nav className="flex flex-col justify-start text-[0.8rem]">
          <button
            className="bg-[#8787f5] text-white h-[30px] font-bold flex justify-center items-center"
            onClick={() => setSidebar(null)}
          >
            Click To CLOSE
            <p className="absolute right-[0px] border-2 border-[grey] py-1.5 px-4">
              X
            </p>
          </button>
          <p className="border-t-2 border-t-[#a2a2a2] border-b-2 border-b-[#a2a2a2] p-2 text-[#404040] font-semibold">
            Need Help?
          </p>
          <p className="p-2 font-semibold border-b-2 border-b-[grey] mb-3">
            Favorites
          </p>
          {/*
          <p className="p-1 font-[400]">OUR CATEGORIES:</p>
          <ul className="px-3 py-1 box-border flex  flex-col gap-2 p-1 text-[0.8rem]">
            <li
              onClick={() => {
                navHospitalList("/hospital-list-items");
                setSidebar(null);
              }}
            >
              Hospital List
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navDiapers("/diapers");
              }}
            >
              Diapers and Supplies
            </li>
            <li
              onClick={() => {
                navNewBornOutfit("/hospital-list-items");
                setSidebar(null);
              }}
            >
              New Born Outfits
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navSkinCare("/skin-care");
              }}
            >
              Skin Care
            </li>

            <li
              onClick={() => {
                setSidebar(null);
                navFlasks("/flasks");
              }}
            >
              Flasks
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navFeeding("/feeding");
              }}
            >
              Feeding Bottle
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navBabyBed("/baby-bed");
              }}
            >
              Baby Bed
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navBabyStrollers("/stroller");
              }}
            >
              Baby Stroller
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navAllKidsWare("/fashion-and-clothing");
              }}
            >
              All Kids Ware
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navBabyWardrobe("/hospital-list-items");
              }}
            >
              Baby Wardrobe
            </li>
            <li
              onClick={() => {
                setSidebar(null);
                navTowel("/towel");
              }}
            >
              Towel
            </li>
          </ul>*/}
        </nav>
      </aside>
    );
  }
}
