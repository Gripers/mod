import { useMemo } from "react";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { RootState } from "@/store/store";
import { actions as cartActions } from "@/store/slices/cartSlice";
import { actions as favoritesActions } from "@/store/slices/favoritesSlice";

const actions = {
  ...cartActions,
  ...favoritesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
