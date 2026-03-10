import type { Episodes } from "../types/Show"

type Props = {
    episode: Episodes

}
export const EpisodeItem = ({episode}: Props) => {

    const  CheckRaiting = (raiting: number) => {
        if (raiting > 7) {
            return <div style={{color: "green"}}>Full Star</div>
        } 
        if (raiting < 5 ) {
            return <div style={{color: "red"}}>Empty Star</div>
        }
        if (raiting >=5 && raiting <=7)
            return <div style={{color: "blue"}}>Half Star</div>
        else{
            return <div style={{color: "red"}}>noRaiting</div>
        }    


    }
    

    
    return (
        <div>
            Season {episode.season} - Episode {episode.number}
            <div>{episode.name}</div>
            <div>
                {CheckRaiting(episode.rating.average)}
            </div>
            
        </div>
    )

}