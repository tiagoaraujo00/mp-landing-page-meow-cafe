import Image from "next/image";
import { MapPin } from "lucide-react";
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
        <div className="w-45% h-56 bg-gradient-to-r from-red-950 to-red-300 rounded-3xl mt-24 relative">
          <div className="absolute bottom-8">
            <Image
              src="/combocoffee.png"
              alt="combo coffee"
              width={350}
              height={350}
            />
          </div>
          <div className="right-5 top-9 absolute text-end">
            <div className="text-white">
              <h1 className="font-bold text-4xl">Levamos até você</h1>
              <p className="mt-3 font-light text-[0.8rem]">
                Estamos nos principais aplicativos de Delivery!
              </p>
            </div>
            <div className="bg-white text-black font-semibold shadow-lg mt-6 rounded-full absolute right-0 px-16 py-1">
              <button className="text-base">Delivery</button>
            </div>
          </div>
        </div>
        <div className="mt-28 flex w-[90%] justify-between ml-12">
          <div className="w-[35%]">
            <p className="font-medium text-red-950">Sobre nós</p>
            <p className="font-bold text-red-950 text-2xl">
              Nós oferecemos uma experiência inesquecível para amantes de café e
              pais de pet!
            </p>
          </div>
          <div className="w-[40%]">
            <p className="font-semibold mb-3 text-[.9rem] text-red-950">
              O melhor lugar para apreciar o seu café
            </p>
            <div className="pb-2">
              <p className="text-[.8rem]">
                No Meow Cafe, priorizamos a criação de um espaço onde tanto os
                seres humanos quanto seus animais de estimação possam relaxar e
                desfrutar.
              </p>
            </div>
            <p className="text-[.8rem]">
              Nosso design interior é inspirado na harmonia e conforto, com
              sofás aconchegantes, iluminação suave e uma decoração que remete à
              natureza e à alegria que os animais trazem para nossas vidas.
            </p>
          </div>
        </div>
        <div className="w-45% h-56 bg-gradient-to-r from-red-950 to-red-300 rounded-3xl mt-24 relative mb-8">
          <div className="absolute bottom-0">
            <Image
              src="/ondeestamoscafe.png"
              alt="onde estamos cafe"
              width={350}
              height={350}
            />
          </div>
          <div className="right-0 absolute w-64 h-full bg-gradient-to-r from-red-300 to-red-950 rounded-r-3xl flex justify-center">
            <div className="flex flex-col items-start gap-3 w-[75%] mt-3">
              <h1 className="text-white font-bold text-xl">Onde estamos</h1>
              <div className="text-white font-extralight text-xs w-[70%] mt-3">
                <p>Você pode nos encontrar no endereço:</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-white">
                  <MapPin />
                </div>
                <div>
                  <p className="text-white font-extralight text-xs">
                    Rua do Miado 234, Gatolândia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
