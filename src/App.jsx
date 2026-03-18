import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu.jsx";
import Inicio from "./paginas/Inicio/Inicio.jsx";
import Exercicio1 from "./paginas/Exercicio1/Exercicio1.jsx";
import Exercicio2 from "./paginas/Exercicio2/Exercicio2.jsx";
import Exercicio3 from "./paginas/Exercicio3/Exercicio3.jsx";
import "./App.css";

const PAGINAS_TREINAMENTO = [
  { caminho: "/", titulo: "Inicio", componente: Inicio },
  { caminho: "/exercicio-1", titulo: "Exercicio 1", componente: Exercicio1 },
  { caminho: "/exercicio-2", titulo: "Exercicio 2", componente: Exercicio2 },
  { caminho: "/exercicio-3", titulo: "Exercicio 3", componente: Exercicio3 },
];

function LayoutAplicacao() {
  return (
    <div className="estrutura-aplicacao">
      <Menu paginas={PAGINAS_TREINAMENTO} />

      <main
        id="conteudo-principal"
        className="conteudo-principal"
        tabIndex={-1}
      >
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<LayoutAplicacao />}>
        {PAGINAS_TREINAMENTO.map(({ caminho, componente: Componente }) => {
          if (caminho === "/") {
            return <Route key={caminho} index element={<Componente />} />;
          }

          return (
            <Route
              key={caminho}
              path={caminho.replace(/^\//, "")}
              element={<Componente />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
