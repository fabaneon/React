import react,{useState} from 'react';
import './App.css';

function Header(){

  
  return(
    <header className="App-header">
        <h1 id = "title"><u>Welcome to my React-Profile !</u></h1>
        <h3>환영합니다. 아래 목차를 통해서 절 소개해드리겠습니다 :)</h3>
        <h5>빠르지만 서두르진 말고.. 조금씩 서로에 대해 알아보자구요.</h5>
    </header>

  );

}


function Nav(){
  return(
  <nav className="App-nav">
            <ul>
          <p>
            <li><a href="about.html" title="자신에 대한 소개글">About Me</a></li>
            Fabaneon이라는 사람의 이야기를 들려드리겠습니다.<br/>
          </p>
          <p>
            <li><a href="career.html" title="2018.01 ~ 2022.02">My Career</a></li>
            최근 3년간 걸어온 길을 확인하실 수 있습니다.<br/>
          </p>
          <p>
            <li><a href="roadmap.html" title="앞으로 나아갈 길">Own RoadMap</a></li>
            앞으로의 계획을 확인하실 수 있습니다.<br/>
          </p>
          <p>
            <li><a href="contact.html" title="연락수단">Contact</a></li>
            연락수단을 남겨두었습니다.<br/>
          </p>
        </ul>
  </nav>

  );
}

function Article(){
  return(
    <section className="App-MainArticle">
      <h3 id="title">종합 결과물</h3>
        <ul>
          <p>
            본 웹페이지는 구 웹페이지를 <span id="important">React Frame Work</span>기반으로 마이그레이션한 수정판입니다. <br/>
            <span id="notice">+2022-09-10 작성</span> <br/>
          </p>
        </ul>
   </section>
  );
  
}



// function daynight(props){

//   const body = {
//     setColor:function(color) {
//       document.querySelector('body').style.color = color;
//     },
//     setbackgroundColor:function(color) {
//       document.querySelector('body').style.backgroundColor = color;
//     }
//   };
  
//   let important = {
//     setColor:function(color) {
//       var important_color = document.querySelectorAll('#important');
//       var i = 0;
//       while(true){
//         important_color[i].style.color = color;
//         i++;
//         if (i >= important_color.length){
//           i = 0;
//           break;
//         }
//       }
//     },
//     setbackgroundColor:function(color) {
//       var important_bgcolor = document.qeurySelectorAll('#important');
//       var i = 0;
//       while(true){
//         important_bgcolor[i].style.backgroundColor = color;
//         i++;
//         if (i >= important_bgcolor.length){
//           i = 0;
//           break;
//         }
//       }
//     }
//   };
  
//   let title = {
//     setColor:function(color) {
//       var title_color = document.querySelectorAll('#title');
//       var i = 0;
//       while(true){
//         title_color[i].style.color = color;
//         i++;
//         if (i >= title_color.length){
//           i = 0;
//           break;
//         }
//       }
//     },
//     setbackgroundColor:function(color) {
//       var title_bgcolor = document.qeurySelectorAll('#title');
//       var i = 0;
//       while(true){
//         title_bgcolor[i].style.backgroundColor = color;
//         i++;
//         if (i >= title_bgcolor.length){
//           i = 0;
//           break;
//         }
//       }
//     }
//   };
  

//     if(props.value === 'Day Mode'){
//       props.value = 'Night Mode';

//       body.setColor('black');
//       body.setbackgroundColor('white');
//       title.setColor('white');
//       title.setbackgroundColor('grey');
//       important.setColor('indianred');
//     }

//     else                        {
//       props.value = 'Day Mode';

//       body.setColor('white');
//       body.setbackgroundColor('black');
//       title.setColor('yellow');
//       title.setbackgroundColor('black');
//       important.setColor('green');
//     }
// }


function App() {
  const [mode, setMode] = useState('WELCOME');
  const [choice, setChoice] = useState('');

  let headerArticle, navArticle, mainArticle = null;

  headerArticle = <Header onChangeMode={()=>{
    setMode('WELCOME');
  }}></Header>
  navArticle = <Nav onChangeMode={()=>{
    setMode('READ');}}></Nav>
  mainArticle = <Article></Article>

  return (
    <div className="App">
      {headerArticle}
      {/* <input type="button" value="Night Mode" onClick={daynight(this)}/> */}
      {navArticle}
      <main>
      
         {mainArticle}
      </main>
    </div>
  );
}

export default App;
