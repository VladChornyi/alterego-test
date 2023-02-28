import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { NewsItem } from "../../components";
import {
  selectNews,
  selectNewsPage,
  selectRenderLoadMore,
} from "../../redux/news/news-selector";
import { getNewsThunk, loadMoreNewsThunk } from "../../redux/news/news-thunk";
import { useAppDispatch } from "../../redux/store";
import { loadMore } from "../../redux/news/news-slice";

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const news = useSelector(selectNews);
  const shouldRenderLloadMore = useSelector(selectRenderLoadMore);
  const page = useSelector(selectNewsPage);

  useEffect(() => {
    dispatch(getNewsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (page === 1) return;
    dispatch(loadMoreNewsThunk(page));
  }, [page, dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <>
      <Grid container pt={5} pb={5} spacing={{ xs: 2, md: 3 }}>
        {news?.map((item) => (
          <Grid item key={item.id} xs={12} md={4} sm={6}>
            <NewsItem item={item} />
          </Grid>
        ))}
      </Grid>
      {shouldRenderLloadMore && (
        <Button
          style={{ display: "block", margin: "15px auto" }}
          variant="outlined"
          onClick={handleLoadMore}
        >
          {t("loadMore")}
        </Button>
      )}
    </>
  );
};
