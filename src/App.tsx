import { Routes, Route } from "react-router-dom";
import AppProviders from "./AppProviders";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export default function App() {
  // TODO: should have a redux store to manage frequent visited contacts
  // TODO: should have a router with routes to home page and contact page

  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Contact />} />
      </Routes>
    </AppProviders>
  );
}
