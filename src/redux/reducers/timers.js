import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
    name: 'timerSlice',
    initialState: {
        backStraightenMinutes: 5,
        breakMinutes: 50,
    },
    reducers: {
        setBackStraightenMinutes: (state, action) => {
            state.backStraightenMinutes = action.payload;
        },
        setBreakMinutes: (state, action) => {
            state.breakMinutes = action.payload;
        }
    },
})

export const { setBackStraightenMinutes, setBreakMinutes } = timerSlice.actions

export default timerSlice.reducer