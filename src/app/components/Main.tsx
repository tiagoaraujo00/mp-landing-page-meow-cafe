import capuccino from "../../../public/capuccino.png";

export default function Main() {
  return (
    <main className="w-5/6 pl-6 pt-32">
      <div className="flex flex-col items-center">
        <div className="w-5/6 flex flex-col items-center gap-4 text-red-950 ">
          <div>
            <h2 className="text-2xl font-semibold border-b border-b-red-950">
              Cafés
            </h2>
          </div>
          <p className="text-center">
            Conheça nossos cafés exclusivos pensados e preparados por nossos
            baristas renomados.
          </p>
          <span className="font-semibold">Veja Todos {">"}</span>
        </div>
        <div className="w-full">
        </div>
      </div>
      <div>
        <div>Croissants</div>
        <div>Sobre Nós</div>
        <div>Onde estamos</div>
      </div>
    </main>
  );
}
