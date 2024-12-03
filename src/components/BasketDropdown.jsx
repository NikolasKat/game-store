import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

const BasketDropdown = () => {
   const [clicked, setClicked] = useState(false);
   const selectedGames = useSelector((state) => state.games.selectedGames);
   const totalPrice = useSelector((state) => state.games.totalPrice);

   return (
      <>
         <span className="mr-4 text-4xl">{totalPrice * 41} ₴</span>

         {clicked ? (
            <div className="absolute z-10 w-1/2 bg-violet-700 top-[120px] right-2 text-white rounded-md border border-white p-4">
               {selectedGames.length ? (
                  <>
                     <ul className="flex flex-col gap-3 mb-4">
                        {selectedGames.map((item, i) => (
                           <div
                              key={i}
                              className="flex justify-between items-center"
                           >
                              <div>
                                 <h3 className="text-lg font-bold text-left">
                                    {item.name}
                                 </h3>
                              </div>
                              <h3 className="text-lg font-bold">
                                 {item.price * 41} ₴
                              </h3>
                           </div>
                        ))}
                     </ul>
                     <hr />
                     <div className="flex justify-between mt-3 text-2xl font-bold">
                        <h3>Итого:</h3>
                        <h3>{totalPrice * 41} ₴</h3>
                     </div>
                     <Link to="basket">
                        <button className="bg-violet-400 p-3 rounded-3xl text-xl font-medium hover:bg-purple-700 mt-4">
                           Оформить заказ
                        </button>
                     </Link>
                  </>
               ) : (
                  <h3 className="text-center text-4xl font-bold">
                     Ваша корзина пустая!
                  </h3>
               )}
            </div>
         ) : null}
         <button
            className="relative hover:text-purple-700 text-5xl h-20"
            onClick={() => setClicked(!clicked)}
         >
            {selectedGames.length > 0 ? (
               <div className="absolute block top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-sm font-semibold">
                  {selectedGames.length}
               </div>
            ) : null}
            <FaShoppingBasket />
         </button>
      </>
   );
};

export default BasketDropdown;
