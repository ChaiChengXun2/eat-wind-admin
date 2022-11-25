import React from 'react'
import Admin from './Admin';
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
        <Route path="/" element={<Admin />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App