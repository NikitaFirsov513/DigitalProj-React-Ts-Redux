import { configureStore, combineReducers } from "@reduxjs/toolkit";

import menuSlice from "../reducers/menuReducer";
import productListSlice from "../reducers/productList";
import sliderListSlice from "../reducers/sliderList";
import searchSlice from "../reducers/searchReducer";
const reducers = {
    menu: menuSlice.reducer,
    product: productListSlice.reducer,
    slider: sliderListSlice.reducer,
    search: searchSlice.reducer,
};

const rootReducer = combineReducers({
    ...reducers,
});

export type RootState = ReturnType<typeof rootReducer>

const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export default setupStore;
