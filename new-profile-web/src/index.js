import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';

import App from './profilemain';
import Graphicdesign from './webgraphicmain';

import reportWebVitals from './reportWebVitals';

import './CSS/BasicDesign.css';

var lact = <>
<span id='NavBtn'><NavLink to={"/Portfolio-Profile_Website/"}>로비</NavLink></span>
<span id='NavBtn'><NavLink to={"/Portfolio-Profile_Website/main"}>프로필</NavLink></span>
<span id='NavBtn'><NavLink to={"/Web-Motion-Graphic/index"}>웹 모션 그래픽</NavLink></span>
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {lact}
      <Routes>
       <Route exact path="/Portfolio-Profile_Website/" element={"버튼을 눌러 탐색해보세요!"}></Route>
       <Route exact path="/Portfolio-Profile_Website/*" element={<App />}></Route>
       <Route exact path="/Web-Motion-Graphic/*" element={<Graphicdesign />}></Route>	
	  </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
