import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import ListNews from "./pages/list-news/ListNews";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
