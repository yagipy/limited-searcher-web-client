import { useSelector, TypedUseSelectorHook } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
