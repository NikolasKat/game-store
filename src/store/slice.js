import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
   name: "selectedGames",
   initialState: {
      selectedGames: [],
      totalPrice: 0,
   },
   reducers: {
      addGame(state, action) {
         state.selectedGames.push({
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            img: action.payload.img,
         });
         state.totalPrice += action.payload.price;
      },
      removeGame(state, action) {},
   },
});

export const { addGame, removeGame, addPrice, removePrice } =
   gamesSlice.actions;

export default gamesSlice.reducer;
