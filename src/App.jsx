import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ScrollRestoration } from "react-router";

const LOGO = (
  <div className="h-14 w-20 bg-orange-500 rounded-lg flex_center text-white font-bold">
    LOGO
  </div>
);
function App() {
  return (
    <div className="font-mont">
      <header className="h-20 bg-white drop-shadow-md fixed w-full top-0 z-50">
        <Nav logo={LOGO} />
      </header>

      <main className="bg-slate-50 pt-20 flex_center">
        <ScrollRestoration />
        <Outlet />
      </main>

      <footer className="bg-zinc-900 text-white flex_center">
        <Footer logo={LOGO} />
      </footer>
    </div>
  );
}

export default App;
