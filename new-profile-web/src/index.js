import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {useState} from 'react';
import Profile from './Component/Profile';
import About from './Component/About';
import Career from './Component/Career';
import Roadmap from './Component/Roadmap';
import Contact from './Component/Contact';
import Comment from './Component/Comment';



function Header(props){
  return(
    <header id="App-header">
      <span className='title'>{props.title}</span>
      <span className='subtitle'>{props.subtitle}</span>
    </header>
  );
}
function Nav(props){
  
  var navlist = [];
    for(var i = 0; i < props.list.length; i++){
      var a = props.list[i];
      navlist.push(
        <div key={a.id} id='NavBtn'><NavLink id={a.id}
        className="NavBtn-text"
        title={a.subtitle}
        to={a.link}
        onClick={(event)=>{
          // event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>
          {a.title}</NavLink></div>
      )
    };
  return(
    <nav id='App-Nav'>
      {navlist}
    </nav>
  );

}


function App() {
  const list = [
    {id:0, title:'About', subtitle:'저는 어떤사람일까요?', link:'about'},
    {id:1, title:'Career', subtitle:'지난 5년동안 지나온 나의 여정', link:'career'},
    {id:2, title:'RoadMap', subtitle:'앞으로 떠나야할 나의 여정', link:'roadmap'},
    {id:3, title:'Contact', subtitle:'건설적인 교류는 언제나 환영입니다.', link:'contact'},
  ];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(0);
  let navigator, leftside, rightside;
  if(mode ==='WELCOME'){
    if(list[4]){
      list.pop();
      console.log(list);
    }
    navigator = <Nav list = {list} onChangeMode={(id)=>{
      setId(id);
      setMode('READ')
    }}></Nav>;
    
  }  
  if(mode === 'READ'){
    if(id === 4){
      setMode('WELCOME');
      setId(0);
    }
    list.push({id:4, title:'ReturnToMain', subtitle:'메인화면으로 돌아갑니다.',link:'/'})
    navigator = <Nav list = {list} onChangeMode={(id)=>{
      setId(id);
      setMode('READ')
    }}></Nav>;
  }
  leftside = "aside";
  rightside = "aside";
  console.log("id : " + id + "  mode : " + mode);
  return (
    <div id="App">
      <div id='Container'>
      <Routes>
        <Route exact path={"/"} element={<Header title='Fabaneon_Web_Profile' subtitle='환영합니다.'></Header>}></Route>
        <Route exact path={"/about"} element={<Header title='About' subtitle='저는 어떤사람일까요?.'></Header>}></Route>
        <Route exact path={"/career"} element={<Header title='Career' subtitle='지난 5년동안 지나온 나의 여정.'></Header>}></Route>
        <Route exact path={"/roadmap"} element={<Header title='RoadMap' subtitle='앞으로 떠나야할 나의 여정'></Header>}></Route>
        <Route exact path={"/contact"} element={<Header title='Contact' subtitle='건설적인 교류는 언제나 환영입니다.'></Header>}></Route>
      </Routes>
          {navigator}
      
      </div>
      <main id='App-main'>
        
        <Routes>
          <Route exact path="/" element={<Profile />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/career" element={<Career />}></Route>
          <Route exact path="/roadmap" element={<Roadmap />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      
        <div id='App-leftside'>
          {leftside}
        </div>
        <div id='App-rightside'>
          {rightside}
        </div>
      </main>
      <footer>
          <div id="App-footer">
            <Comment></Comment>
            <h3 className="title">종합 결과물</h3>
                <article className="footer-description">
                  본 웹페이지는 구 웹페이지를 <span id="important">React Frame Work</span>기반으로 마이그레이션한 수정판입니다. <br/>
                  <span className="notice">+2022-09-13 작성</span> <br/>
                  <li><a target="_blank" rel="noreferrer" href="https://fabaneon.github.io/Portfolio-Profile_Website/">
                    이전 HTML 작업물</a></li>
                    2022-09-18 마지막 수정
                </article>
          </div>
      </footer> 
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
