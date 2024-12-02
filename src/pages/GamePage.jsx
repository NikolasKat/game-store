import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { addGame, removeGame } from "../store/slice";

import { gamesData } from "../components/GameList";

const GamePage = () => {
   const { id } = useParams();

   const res = gamesData.filter((item) => item.id == id);

   // const dispatch = useDispatch();
   const gamesArray = useSelector((state) => state.games.selectedGames);
   const isElementInBasket = gamesArray.some((item) => item.id === id);

   // const addNewGame = () => {
   //    dispatch(addGame({ name, img, price, id }));
   // };

   // const deleteFromBasket = () => {
   //    dispatch(removeGame({ id, price }));
   // };

   console.log(isElementInBasket, gamesArray);

   return (
      <>
         <section className="mt-7 p-14">
            <img
               src={res[0].img}
               alt={res[0].name}
               className="my-0 mx-auto w-2/4 rounded-3xl"
            />
            <h2 className="mt-9 text-4xl font-semibold mb-3">{res[0].name}</h2>
            <h3 className="text-xl text-balance mb-3">{res[0].description}</h3>
            <div className="flex justify-between items-center">
               <span className="text-4xl">{res[0].price * 41} ₴</span>
               <div className="flex justify-between">
                  {res[0].genre.map((item, i) => {
                     return (
                        <div
                           className="border border-solid rounded-md text-2xl py-1 px-2 mr-3"
                           key={i}
                        >
                           {item}
                        </div>
                     );
                  })}
               </div>
            </div>
            <button
               className="bg-violet-700 p-5 rounded-md text-3xl font-medium hover:bg-purple-700 mt-4"
               // onClick={
               //    isElementInBasket ? () => deleteFromBasket() : addNewGame
               // }
            >
               {isElementInBasket ? "Удалить из корзины" : "Добавить в корзину"}
            </button>{" "}
         </section>
      </>
   );
};

export default GamePage;
