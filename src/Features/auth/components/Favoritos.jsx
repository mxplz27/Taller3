import ArticuloCard from "./ArticuloCard";

function Favoritos({ favoritos }) {

  return (
    <div style={{ padding: "40px" }}>
      <h1>Mis Favoritos</h1>

      <div style={{
        display: "flex",
        gap: "25px",
        flexWrap: "wrap"
      }}>
        {favoritos.map((item, index) => (
          <ArticuloCard
            key={index}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagen={item.imagen}
            precio={item.precio}
          />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;