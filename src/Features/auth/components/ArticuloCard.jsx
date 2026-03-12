import { useState } from "react";
import {
  Card, CardContent, CardMedia, Typography,
  CardActions, Button, IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ArticuloCard({ titulo, descripcion, imagen, precio, favoritos, setFavoritos, carrito, setCarrito }) {

  const esFavorito = favoritos?.some((item) => item.titulo === titulo);
  const enCarrito = carrito?.some((item) => item.titulo === titulo);  // ← nuevo

  const toggleFavorito = () => {
    if (esFavorito) {
      setFavoritos(favoritos.filter((item) => item.titulo !== titulo));
    } else {
      setFavoritos([...favoritos, { titulo, descripcion, imagen, precio }]);
    }
  };

  const toggleCarrito = () => {
    if (enCarrito) {
      setCarrito(carrito.filter((item) => item.titulo !== titulo));
    } else {
      setCarrito([...carrito, { titulo, descripcion, imagen, precio, cantidad: 1 }]);
    }
  };

  return (
    <Card
      sx={{
        width: 260,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #e0e0e0",
        borderRadius: 3,
        boxShadow: "none",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardMedia component="img" image={imagen} alt={titulo}
        sx={{ height: 200, width: "100%", objectFit: "cover" }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#000" }}>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {descripcion}
        </Typography>
        <Typography variant="h5" sx={{ color: "#000", fontWeight: "bold" }}>
          {"$" + precio.toLocaleString("es-CO")}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          size="small"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={toggleCarrito}
          sx={{
            backgroundColor: enCarrito ? "#333" : "#000",
            color: "#fff",
            textTransform: "none",
            "&:hover": { backgroundColor: "#555" },
          }}
        >
          {enCarrito ? "Agregado" : "Agregar"}
        </Button>

        <IconButton onClick={toggleFavorito} sx={{ color: esFavorito ? "#d32f2f" : "#000" }}>
          {esFavorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ArticuloCard;