import { Box, Typography, Chip, Divider, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const compra = {
  id: "#ORD-4821",
  fecha: "5 de marzo, 2026",
  estado: "Entregado",
  productos: [
    {
      titulo: "MacBook Air M2",
      precio: "5.800.000",
      cantidad: 1,
      imagen: "https://mac-center.com/cdn/shop/files/IMG-5577525_3baed4c2-fda0-4c15-a391-643d0d54946a.jpg?v=1730306326&width=823",
    },
    {
      titulo: "Magic Mouse",
      precio: "380.000",
      cantidad: 1,
      imagen: "https://mac-center.com/cdn/shop/files/IMG-15335700.jpg?v=1730306417&width=823",
    },
  ],
};

const Miscompras = () => {

  const total = compra.productos.reduce((acc, p) => {
    return acc + Number(p.precio.replace(/\./g, "")) * p.cantidad;
  }, 0);

  return (
    <Box sx={{ p: { xs: 3, md: 6 }, maxWidth: 700, mx: "auto", minHeight: "100vh" }}>

      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Mis Compras
      </Typography>
      <Typography sx={{ color: "#888", mb: 4, fontSize: "15px" }}>
        Aquí puedes ver el historial de tus pedidos.
      </Typography>

      <Box sx={{
        border: "1px solid #e0e0e0", borderRadius: 3, overflow: "hidden",
        "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.07)" }, transition: "0.3s"
      }}>

        {/* CABECERA */}
        <Box sx={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 1, px: 3, py: 2,
          bgcolor: "#f9f9f9", borderBottom: "1px solid #e0e0e0"
        }}>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
              Pedido {compra.id}
            </Typography>
            <Typography sx={{ color: "#888", fontSize: "13px" }}>
              {compra.fecha}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
              ${total.toLocaleString("es-CO")}
            </Typography>
            <Chip
              icon={<CheckCircleIcon fontSize="small" />}
              label={compra.estado}
              color="success"
              size="small"
              sx={{ fontWeight: 600 }}
            />
          </Box>
        </Box>

        {/* PRODUCTOS */}
        <Box sx={{ px: 3, py: 2 }}>
          {compra.productos.map((producto, i) => (
            <Box key={producto.titulo}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, py: 1.5 }}>
                <Avatar
                  src={producto.imagen}
                  variant="rounded"
                  sx={{ width: 58, height: 58, border: "1px solid #f0f0f0" }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                    {producto.titulo}
                  </Typography>
                  <Typography sx={{ color: "#888", fontSize: "13px" }}>
                    Cantidad: {producto.cantidad}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
                  ${producto.precio}
                </Typography>
              </Box>
              {i < compra.productos.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default Miscompras;