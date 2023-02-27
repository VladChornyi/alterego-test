import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1976d2",
        paddingTop: "1rem",

        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              {t("glory")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | React-i18next | Redux | TypeScript`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
