import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="h-screen bg-rose-300/30 flex justify-center">
      <div className="flex flex-col w-11/12">
        <Header />
        {/* <Main /> */}
      </div>
    </div>
  );
}
