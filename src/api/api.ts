import axios from "axios"
import type { Show, ShowData, Episode } from "../types/Show";

const API_URL = "https://api.tvmaze.com"

export const fetchSearchShow = async (show: string): Promise<ShowData[]>  => {
    try {
        const fetchSearchedShow = await axios.get(`${API_URL}/search/shows?q=${show}`);
        return fetchSearchedShow.data;
    } catch (e) {
        console.error(e);
        return []
    }
}

export const fetchDefaultShows = async (): Promise<Show[]> => {
    try {
        const fetchDefault = await axios.get(`${API_URL}/shows?page=1`);
        return fetchDefault.data;
    } catch (e) {
        console.error(e);
        return []
    }
}

export  const fetchEpisode = async (id: number): Promise<Episode[]> => {
    try {
        const data = await axios.get(`${API_URL}/shows/${id}/episodes`);
        console.log("the episode is ", data.data);
        return data.data
    }
    catch (e) {
        console.error("Error fetching episode data", e);
        return []
    }
}
