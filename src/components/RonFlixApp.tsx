import { Fragment, useEffect, useState } from "react";
import { fetchDefaultShows, fetchSearchShow } from "../api/api";
import { Button, Drawer, Stack, TextField } from "@mui/material";
import type { Show, ShowData } from "../types/Show";
import { ShowCard } from "./ShowCard";

export const RonFlixApp = () => {
    const [searchedShow, setSearchedShow] = useState("");
    const [showsList, setShowsList] = useState<ShowData[]>([]);
    const [defaultShows, setDefaultShows] = useState<Show[]>([]);

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
        const fetchedDefaultShows = await fetchDefaultShows();
        console.log(fetchedDefaultShows);
        setDefaultShows(fetchedDefaultShows);
    }

    const onSearchHandler = async () => {
        const shows = await fetchSearchShow(searchedShow);
        setShowsList(shows);
    }


    const handleGenreSelect = (selectedGenre: string) => {
        setGenre(selectedGenre);
        setOpen(false); 
    }
    


    return (
        <>
                
            <TextField value={searchedShow} onChange={(e) => setSearchedShow(e.target.value)} label={"Search:"}  />
            
            <Button onClick={() => onSearchHandler()}>Search</Button>
            <Button  onClick={ () => setOpen(true)}>Open drawer</Button>
                <Drawer anchor="right" open={open} onClose={ () => setOpen(false)}>
                {genres.map((genre) => 
                    <Button key={genre} onClick={() => handleGenreSelect(genre)}>
                        {genre}
                    </Button>
                )}
                </Drawer>
            {/* <Button onClick={() => setPageNumber(pageNumber + 1)}>Load more...</Button> */}
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }} >
                {list.map((showData) => <ShowCard key={showData.id} show={showData} />)}
                {!list.length && defaultShows.map((showData) => <ShowCard key={showData.id} show={showData} />)}
            </Stack>
        </>
    )
}

