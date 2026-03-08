import axios from "axios"
import type { Show, ShowData } from "../types/Show";

const API_URL = "https://api.tvmaze.com"

export const fetchSearchShow = async (show: string): Promise<ShowData[]>  => {
    try {
        const fetchSearchedShow = await axios.get(`${API_URL}/search/shows?q=${show}`);
        console.log(fetchSearchedShow.data);
        return fetchSearchedShow.data;
    } catch (e) {
        console.error(e);
        return []
    }
}

export const fetchDefaultShows = async (): Promise<Show[]> => {
    try {
        const fetchDefault = await axios.get(`${API_URL}/shows?page=1`);
        console.log(fetchDefault.data);
        return fetchDefault.data;
    } catch (e) {
        console.error(e);
        return []
    }
}