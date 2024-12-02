import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";
import { removeGame } from "../store/slice";

const BasketDropdown = () => {
   const [clicked, setClicked] = useState(false);
   const selectedGames = useSelector((state) => state.games.selectedGames);
   const totalPrice = useSelector((state) => state.games.totalPrice);

   return (
      <>
         <button
            className="hover:text-purple-700"
            onClick={() => setClicked(!clicked)}
         >
            <FaShoppingBasket />
         </button>

         {clicked ? (
            <div className="fixed z-10 w-1/2 bg-purple-950 top-[100px] right-2 text-white rounded-md border border-white p-3">
               {selectedGames.length ? (
                  <ul className="flex flex-col gap-3">
                     {selectedGames.map((item, i) => (
                        <div
                           key={i}
                           className="flex justify-between items-center bg-purple-900 p-2"
                        >
                           <img src={item.img} alt={name} className="w-2/12" />
                           <h3 className="text-lg font-bold text-left">
                              {item.name}
                           </h3>
                           <h3 className="text-lg font-bold">
                              {item.price * 41} ₴
                           </h3>
                           <button className="">&#x2715;</button>
                        </div>
                     ))}
                  </ul>
               ) : (
                  <h3 className="text-center text-4xl font-bold">
                     Ваша корзина пустая!
                  </h3>
               )}
            </div>
         ) : null}

         <span className="ml-2 text-2xl">{totalPrice * 41} ₴</span>
      </>
   );
};

export default BasketDropdown;
