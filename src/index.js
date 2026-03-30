import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from './pages/Country';
import Jazz from './pages/Jazz';
import Soul from './pages/Soul';
import Reggae from './pages/Reggae';
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path ="/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="country" element={<Country />} />
          <Route path="jazz" element={<Jazz />} />
          <Route path="soul" element={<Soul />} />
          <Route path="reggae" element={<Reggae />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

