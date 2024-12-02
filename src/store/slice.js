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
      removeGame(state, action) {
         state.selectedGames = state.selectedGames.filter(
            (item) => item.id !== action.payload.id
         );

         state.totalPrice > 0
            ? (state.totalPrice -= action.payload.price)
            : null;
      },
   },
});

export const { addGame, removeGame } = gamesSlice.actions;

export default gamesSlice.reducer;
