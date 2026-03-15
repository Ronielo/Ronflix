import { Interests } from "@mui/icons-material";

export interface ShowData {
    show: Show;
    score: number;
}

export interface Show {
    id: number;
    name: string;
    url: string;
    image: Image;
    genres: string[];
    summary: string;
}

export interface Image {
    medium?: string;
    original: string;
}
 
// export interface EpisodesData{
//     episodes: Episode[];
// }

export interface Episode{
    id: number;
        season: number;
        number: number;
        name: string;

}

export interface Episodes {
    endDate: number
    id: number
    episodeOrder:number
    name: string
    summary: string
    season:number
    number: number
    rating: Raiting
    
}

export interface Raiting {
    average: number
}
