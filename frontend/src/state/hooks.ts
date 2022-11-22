import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { appDispatch, rootState } from "./Store";

export const useAppSelector: TypedUseSelectorHook<rootState>= useSelector;

export const useAppDispatch = () => useDispatch<appDispatch>();