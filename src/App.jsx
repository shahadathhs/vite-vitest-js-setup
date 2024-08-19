import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import PropTypes from "prop-types";
import { ThemeProvider } from "./providers/ThemeProvider";
import React from "react";
import AddUsers from "./pages/AddUsers";
import UsersProvider from "./providers/UsersProvider";

export default function App({ useRouter = true }) {
  const RouterComponent = useRouter ? Router : React.Fragment;

  return (
    <RouterComponent>
      <ThemeProvider>
        <UsersProvider>
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<AddUsers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        </UsersProvider>
      </ThemeProvider>
    </RouterComponent>
  );
}

App.propTypes = {
  useRouter: PropTypes.bool,
};
