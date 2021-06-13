import {configureStore} from "@reduxjs/toolkit";
import drinkReducer from './reducers/drink'
import timerReducer from './reducers/timers'
import itemReducer from './reducers/dashboardItems'

export default configureStore({
    reducer: {
        drinkCounter: drinkReducer,
        timer: timerReducer,
        items: itemReducer
    }
})