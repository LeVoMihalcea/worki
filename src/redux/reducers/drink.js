import { createSlice } from '@reduxjs/toolkit'

export const drinkSlice = createSlice({
    name: 'drinkCounter',
    initialState: {
        coffeeCount: 0,
        waterCount: 0
    },
    reducers: {
        incrementWater: (state) => {
            state.waterCount += 1
        },
        decrementWater: (state) => {
            if(state.waterCount > 0) state.waterCount -= 1
        },
        incrementWaterByAmount: (state, action) => {
            state.waterCount += action.payload
        },
        incrementCoffee: (state) => {
            state.coffeeCount += 1
        },
        decrementCoffee: (state) => {
            if(state.coffeeCount > 0) state.coffeeCount -= 1
        },
        incrementCoffeeByAmount: (state, action) => {
            state.coffeeCount += action.payload
        },
    },
})

export const { incrementWater, decrementWater, incrementWaterByAmount,
    incrementCoffee, decrementCoffee, incrementCoffeeByAmount } = drinkSlice.actions

export default drinkSlice.reducer