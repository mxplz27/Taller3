import { Box, Typography, Chip, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const ofertas = [
  {
    id: 1,
    titulo: "MacBook Air M2",
    precioOriginal: "6.800.000",
    precioOferta: "5.800.000",
    descuento: 15,
    imagen: "https://mac-center.com/cdn/shop/files/IMG-5577525_3baed4c2-fda0-4c15-a391-643d0d54946a.jpg?v=1730306326&width=823",
  },
  {
    id: 2,
    titulo: "AirPods 4 con ANC",
    precioOriginal: "1.200.000",
    precioOferta: "960.000",
    descuento: 20,
    imagen: "https://mac-center.com/cdn/shop/files/IMG-14858597.jpg?v=1726245433&width=823",
  },
  {
    id: 3,
    titulo: "Magic Mouse",
    precioOriginal: "500.000",
    precioOferta: "380.000",
    descuento: 24,
    imagen: "https://mac-center.com/cdn/shop/files/IMG-15335700.jpg?v=1730306417&width=823",
  },
  {
    id: 4,
    titulo: "Apple Pencil Pro",
    precioOriginal: "900.000",
    precioOferta: "720.000",
    descuento: 20,
    imagen: "https://mac-center.com/cdn/shop/files/IMG-13079419.jpg?v=1723747079&width=823",
  },
  {
    id: 5,
    titulo: "Cargador MagSafe 2m",
    precioOriginal: "250.000",
    precioOferta: "190.000",
    descuento: 24,
    imagen: "https://mac-center.com/cdn/shop/files/IMG-14728057.png?v=1725933756&width=823",
  },
  {
    id: 6,
    titulo: "iPhone 16 Pro",
    precioOriginal: "5.200.000",
    precioOferta: "4.400.000",
    descuento: 15,
    imagen: "https://mac-center.com/cdn/shop/files/IMG-14858881_50542118-a32a-4951-b2db-72a4e08a34f4.jpg?v=1726245779&width=823",
  },
];

function Offers() {
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", p: 5 }}>

      {/* TÍTULO */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <LocalOfferIcon sx={{ fontSize: 40, mb: 1 }} />
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Ofertas especiales
        </Typography>
        <Typography variant="body1" sx={{ color: "#666" }}>
          Aprovecha los mejores precios en productos Apple
        </Typography>
        <Box sx={{ width: "60px", height: "4px", bgcolor: "#000", margin: "16px auto 0 auto", borderRadius: 2 }} />
      </Box>

      {/* TARJETAS */}
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}>
        {ofertas.map((oferta) => (
          <Card
            key={oferta.id}
            sx={{
              width: 260,
              borderRadius: 3,
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              position: "relative",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
              },
            }}
          >
            {/* BADGE DESCUENTO */}
            <Chip
              label={`-${oferta.descuento}%`}
              size="small"
              sx={{
                position: "absolute", top: 10, left: 10, zIndex: 1,
                bgcolor: "#c62828", color: "#fff",
                fontWeight: 700, fontSize: "12px",
              }}
            />

            <CardMedia
              component="img"
              image={oferta.imagen}
              alt={oferta.titulo}
              sx={{ height: 200, objectFit: "cover" }}
            />

            <CardContent sx={{ textAlign: "center" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "15px", mb: 1 }}>
                {oferta.titulo}
              </Typography>

              {/* PRECIOS */}
              <Typography sx={{ color: "#aaa", textDecoration: "line-through", fontSize: "13px" }}>
                ${oferta.precioOriginal}
              </Typography>
              <Typography sx={{ fontWeight: 800, fontSize: "20px", mb: 2 }}>
                ${oferta.precioOferta}
              </Typography>

              <Button
                component={Link}
                to="/articulos"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#000", color: "#fff",
                  textTransform: "none", borderRadius: "8px",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                Ver producto
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

    </Box>
  );
}

export default Offers;