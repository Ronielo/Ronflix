import { Modal, Box, Typography, Button } from "@mui/material"
import type { Show } from "../types/Show";

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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {show.summary}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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