import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RonFlixApp } from "./components/RonFlixApp";
import { FavoritesPage } from "./components/FavoritesPage";
import { Button, Stack } from "@mui/material";
import { useFavorites } from './hooks/useFavorites';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const App = () => {
  const { addFavorite, removeFavorite, favorites } = useFavorites()
  return (
    
    <BrowserRouter>
      <Stack direction="row" spacing={2} sx={{ padding: 2, justifyContent: "center" }}>
        <Button component={Link} to="/" variant="contained"><HomeIcon /></Button>
        <Button component={Link} to="/favorites" variant="contained"><FavoriteIcon /></Button>
      </Stack>

      <Routes>
        <Route path="/" element={<RonFlixApp addFavorite={addFavorite} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} removeFavorite={removeFavorite} addFavorite={addFavorite} />} />
      </Routes>
    </BrowserRouter>
  );
};