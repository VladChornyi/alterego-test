import Button from "@mui/material/Button";
import { logout } from "../../redux/auth/auth-slice";
import { useAppDispatch } from "../../redux/store";

export const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <Button onClick={handleClick} color="inherit" variant="outlined">
      Log out
    </Button>
  );
};
