import { useActions, useAppSelector } from './redux';

export const useCart = () => {
  const { addItem, removeItem, updateItemQuantity, emptyCart } = useActions();

  const items = useAppSelector((state) => state.cart);

  const getItem = (id: number) => items.find((item) => item.id === id);

  const isEmpty = !items.length ? true : false;

  const totalItems = items.length;

  return {
    items,
    addItem,
    removeItem,
    updateItemQuantity,
    getItem,
    isEmpty,
    emptyCart,
    totalItems,
  };
};
