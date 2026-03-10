import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import type { Show } from "../types/Show";
import { ShowModal } from "./ShowModal";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';



interface ShowCardProps {
  show: Show;
  addFavorite: (show: Show) => void
}

export const ShowCard = ({ show, addFavorite }: ShowCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <Card
      sx={{
        width: 200,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        image={show.image?.medium}
        alt={show.name}
        sx={{
          height: 200,
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {show.name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          onClick={() => addFavorite(show)}
          ><AddIcon></AddIcon></Button>

        <Button
          size="small"
          variant="contained"
          disableElevation
          onClick={() => setIsModalVisible(!isModalVisible)}
        >
          <InfoIcon></InfoIcon>
        </Button>
      </CardActions>
      {isModalVisible && (
        <ShowModal setIsModalVisible={setIsModalVisible} show={show} />
      )}
    </Card>
  );
};
