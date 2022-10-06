import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import ArsipPage from './pages/ArsipPage';
import DetailPage from './pages/DetailPage';
import PageNotFound from './pages/404Page';

const App =()=> {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/buat" element={<AddPage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
