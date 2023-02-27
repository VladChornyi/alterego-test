import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { logout } from "../../redux/auth/auth-slice";
import { useAppDispatch } from "../../redux/store";

export const LogoutBtn = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <Button onClick={handleClick} color="inherit" variant="outlined">
      {t("logOut")}
    </Button>
  );
};
