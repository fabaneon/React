import {Route,Routes,NavLink} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';
// 리액트의 함수형 컴포넌트에서 canvas요소 접근시 useRef를 사용
import "./CSS/Graphicmain.css";

function Canvas(){

	const canvasRef = useRef(null); // 캔버스 useRef 사용
	const ctxRef = useRef(null); // 드로잉 context에 useRef 사용
	
	const [context, setContext] = useState(); // 드로잉 context의 state
	const [canvasTag, setCanvasTag] = useState([]); // 캔버스의 state
	
	useEffect(()=> {
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth * 0.5;
		canvas.height = window.innerHeight * 0.8;
	
		const ctx = canvas.getContext("2d");
		ctx.storkeStyle= "red";
		ctx.lineWidth = 2.5;
		ctxRef.current = ctx;
		
		
		setContext(ctxRef.current);
		setCanvasTag(canvas);

	}, []);
	
	
	return (
		<div id="canvas">
		<canvas ref = {canvasRef}>
		</canvas>
		</div>
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




