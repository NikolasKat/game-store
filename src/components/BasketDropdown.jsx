import { useState } from "react";
import { useSelector } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";

const BasketDropdown = () => {
   const [clicked, setClicked] = useState(false);
   const selectedGames = useSelector((state) => state.games.selectedGames);
   const totalPrice = useSelector((state) => state.games.totalPrice);

   console.log(selectedGames);

   return (
      <>
         <button
            className="hover:text-purple-700"
            onClick={() => setClicked(!clicked)}
         >
            <FaShoppingBasket />
         </button>

         {clicked ? (
            <div className="absolute z-10 w-1/2 bg-purple-950 top-[100px] right-2 text-white rounded-md border border-white p-3">
               <ul>
                  {selectedGames.map((item, i) => (
                     <div key={i} className="flex justify-between items-center">
                        <img
                           src={item.img}
                           alt={item.name}
                           className="w-2/12"
                        />
                        <h3 className="text-base font-bold text-left">
                           {item.name}
                        </h3>
                        <h3 className="text-base font-bold">
                           {item.price * 41} ₴
                        </h3>
                        <button className="">&#x2715;</button>
                     </div>
                  ))}
               </ul>
            </div>
         ) : null}

         <span className="ml-2 text-2xl">{totalPrice * 41} ₴</span>
      </>
   );
};

export default BasketDropdown;
