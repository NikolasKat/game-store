import { useSelector } from "react-redux";

import BasketItem from "../components/BasketItem";

const BasketPage = () => {
   const gamesArray = useSelector((state) => state.games.selectedGames);

   return (
      <>
         <section className="w-full p-5 mt-11 text-3xl font-bold">
            {gamesArray.length > 0 ? (
               <ul className="flex flex-col gap-8 flex-wrap">
                  {gamesArray.map((item) => {
                     return (
                        <BasketItem
                           key={item.id}
                           name={item.name}
                           id={item.id}
                           price={item.price}
                           img={item.img}
                        />
                     );
                  })}
               </ul>
            ) : (
               <h2 className="text-center mt-48">Корзина пустая</h2>
            )}
         </section>
      </>
   );
};

export default BasketPage;
