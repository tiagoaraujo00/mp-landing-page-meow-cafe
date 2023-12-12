import Image from "next/image";

export default function Main() {
  return (
    <main className="w-5/6 pt-32 ml-24">
      <div className="flex flex-col items-center">
        <div className="w-5/6 flex flex-col items-center gap-4 text-red-950 ">
          <div>
            <h2 className="text-2xl font-semibold border-b border-b-red-950">
              Cafés
            </h2>
          </div>
          <p className="text-center w-[66%]">
            Conheça nossos cafés exclusivos pensados e preparados por nossos
            baristas renomados.
          </p>
          <span className="font-semibold pt-2">Veja Todos {">"}</span>
        </div>
        <div className="w-full flex justify-center gap-[11rem] mt-16">
          <div className="bg-gradient-to-t from-pink-400 to-pink-200 h-[16rem] w-40 rounded-3xl pt-4">
            <Image
              src="/capuccino.png"
              alt="capuccino"
              width={230}
              height={230}
            />
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex flex-col gap-2">
                <p className="text-sm">R$ 24,00</p>
                <h2 className="font-semibold">Capuccino</h2>
                <p className="text-sm mb-5">
                  Café expresso , leite vaporizado, espuma e um toque de
                  caramelo.
                </p>
              </div>
              <div className="bg-white w-[90%] rounded-full shadow-xl">
                <button className="text-black font-bold">Delivery</button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t from-amber-700 to-amber-200 h-[16rem] w-40 rounded-3xl pt-0">
            <Image
              src="/cafeaoleite.png"
              alt="cafe ao leite"
              width={230}
              height={230}
            />
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex flex-col gap-2">
                <p className="text-sm">R$ 16,00</p>
                <h2 className="font-semibold">Café ao Leite</h2>
                <p className="text-sm mb-5">
                  O clássico, amado pelos brasileiros, com um toque de
                  sofisticação!
                </p>
              </div>
              <div className="bg-white w-[90%] rounded-full shadow-xl">
                <button className="text-black font-bold">Delivery</button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t from-orange-950 to-slate-900 h-[16rem] w-40 rounded-3xl pt-4">
            <Image
              src="/cafepreto.png"
              alt="cafe preto"
              width={230}
              height={230}
            />
            <div className="flex flex-col items-center text-white text-center">
              <div className="flex flex-col gap-2">
                <p className="text-sm">R$ 12,00</p>
                <h2 className="font-semibold">Café preto</h2>
                <p className="text-sm mb-5">
                  Grãos selecionados feitos no seu método de preparo favorito.
                </p>
              </div>
              <div className="bg-white w-[90%] rounded-full shadow-xl">
                <button className="text-black font-bold">Delivery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[83%] mt-16 ml-24">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl text-red-950">Croissants</h1>
            <h2 className="text-red-950 text-2xl font-medium">
              Conheça nossa receita
            </h2>
            <div className="w-[45%] text-[12px]">
              <p>
                A nossa receita de Croissant vai te surpreender. Croissants
                clássicos ou recheados!
              </p>
            </div>
            <p className="font-bold text-red-950">Todos os croissants {">"}</p>
          </div>
          <div>
            <Image
              src="/croissant.png"
              alt="croissant"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div>Sobre Nós</div>
        <div>Onde estamos</div>
      </div>
    </main>
  );
}
