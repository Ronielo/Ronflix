import { useEffect, useState } from "react";
import { fetchDefaultShows, fetchSearchShow } from "../api/api";
import type { Show, ShowData } from "../types/Show";
import { ShowCard } from "./ShowCard";
import { Button, Grid, Stack, TextField, Typography, Drawer } from "@mui/material";


type Props ={ 
    addFavorite: (show: Show) => void
}
export const RonFlixApp = ({addFavorite}: Props) => {
  const [searchedShow, setSearchedShow] = useState("");
  const [showsList, setShowsList] = useState<ShowData[]>([]);
  const [defaultShows, setDefaultShows] = useState<Show[]>([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [open, setOpen]= useState(false)

  const [genre, setGenre] = useState("");

  const filterdShows = defaultShows.filter((show) => show.genres.includes(genre));
  const list = genre? filterdShows: defaultShows;

  useEffect(() => {
    fetchPage();
  }, []);

  useEffect(() => {
  }, [genre]);

  const genres = [... new Set(defaultShows.flatMap((show) => show.genres))];

  const fetchPage = async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchedDefaultShows = await fetchDefaultShows();
      setDefaultShows(fetchedDefaultShows);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSearchHandler = async () => {
    if (!searchedShow.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const shows = await fetchSearchShow(searchedShow);
      setShowsList(shows);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

const handleGenreSelect = (selectedGenre: string) => {
    setGenre(selectedGenre);
    setOpen(false); 
}

  return (
    <>
      <Stack
        alignItems="center"
        spacing={3}
        sx={{
          mt: 4,
          minHeight: "100vh",
        }}
      >
        <TextField
          value={searchedShow}
          onChange={(e) => setSearchedShow(e.target.value)}
          label={"Search:"}
        />

        <Button onClick={() => onSearchHandler()}>Search</Button>
        <Button  onClick={ () => setOpen(true)}>Open drawer</Button>
        <Drawer anchor="right" open={open} onClose={ () => setOpen(false)}>
          {genres.map((genre) => 
              <Button key={genre} onClick={() => handleGenreSelect(genre)}>
                  {genre}
              </Button>
          )}
          </Drawer>

        {loading && <Typography>Loading...</Typography>}

        {error && <Typography color="red">{error}</Typography>}

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {list.map((showData) => (
            <ShowCard key={showData.id} show={showData} addFavorite={addFavorite} />
          ))}
          {!list.length &&
            list.map((showData) => (
              <ShowCard key={showData.id} show={showData} addFavorite={addFavorite} />
            ))}
        </Grid>
      </Stack>
    </>
  );
};