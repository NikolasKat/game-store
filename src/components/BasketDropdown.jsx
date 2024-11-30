import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";

const BasketDropdown = () => {
   const [clicked, setClicked] = useState(false);

   return (
      <>
         <button
            className="hover:text-purple-700"
            onClick={() => setClicked(!clicked)}
         >
            <FaShoppingBasket />
         </button>

         {clicked ? <div className="text-white text-3xl">hey</div> : null}

         <span className="ml-2 text-2xl">₴</span>
      </>
   );
};

export default BasketDropdown;
