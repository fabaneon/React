import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';

import App from './profilemain';
import Graphicdesign from './webgraphicmain';
import Python from './pythonmain';
import reportWebVitals from './reportWebVitals';

import './CSS/BasicDesign.css';

var lact = <>
<span id='NavBtn'><NavLink to={"/Portfolio-Profile_Website/"}>로비</NavLink></span>
<span id='NavBtn'><NavLink to={"/Portfolio-Profile_Website/main"}>프로필</NavLink></span>
<span id='NavBtn'><NavLink to={"/Web-Motion-Graphic/index"}>웹 모션 그래픽</NavLink></span>
<span id='NavBtn'><NavLink to={"/Python/index"}>Python</NavLink></span>
</>

function LobbyIndex(){
	return(
	<div id="App-Profile-main">
		<div id="App-Lobby">
			<p id="line">- - - -</p>
			<p className="title">
				개요
			</p>
			<p className="many-article">
				본 웹페이지는 저의 SW 지식과 학습의 결과물을 시각자료로 표현합니다.
			</p>
			<p id="line">- - - -</p>
			<span className="important" >	
				프로필
			</span>
			
			<p className="many-article">
				자기소개, 경력, 학습 로드맵등의 개인설명이 담겨있습니다.<br/>
				CSS 연습, JS 로직과 React 라이브러리 응용이 주목적입니다.
			</p>
			<p id="line">- - - -</p>			
			<span className="important" >	
				웹 모션 그래픽
			</span>

			<p className="many-article">
				HTML5로 구현한 바닐라 프로그래밍 결과물 2개가 게시되어 있습니다<br/>
				JavaScript 위주의 로직입니다.
			</p>
			<p id="line">- - - -</p>
			<span className="important" >	
				Python
			</span>
			<p className="many-article">
				Python으로 제작된 딥러닝 모델, 웹기능들이 게시되어 있습니다. 
			</p>
			<p id="line">- - - -</p>
		</div>
	</div>
	);
	
}

function Lobby(){
	return(
	<div id="App">
		<div id="Container">
			<header id="App-header">
				<span className="title">Welcome to My Portfolio!</span>
			</header>
		</div>
		<div id="App-main">
			<LobbyIndex />	
		</div>		
	</div>
	
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {lact}
      <Routes>
       <Route exact path="Portfolio-Profile_Website/" element={<Lobby />}></Route>
       <Route exact path="Portfolio-Profile_Website/*" element={<App />}></Route>
       <Route exact path="Web-Motion-Graphic/*" element={<Graphicdesign />}></Route>	
       <Route exact path="Python/*" element={<Python />}></Route>	
	  </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
