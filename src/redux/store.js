import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from './contact/index';

export const store = configureStore({
    reducer: {
        contact : ContactSlice
    }
});
