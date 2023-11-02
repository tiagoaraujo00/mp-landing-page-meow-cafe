import React from "react";

export default function Main() {
  return (
    <main className="w-5/6 pl-6 pt-32">
      <div>
        <div className="w-5/6 flex flex-col items-center">
          <h2>Cafés</h2>
          <p>
            Conheça nossos cafés exclusivos pensados e preparados por nossos
            baristas renomados.
          </p>
          <span>Veja Todos {">"}</span>
        </div>
      </div>
      <div>Croissants</div>
      <div>Sobre Nós</div>
      <div>Onde estamos</div>
    </main>
  );
}
