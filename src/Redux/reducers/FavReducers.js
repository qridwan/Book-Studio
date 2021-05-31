import React from "react";
import { useEffect } from "react";
import {
  ADD_TO_FAV,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FROM_FAV,
} from "../actions/FavAction";

const initialState = {
  favorites: [],
  books: [],
};

export const FavReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
      };

    case FETCH_PRODUCTS_SUCCESS:
      console.log(action);
      const allBooks = action.books;
      return {
        ...state,
        books: [...state.books, ...allBooks],
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
      };
    case ADD_TO_FAV:
      const newItem = {
        favId: state.favorites.length + 1,
        bookId: action.id,
        name: action.name,
        img: action.img,
        price: action.price,
      };
      return {
        ...state,
        favorites: [...state.favorites, newItem],
      };
    case REMOVE_FROM_FAV:
      //   const id = action.id;
      const remainingFav = state.fav.filter((item) => item.favId !== action.id);
      return {
        ...state,
        fav: remainingFav,
      };
    default:
      return state;
  }
};
