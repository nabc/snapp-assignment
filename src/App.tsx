import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import AppProviders from "./AppProviders";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const Main = styled.main.attrs({
  className: "md:container my-2 md:my-8 mx-2 md:mx-auto rounded-2xl shadow-lg shadow-cyan-500/50 py-10 px-6 bg-white",
})``;

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
