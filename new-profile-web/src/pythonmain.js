import {Route,Routes,NavLink} from 'react-router-dom'
import './CSS/Pythonmain.css'
import PythonCRUD from './PythonComponent/PythonCRUD.js'
import PythonAI from './PythonComponent/PythonAI.js'

function PythonNav(props){
	let newlinks = props.navlists;
	let navlist = [];
	for (var i = 0; i < newlinks.length; i++){
		var a = newlinks[i]; 
		navlist.push(
			<div key={a.id+a.title} id="NavBtn">
				<NavLink id={a.id} className="NavBtn-text" 
					title={a.desc}
					to={a.title}>
						{a.title}
				</NavLink>
			</div>
		)
	}
	
	return(
		<div id="App-Python-Nav">
			{navlist}
		</div>

	);
	
}


function PythonContents(){
	return(
		<div id="App-Python-Main">
			<Routes>
				<Route path="PythonCRUD" element={<PythonCRUD/>}/>
				<Route path="PythonAI" element={<PythonAI/>}/>
			</Routes>
		</div>
	);
}

function Python(){
	
	const pythonnavlist = [
		{id:0, title:'PythonCRUD', desc:' Python을 이용한 커뮤니티 시스템'},
		{id:1, title:'PythonAI', desc:' Python을 이용한 머신러닝 AI모델'}		
	]
	
	
	return(
		<div id="Container">
			<div id="App-header">
				<h1 id="title"> Python model </h1>
			</div>
			<PythonNav navlists={pythonnavlist}/>
			
			
			<PythonContents />
		</div>
	);
}


export default Python;