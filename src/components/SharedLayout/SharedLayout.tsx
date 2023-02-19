import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { Header } from "./Header";
import { Footer } from "./Footer/Footer";
import * as S from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Container>
          <Suspense fallback={<p>Loading</p>}>
            <Outlet />
          </Suspense>
        </Container>
      </S.Main>
      <Footer />
    </>
  );
};
