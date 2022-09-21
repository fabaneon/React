import {useState} from 'react';
import Profile from './Component/Profile';
import About from './Component/About';
import Career from './Component/Career';
import Roadmap from './Component/Roadmap';
import Contact from './Component/Contact';
import Comment from './Component/Comment';
import './App.css';


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
    for(var i = 1; i < props.list.length; i++){
      var a = props.list[i];
      navlist.push(
        <div key={a.id} id='NavBtn'><a id={a.id}
        className="NavBtn-text"
        title={a.subtitle}
        href={"/read/" + a.title}
        onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>
          {a.title}</a></div>
      )
    };
  return(
    <nav id='App-Nav'>
      {navlist}
    </nav>
  );

}
function Footer(){
  var displaytime="2022-09-18 마지막 수정"

  return(
    <div id="App-footer">
      <Comment></Comment>
      <h3 className="title">종합 결과물</h3>
          <p className="footer-description">
            본 웹페이지는 구 웹페이지를 <span id="important">React Frame Work</span>기반으로 마이그레이션한 수정판입니다. <br/>
            <span className="notice">+2022-09-13 작성</span> <br/>
            <li><a target="_blank" rel="noreferrer" href="https://fabaneon.github.io/Portfolio-Profile_Website/">
              이전 HTML 작업물</a></li>
              {displaytime}
          </p>
   </div>
  );
}


function App() {
  const list = [
    {id:0, title:'Fabaneon_Web_Profile', subtitle:'환영합니다.'},    
    {id:1, title:'About', subtitle:'저는 어떤사람일까요?'},
    {id:2, title:'Career', subtitle:'지난 5년동안 지나온 나의 여정'},
    {id:3, title:'RoadMap', subtitle:'앞으로 떠나야할 나의 여정'},
    {id:4, title:'Contact', subtitle:'건설적인 교류는 언제나 환영입니다.'},
  ];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  let header, navigator, article, leftside, rightside, footer;

  if(mode ==='WELCOME'){
    if(list[5]){
      list.pop();
      console.log(list);
    }
    header = <Header title={list[0].title} subtitle={list[0].subtitle}></Header>
    article = <Profile></Profile>
    navigator = <Nav list = {list} onChangeMode={(id)=>{
      setId(id);
      setMode('READ')
    }}></Nav>;
    
  }  
  if(mode === 'READ'){
    if(id === 1){
      header = <Header title={list[id].title} subtitle={list[id].subtitle}></Header>
      article = <About></About>
    }
    else if(id === 2){
      header = <Header title={list[id].title} subtitle={list[id].subtitle}></Header>
      article = <Career></Career>
    }
    else if(id === 3){
      header = <Header title={list[id].title} subtitle={list[id].subtitle}></Header>
      article = <Roadmap></Roadmap>
    }
    else if(id === 4){
    header = <Header title={list[id].title} subtitle={list[id].subtitle}></Header>
    article = <Contact></Contact>  
    }
    else if(id === 5){
      setMode('WELCOME');
    }
    list.push({id:5, title:'Return to Main', subtitle:'메인화면으로 돌아갑니다.'})
    navigator = <Nav list = {list} onChangeMode={(id)=>{
      setId(id);
      setMode('READ')
    }}></Nav>;
  }

  footer = <Footer></Footer>
  leftside = "aside";
  rightside = "aside";
  console.log("id : " + id + "  mode : " + mode);
  return (
    <div id="App">
      <div id='Container'>
      
          {header}

          {navigator}

      </div>
      <main id='App-main'>

          {article}
   
        <div id='App-leftside'>
          {leftside}
        </div>
        <div id='App-rightside'>
          {rightside}
        </div>
      </main>
      <footer>
        {footer}
      </footer> 
    </div>
  );
}

export default App;
