import Image from "next/image";

function Header() {
  return (
    <header className="flex flex-col w-full relative items-center">
      <div className="flex ml-24 items-center z-10 w-4/5">
        <div className="flex items-center">
          <Image width={120} height={120} src="/meowLogo.png" alt="Logo Meow" />
          <div>
            <span className="font-extrabold text-shadow text-shadow-y-2">
              Meow Café
            </span>
          </div>
        </div>
        <div className="ml-16">
          <nav className="flex space-x-8 font-semibold text-shadow text-shadow-y-2 text-red-950">
            <span>Início</span>
            <span>Produtos</span>
            <span>Sobre</span>
          </nav>
        </div>
        <div className="flex gap-6 items-center z-10 ml-[11rem]">
          <span className="text-red-950 font-semibold">Login</span>
          <div className="flex items-center justify-center bg-red-950 rounded-full px-4">
            <button className="text-white">Delivery</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-32 mt-9 text-shadow w-4/5 text-shadow-y-2 gap-2 text-red-950">
        <div className="w-56">
          <p className="font-bold">Sabor inesquecível</p>
        </div>
        <div>
          <h1 className="font-bold text-6xl w-56">Meow Café</h1>
        </div>
        <div className="w-[28%] text-sm">
          Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria
          tem um espaço confortável para você e seu melhor amigo.
        </div>
      </div>
      <div>
        <Image
          src="/Imagemheader.png"
          alt="Header image"
          width={500}
          height={500}
          className="absolute left-[33rem] top-0 bg-blend-overlay"
        />
      </div>
    </header>
  );
}

export default Header;
