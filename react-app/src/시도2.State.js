import React, {Component} from 'react'
import './App.css';
import {useState} from 'react';

function Article(props){
  return(
    <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
      );
}

    // function Title_Button(){
    //   return (
    //     <section>
    //       <input type="text" id ="input_title" placeholder="변경할 제목을 입력">
    //       <button type ="button" onClick={title_replacer()}> 제목 변경</button>
    //     </section>
    //   );
    // }

function Header(props){
      return(
        <header>
          <h1><u><a href="/" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a></u></h1>
          <img src="logo192.png" alt="logo"/>
          <h3>환영합니다. 아래 목차를 통해서 React 학습 결과물을 열람해볼 수 있습니다 :)</h3>
          <h5>추신. 단기 Toy Project.</h5>
        </header>
      );
    }
function Nav(props){
  const lis = []
  for(let i = 0; i < props.links.length; i++){
    let a = props.links[i];
    lis.push(<li key={a.id}><a target ="_blank" rel="noreferrer" id={a.id} href={'/read/' + a.url}
      onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
        
      }} >{a.title}</a></li>);
  
  }
  return (
    <ul>
      {lis}
    </ul>
  );
}
function App(){

  
    // const _mode = useState(0);
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState('0');
    const [id, setId] = useState(null);
    console.log(mode +" : " + setMode);
    let links = [
      {id: 0, title: '철벽생활관', body: "이곳은 철벽 생활관 입니다." },
      {id: 1, title: '결전생활관', body: "이곳은 결전 생활관 입니다." },
      {id: 2, title: '태풍생활관', body: "이곳은 태풍 생활관입니다." }
    ]
    let ArticleContents = null;
    if(mode === 'Welcome'){
      ArticleContents = <Article title ="기본 페이지" body="이곳은 기본 페이지 입니다."></Article>;
    }
    else if(mode === 'Read'){
        ArticleContents = <Article title = {links[id].title} body={links[id].body}></Article>;
    }
    

    
    return(
      <div className="App">
        <Header title = "Welcome to my React Study." onChangeMode={()=>{setMode('Welcome');}}></Header>
        <Nav links = {links} onChangeMode={function(id){
          setMode('Read');setId(id)}}></Nav>
        {ArticleContents}

      </div>
    );
  

}

export default App;
