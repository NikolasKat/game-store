import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import BasketPage from "./pages/Basket";
import GamePage from "./pages/GamePage.jsx";
import Header from "./components/Header.jsx";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Header />}>
               <Route index element={<HomePage />}></Route>
               <Route path="basket" element={<BasketPage />}></Route>
               <Route path="/:id" element={<GamePage />}></Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;
