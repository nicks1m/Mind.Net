import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        insertItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(state.items.findIndex(e => e.id === action.payload), 1);
        },
        editZ: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload.id);
            action.payload.type === "up" ? state.items[i].z += 1 : state.items[i].z > 0 ? state.items[i].z -= 1 : state.items[i].z = 0;
        },
        updateXY: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload.id);
            state.items[i].x = action.payload.x;
            state.items[i].y = action.payload.y;

        },
        editText: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload.id);
            state.items[i].text = action.payload.text;
        },
        editTitle: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload.id);
            state.items[i].title = action.payload.title;
        },
        editScale: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload.id);
            action.payload.type === "up" ? state.items[i].scale += 0.25 : 
            state.items[i].scale === 0.5 ? state.items[i].scale = 0.5 : state.items[i].scale -= 0.25
        },
        
    },
})

export const { insertItem, removeItem, editZ, decrementZ, updateXY, editText, editTitle, editScale } = itemsSlice.actions

export default itemsSlice.reducer