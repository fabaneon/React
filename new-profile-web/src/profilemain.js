
import {Route,Routes,NavLink} from 'react-router-dom';
import {useState} from 'react';
import Profile from './ProfileComponent/Profile';
import About from './ProfileComponent/About';
import Career from './ProfileComponent/Career';
import Roadmap from './ProfileComponent/Roadmap';
import Contact from './ProfileComponent/Contact';
import Comment from './ProfileComponent/Comment';




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
  var subnavlist = [];
    for(var i = 0; i < props.list.length; i++){
      var a = props.list[i];
      navlist.push(
        <div key={a.id} id='NavBtn'><NavLink id={a.id}
        className="NavBtn-text"
        title={a.subtitle}
        to={"/Portfolio-Profile_Website"+a.link}
        onClick={(event)=>{
          // event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>
          {a.title}</NavLink></div>
      )
    };
    // for(var i = 0; i < props.list.length; i++){
    //   var a = props.list[i];
    //   navlist.push(
    //     <div key={a.id} id='NavBtn'><NavLink id={a.id}
    //     className="NavBtn-text"
    //     title={a.subtitle}
    //     to={"/Portfolio-Profile_Website"+a.link}
    //     onClick={(event)=>{
    //       // event.preventDefault();
    //       props.onChangeMode(Number(event.target.id));
    //     }}>
    //       {a.title}</NavLink></div>
    //   )
    // };

  return(
    <nav id='App-Profile-Nav'>
      {navlist}
      {subnavlist}
    </nav>
  );
}


function App() {
  const list = [
    {id:0, title:'About', subtitle:'저는 어떤사람일까요?', link:'/about'},
    {id:1, title:'Career', subtitle:'지난 5년동안 지나온 나의 여정', link:'/career'},
    {id:2, title:'RoadMap', subtitle:'앞으로 떠나야할 나의 여정', link:'/roadmap'},
    {id:3, title:'Contact', subtitle:'건설적인 교류는 언제나 환영입니다.', link:'/contact'},
  ];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(0);
  let navigator;
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
    list.push({id:4, title:'ReturnToMain', subtitle:'메인화면으로 돌아갑니다.',link:'/main'})
    navigator = <Nav list = {list} onChangeMode={(id)=>{
      setId(id);
      setMode('READ')
    }}></Nav>;
  }
  console.log("id : " + id + "  mode : " + mode);
  return (
    <div id="App">
      <div id='Container'>
        <header>
            <Routes>

              <Route path={"*"} element={
              <Header title='Fabaneon_Web_Profile' subtitle='환영합니다.'></Header>}>
              </Route>

              <Route path={"about"} element={
              <Header title='About' subtitle='저는 어떤사람일까요?.'></Header>}></Route>

              <Route path={"career/*"} element={
              <Header title='Career' subtitle='지난 5년동안 지나온 나의 여정.'></Header>}></Route>

              <Route path={"roadmap"} element={
              <Header title='RoadMap' subtitle='앞으로 떠나야할 나의 여정'></Header>}></Route>

              <Route path={"contact"} element={
              <Header title='Contact' subtitle='건설적인 교류는 언제나 환영입니다.'></Header>}></Route>

            </Routes>
            {navigator}
        </header>
      </div>
      <main id='App-Profile-main'>
        
        <Routes>
         <Route element={"Not Found"} />
          <Route path="*" element={<Profile />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="career/*" element={<Career />}></Route>
          <Route path="roadmap" element={<Roadmap />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      
        <div id='App-Profile-leftside'>
          <Routes>
            <Route path="*" element={"Profile"}></Route>
            <Route path="about" element={"about"}></Route>
            <Route path="career/*" element={"career"}></Route>
            <Route path="roadmap" element={"roadmap"}></Route>
            <Route path="contact" element={"contact"}></Route>
          </Routes>
        </div>
        <div id='App-Profile-rightside'>
        <Routes>
            <Route  path="*" element={"Profile"}></Route>
            <Route  path="about" element={"about"}></Route>
            <Route  path="career/*" element={"career"}></Route>
            <Route  path="roadmap" element={"roadmap"}></Route>
            <Route  path="contact" element={"contact"}></Route>
          </Routes>
        </div>
      </main>
      <footer>
		  <div id="App-Profile-footer">
            <Comment></Comment>
		  </div>
    	  <article className="footer-description">
        	<h3 className="title">종합 결과물</h3>
			 본 웹페이지는 구 웹페이지를 <span id="important">React Frame Work</span>기반으로 마이그레이션한 수정판입니다. <br/>
                 <span className="notice">+2022-09-13 작성</span> <br/>
                <li><a target="_blank" rel="noreferrer" href="https://fabaneon.github.io/Portfolio-Profile_Website/">
                이전 HTML 작업물</a></li>
                2022-09-18 마지막 수정
		  </article>
	  </footer> 
		
    </div>
  );
}

export default App;