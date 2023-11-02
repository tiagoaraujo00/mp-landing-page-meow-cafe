import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="h-screen bg-white flex justify-center">
      <div className="flex flex-col items-center
      ">
        <Header />
        <Main />
      </div>
    </div>
  );
}
