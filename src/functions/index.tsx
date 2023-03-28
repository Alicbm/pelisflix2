import { ActionCreatorWithPayload, AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { Initial } from "../types";

export const getSections = async (
  url: string,
  dispatch: ThunkDispatch<{ mainReducer: Initial }, undefined, AnyAction> &
    Dispatch<AnyAction>,
  callback: ActionCreatorWithPayload<any>
) => {

  try {
    const res = await fetch(url);
    const data = await res.json();

    dispatch(callback(data.results));
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesGenres = async (
  url: string,
  dispatch: ThunkDispatch<{ mainReducer: Initial }, undefined, AnyAction> &
    Dispatch<AnyAction>,
  callback: ActionCreatorWithPayload<any>
) => {

  try {
    const res = await fetch(url);
    const data = await res.json();

    dispatch(callback(data.genres));
    localStorage.setItem('PELISFLIX2_CATEGORY', JSON.stringify(data.genres));

  } catch (error) {
    console.log(error);
  }
};

export const storage = (storage: string) => {
  const localStorageMovie = localStorage.getItem(storage);
  let data;

  if (!localStorageMovie) {
    localStorage.setItem(storage, JSON.stringify([]));
    data = [];
  } else {
    data = JSON.parse(localStorageMovie);
  }

  return data;
}