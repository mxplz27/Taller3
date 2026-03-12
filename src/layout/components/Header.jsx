import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar, Toolbar, Typography, Button, Box,
  IconButton, InputBase, Badge, Popover,
  List, ListItem, ListItemText, Divider,
  ListItemAvatar, Avatar, Drawer
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CasesIcon from "@mui/icons-material/Cases";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Header({ favoritos, carrito = [], setCarrito }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);  // ← nuevo

  const abrirCarrito = (e) => setAnchorEl(e.currentTarget);
  const cerrarCarrito = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  const sumar = (titulo) => {
    setCarrito(carrito.map((item) =>
      item.titulo === titulo ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const restar = (titulo) => {
    setCarrito(carrito
      .map((item) =>
        item.titulo === titulo ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter((item) => item.cantidad > 0)
    );
  };

  const totalCarrito = carrito.reduce((acc, item) => {
    const precioLimpio = Number(item.precio.replace(/\./g, "").replace(",", "."));
    return acc + precioLimpio * item.cantidad;
  }, 0);

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // Links del menú reutilizables
  const menuLinks = [
    { to: "/", label: "Inicio", icon: <HomeIcon /> },
    { to: "/Articulos", label: "Productos", icon: <ArticleIcon /> },
    { to: "/Ofertas", label: "Ofertas", icon: <LocalOfferIcon /> },
    { to: "/MiCuenta", label: "Mi Cuenta", icon: <AccountCircleIcon /> },
    { to: "/Favoritos", label: `Favoritos ${favoritos?.length > 0 ? `(${favoritos.length})` : ""}`, icon: <BookmarkAddIcon /> },
    { to: "/MisCompras", label: "Mis Compras", icon: <CasesIcon /> },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: "#f5f5f5", color: "#333" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LOGO */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Sistema Carrito
        </Typography>

        {/* MENU DESKTOP — se oculta en móvil */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={NavLink} to="/" startIcon={<HomeIcon />} color="inherit">
            Inicio
          </Button>
          <Button component={NavLink} to="/Articulos" startIcon={<ArticleIcon />} color="inherit">
            Productos
          </Button>
          <Button component={NavLink} to="/Ofertas" startIcon={<LocalOfferIcon />} color="inherit">
            Ofertas
          </Button>
          <Button component={NavLink} to="/MiCuenta" startIcon={<AccountCircleIcon />} color="inherit">
            Mi Cuenta
          </Button>
          <Button component={NavLink} to="/Favoritos" color="inherit">
            <Badge
              badgeContent={favoritos?.length || 0}
              color="error"
              sx={{ mr: 1, "& .MuiBadge-badge": { fontSize: "11px", minWidth: "18px", height: "18px" } }}
            >
              <BookmarkAddIcon />
            </Badge>
            Favoritos
          </Button>
          <Button component={NavLink} to="/MisCompras" startIcon={<CasesIcon />} color="inherit">
            Mis compras
          </Button>
        </Box>

        {/* BUSCADOR + CARRITO + HAMBURGUESA */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Buscador — solo en desktop */}
          <Box sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "white",
            px: 1,
            borderRadius: 1,
            border: "1px solid #ccc"
          }}>
            <InputBase placeholder="Buscar..." />
            <SearchIcon />
          </Box>

          {/* CARRITO */}
          <IconButton color="inherit" onClick={abrirCarrito}>
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* HAMBURGUESA — solo en móvil */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>

      </Toolbar>

      {/* MENÚ DESPLEGABLE DEL CARRITO */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={cerrarCarrito}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ width: 360, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            🛒 Mi Carrito
          </Typography>
          <Divider sx={{ mb: 1 }} />

          {carrito.length === 0 ? (
            <Typography color="text.secondary" sx={{ py: 2, textAlign: "center" }}>
              No hay productos en el carrito
            </Typography>
          ) : (
            <>
              <List disablePadding>
                {carrito.map((item) => (
                  <ListItem key={item.titulo} disablePadding sx={{ mb: 1 }}>
                    <ListItemAvatar>
                      <Avatar src={item.imagen} variant="rounded" sx={{ width: 50, height: 50, mr: 1 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "12px" }}>
                          {item.titulo}
                        </Typography>
                      }
                      secondary={`$${item.precio}`}
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      <IconButton size="small" onClick={() => restar(item.titulo)}
                        sx={{ border: "1px solid #ccc", borderRadius: 1, p: 0.3 }}>
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ minWidth: 20, textAlign: "center", fontWeight: 600 }}>
                        {item.cantidad}
                      </Typography>
                      <IconButton size="small" onClick={() => sumar(item.titulo)}
                        sx={{ border: "1px solid #ccc", borderRadius: 1, p: 0.3 }}>
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>Total:</Typography>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  ${totalCarrito.toLocaleString("es-CO")}
                </Typography>
              </Box>

              <Button fullWidth variant="contained"
                sx={{ mt: 2, bgcolor: "#000", color: "#fff", textTransform: "none", "&:hover": { bgcolor: "#333" } }}>
                Finalizar compra
              </Button>
            </>
          )}
        </Box>
      </Popover>

      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { width: 260 } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, py: 1.5 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Menú</Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", pt: 1 }}>
          {menuLinks.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              startIcon={link.icon}
              color="inherit"
              onClick={() => setMobileOpen(false)}
              sx={{
                justifyContent: "flex-start",
                px: 3,
                py: 1.2,
                fontSize: "15px",
                textTransform: "none",
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Drawer>

    </AppBar>
  );
}

export default Header;