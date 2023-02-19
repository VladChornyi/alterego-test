import { useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { selectNews } from "../../redux/news/news-selector";
import { getNewsThunk } from "../../redux/news/news-thunk";
import { useAppDispatch } from "../../redux/store";
import { NewsItem } from "../../components/NewsItem/NewsItem";

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);

  return (
    <Grid container pt={5} pb={5} spacing={{ xs: 2, md: 3 }}>
      {news?.map((item) => (
        <Grid item key={item.id} xs={12} md={4} sm={6}>
          <NewsItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
