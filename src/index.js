import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home';
import PrivacyPolicy from './components/Politica_de_Privacidade';
import footer from './components/rodapé';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
           <Routes>
               <Route path='/'  exact={true} element={<HomePage/>}/>
               <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
               <Route path='/footer' element={<footer/>} />
           </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

