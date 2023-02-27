import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ISingleNews } from "../../interfaces/news";
import { cutString } from "../../helpers/cut-string";
import { useAppDispatch } from "../../redux/store";
import { deleteNews } from "../../redux/news/news-slice";
import { useTranslation } from "react-i18next";

interface IProps {
  item: ISingleNews;
}

export const NewsItem = ({ item }: IProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handleDelete = () => {
    dispatch(deleteNews(item.id));
  };
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
        <Button size="small" color="warning" onClick={handleDelete}>
          {t("delete")}
        </Button>
      </CardActions>
    </Card>
  );
};
