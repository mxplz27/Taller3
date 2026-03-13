import { Box, Typography, Divider, Link, Stack } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Términos de uso", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Soporte", href: "#" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
        color: "white",
        pt: 5,
        pb: 3,
        px: { xs: 3, md: 8 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 3,
          mb: 4,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#c9a96e",
              mb: 0.5,
            }}
          >
            Sistema Carrito
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Gestión con elegancia
          </Typography>
        </Box>

        <Stack direction="row" spacing={{ xs: 2, sm: 4 }} flexWrap="wrap" useFlexGap>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="none"
              sx={{
                fontFamily: "'Georgia', serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.06em",
                transition: "color 0.25s ease",
                "&:hover": { color: "#c9a96e" },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)", mb: 3 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          © {currentYear} Sistema Carrito · Todos los derechos reservados
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#4caf50",
              animation: "pulse 2.5s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1, transform: "scale(1)" },
                "50%": { opacity: 0.5, transform: "scale(0.8)" },
              },
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.08em",
            }}
          >
            Sistema activo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;