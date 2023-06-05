import { useActions, useAppSelector } from './redux';

export const useFavorites = () => {
  const { addToFavorites, removeFromFavorites } = useActions();

  const favorites = useAppSelector((state) => state.favorites);

  const isInFavorites = (id: number) =>
    favorites.find((item) => item.id === id);

  return { addToFavorites, removeFromFavorites, favorites, isInFavorites };
};
