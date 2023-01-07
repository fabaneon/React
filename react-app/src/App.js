import React,{useState} from 'react'
import CRUD from './Component/CRUD/CRUD'
import Webprofile from './Component/Web-Profile/WebProfile';
import CLASSFUNCTION from './Component/class&function/classfunction';
import RandomChoice from './Component/randomchoice/randomchoice';
import Gamble from './Component/gamble/gamble'
import Posting from './Component/posting/posting'


import Daynighthandler from './function/js/daynighthandler';
import Comment from './function/js/comment';

function MainArticle(props){

  return(
    <div className="App-header">
      <h1 className="title">{props.title}</h1>
      <h3>{props.subtitle}</h3>
      {props.body}
    </div>
  );
}

function MainNav(props){

  return(
    <div >
        <li><a title="2022-09-22" href="/classfunction/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("CLASSFUNCTION");
      }} >클래스 코딩 방식 그리고  함수 코딩 방식</a></li>
      <li><a title="2022-09-04 ~ 2022-09-10" href="/CRUD/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("CRUD");
      }} >생활관 명단 기능</a></li>
      <li><a title="2022-09-11 ~ 18" href="/WebProfile/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("WEBPROFILE");
      }} >리액트 웹 포트폴리오 프로필</a></li>
            <li><a title="2022-09-24" href="/RandomChoice/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("RANDOMCHOICE");
      }} >죽음의 랜덤 뽑기</a></li>
            <li><a title="2022-10-01" href="/Gamble/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("GAMBLE");
      }} >갬블링</a></li>
            <li><a title="2023-01-01" href="/Posting/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode("POSTING");
      }} >글쓰기 기능</a></li>

    </div>
  );
}

function FooterArticle(){
  return(
    <div className="App-FooterArticle">
      <h3 className="title">종합 결과물</h3>
          <p>
            본 웹페이지는 구 웹페이지를 <span id="important">React Frame Work</span>기반으로 마이그레이션한 수정판입니다. <br/>
            <span className="notice">+2022-09-10 작성</span> <br/>
            <li><a target="_blank" rel="noreferrer" href="https://fabaneon.github.io/Portfolio-Profile_Website/">
              이후 발전된 HTML 작업물</a></li>
          </p>
   </div>
  );
}

function App(){
  const [mode, setMode] = useState('project-unselected');
  const [project, setProject] = useState('');
  // const [project, setProject] = useState('none')
  let Article,ArticleContents,Navi,button;

  if(mode === 'project-unselected'){
      Article = <MainArticle title = "Welcome to my React-Study" subtitle="환영합니다. 아래 목차를 통해서 React 학습 결과물을 열람해볼 수 있습니다 :)" body = "아래 버튼을 눌러 작업물을 확인해보세요."></MainArticle>
      Navi = <MainNav onChangeMode = {(project)=>{
        setMode('project-selected');
        setProject(project);
      }}></MainNav>
      button = null;
  }

  else if(mode === 'project-selected'){
    if(project === 'CRUD'){
      ArticleContents = <CRUD></CRUD>
    }
    else if(project === 'WEBPROFILE'){
      ArticleContents = <Webprofile></Webprofile>
      
    }
    else if(project === 'CLASSFUNCTION'){
      ArticleContents = <CLASSFUNCTION></CLASSFUNCTION>
      
    }
    else if(project === 'RANDOMCHOICE'){
      ArticleContents = <RandomChoice></RandomChoice>
      
    }
    else if(project === 'GAMBLE'){
      ArticleContents = <Gamble></Gamble>
      
    }
    else if(project === 'POSTING'){
      ArticleContents = <Posting></Posting>
      
    }
	 Article = null;

	 Navi = null;
    button = <button className="ReturnToLobby" onClick={()=>{setMode('project-unselected');}}>처음으로</button>
  }
  // console.log("mode : " + mode + " project : " + project);

  return(
     <div className="App">
      {/* <Daynighthandler></Daynighthandler> */}
        <div className="MainOption">
        {Article}
        
        {Navi}
        </div>
		{ArticleContents}
       
      <footer className="FooterOption">
          {button}
          <Comment></Comment>
      </footer> 
      <FooterArticle></FooterArticle>
    </div>
   

    
  );
  

}


export default App;

// 여태까지 만든 생성 추가  [ 수정과 삭제는 아직 미구현 ] 기능은 CRUD.JS 로 저장하여 불러와두었다.
// 이제 새로운 기능들을 React로 만들어 이러한 형식으로 저장할것이며 점차 Web-App의 규모를 늘려가볼 생각이다.
// 기존의 Web-Portfolio-Profile도 이곳으로 편입시켰다.