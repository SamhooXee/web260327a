/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { News } from "./pages/News";
import { Gallery } from "./pages/Gallery";
import { Conferences } from "./pages/Conferences";
import { Training } from "./pages/Training";
import { About } from "./pages/About";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
