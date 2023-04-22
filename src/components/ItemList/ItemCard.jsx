import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ height: "300px", width: "300px", marginBottom:"30px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
