import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { FloatingWhatsApp } from './components/ContactSection';
import ProductModal from './components/ProductModal';
import RouteEffects from './components/RouteEffects';
import { Button } from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import './styles.css';
function App() {
 const {pathname}=useLocation();
 const [detail,setDetail]=useState(null);
 const closeDetail=useCallback(()=>setDetail(null),[]);
 return <>
  <RouteEffects onNavigate={closeDetail}/>
  <a className="skip-link" href="#principal">Pular para o conteúdo</a>
  <Header page={pathname.replace(/\/$/,'')||'/'}/>
  <main id="principal" tabIndex={-1}>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/quem-somos" element={<About/>}/>
    <Route path="/produtos" element={<Products onSelect={setDetail}/>}/>
    <Route path="*" element={<section className="page-hero"><h1>Página não encontrada.</h1><Button to="/">Voltar ao início</Button></section>}/>
   </Routes>
  </main>
  <Footer/><FloatingWhatsApp/>
  <ProductModal product={detail} onClose={closeDetail}/>
 </>;
}
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
