import { useDispatch } from "react-redux";
import { removeGame } from "../store/slice";
import { memo, useCallback } from "react";

const BasketItem = ({ name, img, price, id }) => {
   const dispatch = useDispatch();

   const deleteFromBasket = useCallback(() => {
      dispatch(removeGame({ id, price }));
   }, []);

   console.log("RENDER BASKET-elem");

   return (
      <>
         <div className="flex justify-between">
            <div className="flex items-center gap-4">
               <img src={img} alt={name} className="w-1/4 rounded-xl" />
               <span>{name}</span>
            </div>
            <div className="flex justify-between items-center gap-4">
               <span>{price * 41}₴</span>
               <button
                  onClick={() => deleteFromBasket()}
                  className="bg-violet-700 p-3 rounded-md text-xl font-bold hover:bg-purple-700 min-w-[150px]"
               >
                  Удалить из корзины
               </button>
            </div>
         </div>
      </>
   );
};

export default memo(BasketItem);
