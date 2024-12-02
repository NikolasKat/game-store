import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addGame, removeGame } from "../store/slice";

const ListItem = ({ name, description, genre, img, price, id }) => {
   const dispatch = useDispatch();
   const gamesArray = useSelector((state) => state.games.selectedGames);
   const isElementInBasket = gamesArray.some((item) => item.id === id);

   const addNewGame = () => {
      dispatch(addGame({ name, img, price, id }));
   };

   const deleteFromBasket = () => {
      dispatch(removeGame({ id, price }));
   };

   return (
      <div className="relative max-w-sm min-h-[630px] text-white mb-14">
         <Link to={`/${id}`}>
            <img
               className="rounded-3xl"
               src={img == "#" ? "../../public/rdr2.jpeg" : img}
               alt={name}
            />
         </Link>
         <div className="pt-4">
            <Link to={`/${id}`}>
               <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-[#535bf2] hover:[transition:0.2s_all]">
                  {name}
               </h5>
            </Link>
            <p className="mb-2 text-lg font-normal">
               {description.slice(0, 55)}...
            </p>
            <div className="flex justify-between items-center">
               <span className="text-xl">{price * 41}₴</span>
               <div className="flex">
                  {genre.map((item, i) => {
                     return (
                        <div
                           className="border border-solid rounded-md px-1 m-1"
                           key={i}
                        >
                           {item}
                        </div>
                     );
                  })}
               </div>
            </div>
            <br />
            <button
               className="bg-violet-700 p-3 rounded-md text-xl font-medium hover:bg-purple-700 absolute bottom-0"
               onClick={
                  isElementInBasket ? () => deleteFromBasket() : addNewGame
               }
            >
               {isElementInBasket ? "Удалить из корзины" : "Добавить в корзину"}
            </button>
         </div>
      </div>
   );
};

export default ListItem;
