import estilos from "../styles/Header.module.css";

export function Header() {
  return (
    <header className={estilos.header}>
      <div className={estilos.container}>
        <h1>🏀 NBA Astros Gallery</h1>
      </div>
    </header>
  );
}
