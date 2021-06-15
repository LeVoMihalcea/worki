import { createSlice } from '@reduxjs/toolkit'

export const dashboardItemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: {
            4: {type: "counter", icon: "coffee.svg", title: "Cups of coffee", counter: 0},
            3: {type: "counter", icon: "drink-water.svg", title: "Cups of Water", counter: 0},
            0: {type: "timer", title: "Straighten your Back Reminder", sound: "juntos.mp3", min: 1, max: 30, step: 5, minutes: 5},
            2: {type: "counter", icon: "coffee.svg", title: "Cups of coffee", counter: 0},
            1: {type: "timer", title: "Take a well-deserved break!", sound: "juntos.mp3", min: 30, max: 60, step: 10, minutes: 50},
        },
        dialogOpen: false,
    },
    reducers: {
        addItem: (state, payload) => {
            state.items.push(payload)
        },
        deleteItem: (state, payload) => {
            //todo
        },
        incrementCounter: (state, payload) => {
            console.log(payload);
            state.items[payload.payload].counter++;
        },
        decrementCounter: (state, payload) => {
            state.items[payload.payload].counter--;
        },
        setMinutes: (state, payload) => {
            console.log(payload);
            state.items[payload.payload.id].minutes = payload.payload.value;
        },
        // update
        openDialog: (state) => {
            state.dialogOpen = true;
        },
        closeDialog: (state) => {
            state.dialogOpen = false;
        }
    },
})

export const {addItem, deleteItem, incrementCounter, decrementCounter, setMinutes, openDialog, closeDialog} = dashboardItemsSlice.actions

export default dashboardItemsSlice.reducer