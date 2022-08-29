import { Routes, Route } from "react-router-dom";

import { Main } from "components/UiKit";

import AppProviders from "./AppProviders";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

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
