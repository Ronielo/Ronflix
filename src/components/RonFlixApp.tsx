import { useEffect, useState } from "react";
import { fetchDefaultShows, fetchSearchShow } from "../api/api";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import type { Show, ShowData } from "../types/Show";
import { ShowCard } from "./ShowCard";

type Props ={ 
    addFavorite: (show: Show) => void
}
export const RonFlixApp = ({addFavorite}: Props) => {
  const [searchedShow, setSearchedShow] = useState("");
  const [showsList, setShowsList] = useState<ShowData[]>([]);
  const [defaultShows, setDefaultShows] = useState<Show[]>([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPage();
  }, []);

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

        {loading && <Typography>Loading...</Typography>}

        {error && <Typography color="red">{error}</Typography>}

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {showsList.map((showData) => (
            <ShowCard key={showData.show.id} show={showData.show} addFavorite={addFavorite} />
          ))}
          {!showsList.length &&
            defaultShows.map((showData) => (
              <ShowCard key={showData.id} show={showData} addFavorite={addFavorite} />
            ))}
        </Grid>
      </Stack>
    </>
  );
};
