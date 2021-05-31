import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { FavReducers } from "../reducers/FavReducers";

export const store = createStore(FavReducers,
    applyMiddleware(thunk) )