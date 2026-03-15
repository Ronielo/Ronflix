import { Modal, Box, Typography, Button } from "@mui/material"
import type { Episode, Show } from "../types/Show";
import { useEffect, useState } from "react";
import { fetchEpisode } from "../api/api";
import { EpisodeItem } from "./EpisodItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ShowModalProps {
  setIsModalVisible: (isVisible: boolean) => void;
  show: Show;
}
export const ShowModal = ({ setIsModalVisible, show }: ShowModalProps) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

    const getEpisodes = async ()  =>  {
      const episodes =  await fetchEpisode(show.id)
      setEpisodes(episodes)
    }

    useEffect(() =>{
      getEpisodes();

    },[])

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {show.name}
        </Typography>
        <div style={{ maxHeight: 200, overflowY: "scroll" }}>
          {episodes.map((episode) => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
        </div>

        <Button
          sx={{ marginTop: 5 }}
          size="small"
          variant="contained"
          disableElevation
          onClick={() => setIsModalVisible(false)}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};
