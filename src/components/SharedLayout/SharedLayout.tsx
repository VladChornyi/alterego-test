import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "../../components";
import * as S from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </S.Main>
      <Footer />
    </>
  );
};
