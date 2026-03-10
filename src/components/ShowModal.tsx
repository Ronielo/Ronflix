import { Modal, Box, Typography, Button } from "@mui/material"
import type { Episode, Show } from "../types/Show";
import { useEffect, useState } from "react";
import { fetchEpisode } from "../api/api";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

interface ShowModalProps {
    setIsModalVisible: (isVisible: boolean) => void;
    show: Show;
}
export const ShowModal = ({setIsModalVisible, show}: ShowModalProps) => {

    const [episodes, setEpisodes] = useState<Episode[]>([])

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
          <div style={{fontSize: 25, fontWeight: 600, marginTop: 50, color: "ActiveText"}}>
              Summary:
            </div>
          <Typography id="modal-modal-description" sx={{ mt: 2, height: 200 , overflowY: "scroll", border: 2, borderRadius: 5, padding: 3}}>
            {show.summary}
          </Typography >
            <div style={{fontSize: 25, fontWeight: 600, marginTop: 50, color: "ActiveText"}}>
              Episodes:
            </div>
          <Typography id="modal-modal-description" sx={{ mt: 2, height: 200 , overflowY: "scroll", border: 2, borderRadius: 5, padding: 3}}>

            {episodes.map((episode) => 
              <div>
                Season {episode.season}: Episode {episode.number} - {episode.name}
              </div>
             ) }
          </Typography>
          
          <Typography id="modal-modal-description" sx={{ mt: 5, fontWeight: 600 }}>
            {show.genres}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {show.url}
          </Typography>
          <Button onClick={() => setIsModalVisible(false)}>Close</Button>
        </Box>
      </Modal>
    )
}