import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white flex justify-center">
      <div>
        <header className="flex items-center gap-4 p-8">
          <div className="flex items-center">
            <Image width={120} height={120} src="/meowLogo.png" alt="Logo Meow" />
            <div>
              <span className="font-extrabold text-shadow text-shadow-y-2">Meow Café</span>
            </div>
          </div>
          <div>
            <nav className="flex space-x-8 font-semibold">
              <span>Início</span>
              <span>Produtos</span>
              <span>Sobre</span>
            </nav>
          </div>
          <div className="flex gap-6 pl-28 items-center">
            <span>Login</span>
            <div className="flex items-center justify-center bg-red-950 rounded-full px-4">
              <button className="text-white">Delivery</button>
            </div>
          </div>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </div>
  );
}
