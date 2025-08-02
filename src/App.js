import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Values from "./pages/values/Values";
import Menu from "./pages/menu/Menu";
import WorkWithUs from "./pages/workWithUs/WorkWithUs";
import NotFound from "./pages/notFound/NotFound";

export default function App() {
  const location = useLocation();

  const isNotFound = location.pathname !== "/" &&
    location.pathname !== "/sobre" &&
    location.pathname !== "/valores" &&
    location.pathname !== "/cardapio" &&
    location.pathname !== "/trabalhe-conosco";

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/valores" element={<Values />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

  function Home() {
    return <h1>Home</h1>;
  }
}