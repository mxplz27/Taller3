import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        color: "white",
        textAlign: "center",
        py: 2
      }}
    >
      <Typography variant="body2">
        © 2026 Sistema Carrito - Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;