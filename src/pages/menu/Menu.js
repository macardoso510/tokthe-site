import { useState } from "react";
import comidas from "../../data/comidas";
import "./Menu.css";

export default function Menu() {
  const [pratoSelecionado, setPratoSelecionado] = useState(null);

  return (
    <div className="menu-container">
      <h1>Cardápio</h1>
      {comidas.map((categoria) => (
        <div key={categoria.categoria} className="menu-categoria">
          <h2>{categoria.categoria}</h2>
          <div className="menu-lista">
            {categoria.pratos.map((prato) => (
              <div
                key={prato.id}
                className="menu-card"
                onClick={() => setPratoSelecionado(prato)}
              >
                <img src="/noImg.png" alt={prato.nome} className="menu-thumb" />
                <div>
                  <h3>{prato.nome}</h3>
                  <p>{prato.descricao}</p>
                  <span className="menu-valor">
                    R$ {prato.valor.toFixed(2)}{" "}
                    {prato.quantidade > 1 && `| ${prato.quantidade} un.`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal de detalhes */}
      {pratoSelecionado && (
        <div className="menu-modal" onClick={() => setPratoSelecionado(null)}>
          <div
            className="menu-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/noImg.png"
              alt={pratoSelecionado.nome}
              className="menu-detalhe-img"
            />
            <h2>{pratoSelecionado.nome}</h2>
            <p>{pratoSelecionado.descricao}</p>
            <span className="menu-valor">
              R$ {pratoSelecionado.valor.toFixed(2)}{" "}
              {pratoSelecionado.quantidade > 1 &&
                `| ${pratoSelecionado.quantidade} un.`}
            </span>
            <button onClick={() => setPratoSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
