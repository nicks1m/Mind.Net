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
        incrementZ: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload);
            state.items[i].z += 1;
        },
        decrementZ: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload);
            if (state.items[i].z > 0) {
                state.items[i].z -= 1;
            }
            state.items[i].z = 0;
        },
        updateXY: (state, action) => {
            let i = state.items.findIndex(e => e.id === action.payload.id);
            state.items[i].x = action.payload.x;
            state.items[i].y = action.payload.y;

        },

    },
})

export const { insertItem, removeItem, incrementZ, decrementZ, updateXY } = itemsSlice.actions

export default itemsSlice.reducer