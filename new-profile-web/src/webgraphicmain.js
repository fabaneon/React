import {Route,Routes,NavLink} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
// 리액트의 함수형 컴포넌트에서 canvas요소 접근시 useRef를 사용
import Index from "./GraphicComponent/test";

import "./CSS/Graphicmain.css";

function Canvas(){

	return (
	<Routes>
		<Route path="*" element={<Index />}></Route>
	</Routes>
	);
}
function Leftside(){
	return(
	<Routes>
		<Route path="*" element={"Index"}></Route>
	</Routes>
	);
}


function Footer(){
	return(
	<Routes>
		<Route path="*" element={"Index"}></Route>
	</Routes>
	);
}

function GraphicMain(){
		
	return(
	<div id="App">
		<div id="Container">
			<header id="App-header">
				<Routes>
					<Route path="*" element={"index"}></Route>
				</Routes>
			</header>
		</div>
		<div id="App-main">
			<div id="App-Leftside">
				<Leftside />
			</div>
			<Canvas />	
		</div>
		
		<div id="App-footer">
			<Footer />			
		</div>
	</div>
	);
}



export default GraphicMain;




