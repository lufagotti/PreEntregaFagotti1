import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";


const ItemCard = ({ item }) => {
  return (
    <Card sx={{ height: "auto", width: "300px", marginBottom:"30px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300px"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography> */}
        <Typography variant="h7" color="secondary" fontSize={30}>
            ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
        <Button variant="contained" size="small" style={{backgroundColor:"#9c93b5"}}>Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
