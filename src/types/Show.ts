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
        season: number;
        number: number;
        name: string;

}

// {
//     "score": 0.8677964,
//     "show": {
//         "id": 51609,
//         "url": "https://www.tvmaze.com/shows/51609/hello",
//         "name": "Hello!",
//         "type": "Scripted",
//         "language": "Bengali",
//         "genres": [
//             "Drama",
//             "Thriller"
//         ],
//         "status": "Ended",
//         "runtime": 20,
//         "averageRuntime": 20,
//         "premiered": "2017-09-25",
//         "ended": "2021-03-05",
//         "officialSite": "https://www.hoichoi.tv/shows/watch-hello-bengali-web-series-online",
//         "schedule": {
//             "time": "",
//             "days": [
//                 "Friday"
//             ]
//         },
//         "rating": {
//             "average": null
//         },
//         "weight": 46,
//         "network": null,
//         "webChannel": {
//             "id": 396,
//             "name": "Hoichoi",
//             "country": {
//                 "name": "India",
//                 "code": "IN",
//                 "timezone": "Asia/Kolkata"
//             },
//             "officialSite": null
//         },
//         "dvdCountry": null,
//         "externals": {
//             "tvrage": null,
//             "thetvdb": 343234,
//             "imdb": "tt7560098"
//         },
//         "image": {
//             "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/280/701095.jpg",
//             "original": "https://static.tvmaze.com/uploads/images/original_untouched/280/701095.jpg"
//         },
//         "summary": "<p>The festival of Durga Puja becomes memorable for Nandita when suddenly she receives an MMS from an unknown number that turns her life upside down.</p>",
//         "updated": 1632302394,
//         "_links": {
//             "self": {
//                 "href": "https://api.tvmaze.com/shows/51609"
//             },
//             "previousepisode": {
//                 "href": "https://api.tvmaze.com/episodes/2017717",
//                 "name": "Check Mate"
//             }
//         }
//     }
// }