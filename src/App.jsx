import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import "./App.css";
import estilos from "./styles/App.module.css";
import imgLebron from "./assets/lebron.png";
import imgCurry from "./assets/curry.png";
import imgGiannis from "./assets/giannis.png";
import imgJokic from "./assets/jokic.png";
import imgLuka from "./assets/luka.png";
import imgTatum from "./assets/tatum.png";

const ASTROS_NBA = [
  { id: 1, nome: "LeBron James", foto: imgLebron },
  { id: 2, nome: "Stephen Curry", foto: imgCurry },
  { id: 3, nome: "Giannis Antetokounmpo", foto: imgGiannis },
  { id: 4, nome: "Luka Dončić", foto: imgLuka },
  { id: 5, nome: "Nikola Jokić", foto: imgJokic },
  { id: 6, nome: "Jayson Tatum", foto: imgTatum },
];

const App = () => {
  const [astros, setAstros] = useState([]);

  useEffect(() => {
    setAstros(ASTROS_NBA);
  }, []);

  return (
    <div className={estilos.appContainer}>
      <Header />
      <main className={estilos.gridJogadores}>
        {astros.map((astro) => (
          <Card key={astro.id} jogador={astro} />
        ))}
      </main>
    </div>
  );
};

export default App;
