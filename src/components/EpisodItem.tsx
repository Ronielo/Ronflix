import type { Episodes } from "../types/Show";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


type Props = {
  episode: Episodes;
};
export const EpisodeItem = ({ episode }: Props) => {
  const CheckRaiting = (raiting: number) => {
    if (raiting > 7) {
      return <div style={{ color: "green" }}><StarIcon></StarIcon></div>;
    }
    if (raiting < 5) {
      return <div style={{ color: "red" }}><StarOutlineIcon></StarOutlineIcon></div>;
    }
    if (raiting >= 5 && raiting <= 7)
      return <div style={{ color: "blue" }}><StarHalfIcon></StarHalfIcon></div>;
    else {
      return <div style={{ color: "red" }}>noRaiting</div>;
    }
  };

  return (
    <div>
      Season {episode.season} - Episode {episode.number}
      <div>{episode.name}</div>
      <div>{CheckRaiting(episode.rating.average)}</div>
    </div>
  );
};
