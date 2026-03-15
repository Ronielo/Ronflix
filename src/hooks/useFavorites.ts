import { useState, useEffect } from "react";
import type { Show } from "../types/Show";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Show[]>(() => {
    const liked = localStorage.getItem("favorites");
    return liked ? JSON.parse(liked) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (show: Show) => {
    alert("Show Added");
    setFavorites((prev) => {
      if (prev.find((f) => f.id === show.id)) {
        return prev;
      } else {
        return [...prev, show];
      }
    });
  };
  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return { favorites, addFavorite, removeFavorite };
};
