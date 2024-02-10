import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";

type LoaderProps = {
  toggl: boolean;
};

export const Loader: FC<LoaderProps> = ({ toggl }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={toggl}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
