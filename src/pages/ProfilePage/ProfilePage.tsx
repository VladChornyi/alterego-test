import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";

export const ProfilePage = () => {
  const { first_name, last_name, email } = useSelector(selectUser);
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
        {t("name", { first_name })}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t("lastName", { last_name })}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t("email", { email })}
      </Typography>
    </Box>
  );
};
