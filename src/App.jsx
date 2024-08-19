// import TestWithMockData from "./components/TestWithMockData";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

import React from 'react';

export default function App({ useRouter = true }) {
  // const data = [
  //   { id: 1, first_name: 'Fletcher', last_name: 'McVanamy', email: 'mmcvanamy0@e-recht24.de' },
  //   { id: 2, first_name: 'Clarice', last_name: 'Harrild', email: 'charrild1@dion.ne.jp' },
  // ]

  const RouterComponent = useRouter ? Router : React.Fragment;

  return (
    // <main className="min-h-screen">
    //   <TestWithMockData data={data} />
    // </main>
    <RouterComponent>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </RouterComponent>
  )
}

import PropTypes from 'prop-types';

App.propTypes = {
  useRouter: PropTypes.bool
};