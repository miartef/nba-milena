import estilos from "../styles/Card.module.css";

export function Card({ jogador }) {
  if (!jogador) return null;

  const { nome, foto } = jogador;

  return (
    <div className={estilos.card}>
      <div className={estilos.imageContainer}>
        <img src={foto} alt={`Foto de ${nome}`} className={estilos.foto} />
      </div>
      <div className={estilos.info}>
        <h3 className={estilos.nome}>{nome}</h3>
      </div>
    </div>
  );
}
