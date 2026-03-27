/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { News } from "./pages/News";
import { Gallery } from "./pages/Gallery";
import { Conferences } from "./pages/Conferences";
import { Training } from "./pages/Training";
import { About } from "./pages/About";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <AuthProvider>
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
