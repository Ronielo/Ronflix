import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import type { Show } from "../types/Show";
import { ShowModal } from "./ShowModal";
import { useState } from "react";

interface ShowCardProps {
    show: Show;
}

export const ShowCard = ({show}: ShowCardProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={show.image?.medium}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {show.name}
                </Typography>
                {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setIsModalVisible(!isModalVisible)}>Open more info</Button>
            </CardActions>
            {isModalVisible && <ShowModal setIsModalVisible={setIsModalVisible} show={show} />}
        </Card>
    )
}