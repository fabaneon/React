import {Route,Routes,NavLink} from 'react-router-dom';
import {userRef} from 'react';
// 리액트의 함수형 컴포넌트에서 canvas요소 접근시 useRef를 사용
import "./BasicDesign.css";


function constructor(){
	var canvas = document.querySelector("#canvas");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener("resize", function (){ 
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;	
	});
}

function Index(){
	
	
	
	return (
		<canvas id="canvas">
			dasd
		</canvas>
	);
}

function GraphicMain(){
	

	
	return(
	<div id="App">
		<div id="Container">
			<header>
				<Routes></Routes>
			</header>
		</div>
		<div id="App-main">
			<Routes>
				<Route path="*" element={<Index />}></Route>
			</Routes>			
		</div>
	</div>
	);
}

export default GraphicMain;