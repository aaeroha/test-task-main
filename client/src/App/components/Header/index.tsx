import { Box, Container, Divider, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Container>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="h1" fontSize="h3.fontSize" sx={{ mb: 2 }}>
            Аукционы
          </Typography>
          <Divider />
        </Box>
      </Container>
      <Outlet />
    </>
  );
};
