import { useEffect, useState } from "react";
import { fetchDefaultShows, fetchSearchShow} from "../api/api";
import { Button, Stack, TextField } from "@mui/material";
import type { Show, ShowData } from "../types/Show";
import { ShowCard } from "./ShowCard";

export const RonFlixApp = () => {
    const [searchedShow, setSearchedShow] = useState("");
    const [showsList, setShowsList] = useState<ShowData[]>([]);
    const [defaultShows, setDefaultShows] = useState<Show[]>([]);

    useEffect(() => {
        fetchPage();
    }, []);

    const fetchPage = async () => {
        const fetchedDefaultShows = await fetchDefaultShows();
        console.log(fetchedDefaultShows);
        setDefaultShows(fetchedDefaultShows);
    }

    const onSearchHandler = async () => {
        const shows = await fetchSearchShow(searchedShow);
        console.log(shows);
        setShowsList(shows);
    }

    return (
        <>
            <TextField value={searchedShow} onChange={(e) => setSearchedShow(e.target.value)} label={"Search:"}  />
            <Button onClick={() => onSearchHandler()}>Search</Button>
            {/* <Button onClick={() => setPageNumber(pageNumber + 1)}>Load more...</Button> */}
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }} >
                {showsList.map((showData) => <ShowCard key={showData.show.id} show={showData.show} />)}
                {!showsList.length && defaultShows.map((showData) => <ShowCard key={showData.id} show={showData} />)}
            </Stack>
        </>
    )
}

