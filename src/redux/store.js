import {configureStore} from "@reduxjs/toolkit";
import drinkReducer from './reducers/drink'
import timerReducer from './reducers/timers'

export default configureStore({
    reducer: {
        drinkCounter: drinkReducer,
        timer: timerReducer
    }
})