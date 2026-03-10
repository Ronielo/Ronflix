import { Button, Grid, Typography } from "@mui/material"
import { ShowCard } from "./ShowCard";
import type { Show } from "../types/Show";
import DeleteIcon from '@mui/icons-material/Delete';

type Props ={ 
  removeFavorite: (id: number) => void
  favorites: Show[]
  addFavorite: (show: Show) => void
}
export const FavoritesPage  = ({removeFavorite, favorites, addFavorite}: Props) => {

    console.log(favorites)
    if (favorites.length === 0) {
        return <Typography>
            No Favorites yet
        </Typography>
    }
    
  return (
    
    <Grid container spacing={2} justifyContent="center">
      {favorites.map((show) => (
        <div key={show.id}>
          <ShowCard show={show} addFavorite={addFavorite} />
          <Button
            variant="contained"
            color="error"
            onClick={() => removeFavorite(show.id)}
            sx={{ mt: 1 , marginLeft:8}}
          >
            <DeleteIcon></DeleteIcon>
          </Button>
        </div>
      ))}
    </Grid>
  );
};