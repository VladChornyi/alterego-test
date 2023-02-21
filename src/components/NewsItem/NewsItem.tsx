import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ISingleNews } from "../../interfaces/news";
import { cutString } from "../../helpers/cut-string";

interface IProps {
  item: ISingleNews;
}

export const NewsItem = ({ item }: IProps) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={item.preview_image}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cutString(item.title, 18)}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ minHeight: 50 }}
        >
          {cutString(item.content, 55)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small" color="warning">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
