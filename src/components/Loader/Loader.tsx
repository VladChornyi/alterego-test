import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { createPortal } from "react-dom";

const container = document.getElementById("modal");

export const Loader = () => {
  return (
    container &&
    createPortal(
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress />
      </Box>,
      container
    )
  );
};
