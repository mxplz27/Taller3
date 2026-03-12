import { Box, Typography } from "@mui/material";
import ArticleCard from "./ArticuloCard";
function Articulos({ favoritos, setFavoritos, carrito, setCarrito }) {


  const articulos = [
    {
      id: 1,
      titulo: "MacBook Air de 13 pulgadas M2",
      descripcion:
        "MacBook Air de 13 pulgadas con chip M2, pantalla Retina, teclado en español, batería de larga duración",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-5577525_3baed4c2-fda0-4c15-a391-643d0d54946a.jpg?v=1730306326&width=823",
      precio: "6.800.000",
      setFavoritos: setFavoritos,
      favoritos: favoritos,
    },
    {
      id: 2,
      titulo: "Magic Mouse",
      descripcion:
        "Ratón inalámbrico de Apple con diseño elegante y funcionalidad avanzada",
      precio: "500.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-15335700.jpg?v=1730306417&width=823",
      favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 3,
      titulo: "AirPods 4 con Cancelación Activa de Ruido",
      descripcion: "Sonido envolvente",
      precio: "1.200.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-14858597.jpg?v=1726245433&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 4,
      titulo: "Cargador MagSafe (2 m)",
      descripcion: "Cargador MagSafe de Apple con cable de 2 metros",
      precio: "250.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-14728057.png?v=1725933756&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 5,
      titulo: "2024 Apple Pencil Pro",
      descripcion:
        "Pencil de Apple con tecnología de punta de lápiz de alta precisión",
      precio: "900.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-13079419.jpg?v=1723747079&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 6,
      titulo: "iPad Air de 11 pulgadas M3",
      descripcion:
        "iPad Air de 11 pulgadas con chip M3, pantalla Liquid Retina",
      precio: "3.900.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-16741386_bfff4e75-367c-4c78-868b-2d7f2a022034.jpg?v=1741104621&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 7,
      titulo: "Mac mini M4",
      descripcion:
        "Mac mini con chip M4, procesador de 8 núcleos, memoria de 16 GB",
      precio: "4.200.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-15363036.jpg?v=1730306347&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 8,
      titulo: "CASE DECODED IPAD AIR 11 M2 LVNDR",
      descripcion: "Caja de protección para iPad Air 11 pulgadas",
      precio: "180.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/D24IPAA109SC1LR_1.png?v=1733296173&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 9,
      titulo: "Apple Watch Ultra 3 Correa Ocean Band",
      descripcion: "Apple Watch Ultra 3 con correa Ocean Band",
      precio: "5.500.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-18068064_m_jpeg_1.jpg?v=1757466405&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 10,
      titulo: "Protector Pantalla Belkin Watch Ultra 3",
      descripcion: "Protector de pantalla para Apple Watch Ultra 3",
      precio: "120.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/OWA003FQCL-2.jpg?v=1743722350&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 11,
      titulo:
        "CASE DECODED DROPTEC MAGSAFE IPHONE 17 PRO MAX CLEAR",
      descripcion: "Caja de protección para iPhone 17 Pro Max",
      precio: "200.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/D26IPO17PMBCT2TT_1.jpg?v=1758143528&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 12,
      titulo:
        "Multipuerto Hub QDOS Powerlink USB-C 8 en 1 - Gris Espacial",
      descripcion:
        "Multipuerto USB-C con 8 puertos para múltiples dispositivos",
      precio: "350.000",
      imagen:
        "https://mac-center.com/cdn/shop/products/QD-MH839C-SGMultipuertoQDOS1.webp?v=1676474950&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 13,
      titulo: "iPhone 17",
      descripcion: "Pantalla Super Retina XDR y batería de larga duración",
      precio: "4.800.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-18067880_m_jpeg_1_ee6e1f18-0849-40a1-8a71-74f078626d63.jpg?v=1757469609&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 14,
      titulo: "iPhone 17 Pro",
      descripcion: "Modelo Pro con mayor potencia y cámara avanzada",
      precio: "5.800.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-18067830_m_jpeg_1_62ab681f-ce40-49f4-afca-e47b925d6e2f.jpg?v=1757469574&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 15,
      titulo: "iPhone 17 Pro Max",
      descripcion: "Pantalla grande y máximo rendimiento",
      precio: "6.500.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-18067840_m_jpeg_1_640acf2f-2e91-46e9-887d-91956c0270c0.jpg?v=1757469538&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
    {
      id: 16,
      titulo: "iPhone 16 Pro",
      descripcion: "Rendimiento avanzado y diseño premium",
      precio: "5.200.000",
      imagen:
        "https://mac-center.com/cdn/shop/files/IMG-14858881_50542118-a32a-4951-b2db-72a4e08a34f4.jpg?v=1726245779&width=823",
        favoritos: favoritos,
      setFavoritos: setFavoritos,
    },
  ];

  return (
    <Box sx={{ p: 5 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 2,
        }}
      >
        Nuestros Productos
      </Typography>

      <Box
        sx={{
          width: "60px",
          height: "4px",
          backgroundColor: "#000",
          margin: "0 auto 40px auto",
          borderRadius: "2px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {articulos.map((articulo) => (
          <ArticleCard
            key={articulo.id}
            titulo={articulo.titulo}
            descripcion={articulo.descripcion}
            imagen={articulo.imagen}
            precio={articulo.precio}
            favoritos={articulo.favoritos}
            setFavoritos={articulo.setFavoritos}
            carrito={carrito}           
            setCarrito={setCarrito}     
          />
        ))}
      </Box>
    </Box>
  );
}

export default Articulos;