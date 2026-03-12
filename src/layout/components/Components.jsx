import {
  Box, Typography, Button, Container,
  Card, CardMedia, CardContent, Chip
} from "@mui/material";
import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const destacados = [
  {
    titulo: "MacBook Air M2",
    precio: "$6.800.000",
    etiqueta: "Más vendido",
    imagen: "https://mac-center.com/cdn/shop/files/IMG-5577525_3baed4c2-fda0-4c15-a391-643d0d54946a.jpg?v=1730306326&width=823",
  },
  {
    titulo: "iPhone 17 Pro",
    precio: "$5.800.000",
    etiqueta: "Nuevo",
    imagen: "https://mac-center.com/cdn/shop/files/IMG-18067830_m_jpeg_1_62ab681f-ce40-49f4-afca-e47b925d6e2f.jpg?v=1757469574&width=823",
  },
  {
    titulo: "iPad Air M3",
    precio: "$3.900.000",
    etiqueta: "Popular",
    imagen: "https://mac-center.com/cdn/shop/files/IMG-16741386_bfff4e75-367c-4c78-868b-2d7f2a022034.jpg?v=1741104621&width=823",
  },
  {
    titulo: "AirPods 4",
    precio: "$1.200.000",
    etiqueta: "Oferta",
    imagen: "https://mac-center.com/cdn/shop/files/IMG-14858597.jpg?v=1726245433&width=823",
  },
];

const beneficios = [
  {
    icon: <VerifiedIcon sx={{ fontSize: 36 }} />,
    titulo: "Productos 100% originales",
    descripcion: "Todos nuestros productos son oficiales Apple con garantía certificada.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 36 }} />,
    titulo: "Envío rápido",
    descripcion: "Entrega en 24-48 horas a todo el país, gratis en compras mayores a $500.000.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 36 }} />,
    titulo: "Soporte especializado",
    descripcion: "Equipo técnico certificado Apple disponible para ayudarte.",
  },
  {
    icon: <CreditScoreIcon sx={{ fontSize: 36 }} />,
    titulo: "Cuotas sin interés",
    descripcion: "Paga en hasta 12 cuotas sin interés con todas las tarjetas.",
  },
];

const etiquetaColor = {
  "Más vendido": "#000",
  "Nuevo": "#1565c0",
  "Popular": "#2e7d32",
  "Oferta": "#c62828",
};

function Components() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>

      {/* ── HERO ── */}
      <Box sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}>
        <Container maxWidth="md">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 3 }}>

            <Box
              component="img"
              src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-index-content-uploads-10.png"
              alt="Apple"
              sx={{ maxWidth: "100px", width: "100%" }}
            />

            <Box>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#000", mb: 3, letterSpacing: 1 }}>
                Ve nuestra gran colección de productos Apple
              </Typography>
              <Typography variant="h6" sx={{ color: "#555", mb: 4, fontWeight: 300, lineHeight: 1.7 }}>
                Descubre tecnología premium con diseño minimalista, elegante y funcional.
                Explora nuestra amplia gama de productos Apple y encuentra el dispositivo perfecto para ti.
              </Typography>
              <Button
                component={Link}
                to="/articulos"
                variant="contained"
                sx={{
                  backgroundColor: "#000", color: "#fff",
                  px: 6, py: 1.8, borderRadius: "50px",
                  textTransform: "none", fontSize: "16px", boxShadow: "none",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#333", transform: "translateY(-3px)" },
                }}
              >
                Explorar los artículos
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* ── PRODUCTOS DESTACADOS ── */}
      <Box sx={{ backgroundColor: "#f9f9f9", py: 10, px: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 1 }}>
          Productos destacados
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#000", margin: "0 auto 50px auto", borderRadius: 2 }} />

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center", maxWidth: 1100, mx: "auto" }}>
          {destacados.map((producto) => (
            <Card
              key={producto.titulo}
              sx={{
                width: 240, borderRadius: 3, boxShadow: "none",
                border: "1px solid #e0e0e0", transition: "0.3s",
                "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 30px rgba(0,0,0,0.08)" },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={producto.imagen}
                  alt={producto.titulo}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <Chip
                  label={producto.etiqueta}
                  size="small"
                  sx={{
                    position: "absolute", top: 10, left: 10,
                    bgcolor: etiquetaColor[producto.etiqueta],
                    color: "#fff", fontWeight: 700, fontSize: "11px",
                  }}
                />
              </Box>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "15px", mb: 0.5 }}>
                  {producto.titulo}
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: "18px", color: "#000", mb: 1.5 }}>
                  {producto.precio}
                </Typography>
                <Button
                  component={Link}
                  to="/articulos"
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#000", color: "#000",
                    textTransform: "none", borderRadius: "20px",
                    "&:hover": { bgcolor: "#000", color: "#fff" },
                  }}
                >
                  Ver producto
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <Box sx={{ py: 10, px: 4, backgroundColor: "#fff" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center", mb: 1 }}>
          ¿Por qué elegirnos?
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#000", margin: "0 auto 50px auto", borderRadius: 2 }} />

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center", maxWidth: 1100, mx: "auto" }}>
          {beneficios.map((b) => (
            <Box
              key={b.titulo}
              sx={{
                width: 240, textAlign: "center", p: 4,
                borderRadius: 3, border: "1px solid #e0e0e0",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 10px 30px rgba(0,0,0,0.07)" },
              }}
            >
              <Box sx={{ mb: 2, color: "#000" }}>{b.icon}</Box>
              <Typography sx={{ fontWeight: 700, mb: 1, fontSize: "15px" }}>
                {b.titulo}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.7 }}>
                {b.descripcion}
              </Typography>
            </Box>
          ))}

          {/* ── GITHUB ── */}
<Box sx={{
  backgroundColor: "#e8f0fe",
  py: 8, px: 4,
  textAlign: "center",
}}>
  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#000" }}>
    Explora el código del proyecto
  </Typography>
  <Typography sx={{ color: "#555", mb: 4, maxWidth: 500, mx: "auto", lineHeight: 1.7 }}>
    Este proyecto fue desarrollado con React y Material UI como una tienda Apple moderna
    para administración de productos. Puedes clonar el repositorio y usarlo como base
    para tus propios proyectos.
  </Typography>
  <Button
    variant="outlined"
    href="https://github.com/TU_USUARIO/TU_REPOSITORIO"
    target="_blank"
    sx={{
      borderColor: "#000", color: "#000",
      textTransform: "none", borderRadius: "8px",
      px: 4, py: 1.2, fontSize: "15px",
      "&:hover": { bgcolor: "#000", color: "#fff" },
    }}
  >
    Ver repositorio en GitHub
  </Button>
</Box>
        </Box>
      </Box>

    </Box>
  );
}

export default Components;