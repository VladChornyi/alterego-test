import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 500,
        margin: "0 auto",
        padding: "150px 20px",
        color: "#1976d2",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {t("work")}
      </Typography>
      <Typography mt={5} variant="h5" gutterBottom>
        {t("developer")}
      </Typography>
    </Box>
  );
};
