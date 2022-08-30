import { Routes, Route } from "react-router-dom";

import AppProviders from "./AppProviders";
import { Main } from "./styled.components";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AppProviders>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Contact />} />
        </Routes>
      </Main>
    </AppProviders>
  );
}
