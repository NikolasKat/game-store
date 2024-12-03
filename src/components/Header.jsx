import { Link, Outlet } from "react-router-dom";

import BasketDropdown from "./BasketDropdown";

export default function Header() {
   return (
      <>
         <header className="flex justify-between items-center py-6 px-9">
            <Link
               to="/"
               className="text-5xl font-semibold hover:text-violet-700"
            >
               My Game Store
            </Link>
            <div className="flex items-center justify-between">
               <BasketDropdown />
            </div>
         </header>
         <hr />

         <Outlet />
      </>
   );
}
