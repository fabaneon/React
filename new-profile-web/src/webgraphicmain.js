import {Route,Routes,NavLink} from 'react-router-dom';
import {useState} from 'react';
// 리액트의 함수형 컴포넌트에서 canvas요소 접근시 useRef를 사용
import Index from "./GraphicComponent/index";
import Space from "./GraphicComponent/interactivespace";
import GravityCannon from "./GraphicComponent/gravitycanon";

import "./CSS/Graphicmain.css";

function Canvas(){

	return (
	<Routes>
		<Route path="index" element={<Index />}></Route>
		<Route path="interactive-space" element={<Space />}></Route>
		<Route path="gravity-cannon" element={<GravityCannon />}></Route>

	</Routes>
	);
}


function Footer(){
	return(
	<Routes>
		<Route path="index" element={"Index"}></Route>
	</Routes>
	);
}

function Nav(props){
	var Navlists = props.Navlist;
	console.log(Navlists);
	var displayNav = [];
	


	for (var i=props.play; i < Navlists.length; i++){
		var a = Navlists[i];
		displayNav.push( 
			<div key={a.title+a.id} id="NavBtn">
				<NavLink id={a.id} className="NavBtn-text"
					title={a.subtitle}
					to={a.link}
					onClick={(event)=>{
					props.onChangeMode(Number(event.target.id));
					}}
					>
				{a.title}</NavLink>
			</div>
		)
	}

	return(
	<nav id='App-Graphic-Nav'>
		{displayNav}	
	</nav>
	);
		

}
function GraphicMain(){
	const Navlist = [
		{id: 0,title:"메인화면으로", subtitle:"메인화면으로 돌아갑니다", link:"index"},
		{id: 1,title:"원자 세계", subtitle: "마우스 상호작용 예제",link: "interactive-space"},
		{id: 2,title:"색깔공 대포", subtitle: "물리엔진 + 상호작용 예제",link: "gravity-cannon"}
	];
	const [mode, setMode] = useState("Welcome");
	const [id, setId] = useState(0);	

	if(mode === "Welcome"){
		var navigator = 
		<Nav play={1} Navlist={Navlist} onChangeMode={(id)=>{
				setId(id);
				console.log(id);
				setMode("Read");
			}}/>;		
	}
	else if (mode === "Read"){
		if(id === 0){
			setMode("Welcome");
		}
		else if(id !== 0){
		var navigator = 
		<Nav play={0} Navlist={Navlist} onChangeMode={(id)=>{
				setId(id);
				console.log(id);
				setMode("Read");
			}}/>;		
		}
	}
	return(
	<div id="App">
		<div id="Container">
			<header id="App-header">
				{navigator}
			</header>
		</div>
		<div id="App-main">
			<Canvas />	
		</div>
		
		<div id="App-Graphic-footer">
			<Footer />			
		</div>
	</div>
	);
}



export default GraphicMain;




