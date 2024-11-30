import { useDispatch } from "react-redux";
import { addGame, removeGame } from "../store/slice";

const ListItem = ({ name, description, genre, img, price, id }) => {
   const dispatch = useDispatch();

   const addNewGame = () => {
      dispatch(addGame({ name, img, price, id }));
   };

   return (
      <div className="relative max-w-sm min-h-[650px] rounded-lg text-white mb-14">
         <img
            className="rounded-t-lg"
            src={img == "#" ? "../../public/rdr2.jpeg" : img}
            alt={name}
         />
         <div className="pt-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-[#535bf2] hover:[transition:0.2s_all]">
               {name}
            </h5>
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
               onClick={addNewGame}
            >
               Добавить в корзину
            </button>
         </div>
      </div>
   );
};

export default ListItem;
