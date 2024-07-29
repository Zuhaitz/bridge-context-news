import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import ListNews from "./pages/list-news/ListNews";

function App() {
  return (
    <BrowserRouter>
      <section className="layout">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<ListNews />} />
          </Routes>
        </main>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
