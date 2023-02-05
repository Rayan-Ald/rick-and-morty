import { createSlice } from '@reduxjs/toolkit';

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState: { // Initial state
        favoris: [],
    },
    reducers: {
        addFavoris: (state, action) => {
            //state.favoris.push(action.payload);
            state.favoris = [...(new Set([...state.favoris, action.payload]).values())];
        },
        removeFavoris: (state, action) => {
            state.favoris = state.favoris.filter(f => f !== action.payload);
        },
        setFavoris: (state, action) => {
            state.favoris = action.payload;
        },
        deleteFavoris: (state) => {
            state.favoris = [];
        }
    }
});

export const { addFavoris, removeFavoris, setFavoris, deleteFavoris } = favorisSlice.actions;
export default favorisSlice.reducer;