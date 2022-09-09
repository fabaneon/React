import React from 'react'
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
    lis.push(<li key={a[i].class}><a target ="_blank" rel="noreferrer" id={a[i].class} href={'/read/' + a.body}
      onClick={function(event){
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }} >{a[i].title}</a></li>);
  
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
    const [mode, setMode] = useState('Welcome');
    const [id, setId] = useState(null);
    console.log(mode +": mode | id :" + id);
    let links = [
      [
        {id: 0, class: 0, title:'철벽생활관', body:  '박상우'},
        {id: 1, class: 0, title:'철벽생활관', body:  '정재엽'},
        {id: 2, class: 0, title:'철벽생활관', body:  '박준홍'},
        {id: 3, class: 0, title:'철벽생활관', body:  '황태훈'},
        {id: 4, class: 0, title:'철벽생활관', body:  '유근영'},
        {id: 5, class: 0, title:'철벽생활관', body:  '이연호'},
        {id: 6, class: 0, title:'철벽생활관', body:  '손창현'},
        {id: 7, class: 0, title:'철벽생활관', body:  '차승민'},
        {id: 8, class: 0, title:'철벽생활관', body:  '정현재'}, 
      ],
      [
        {id: 9,  class: 1, title:'결전생활관', body:  '김현재'},
        {id: 10, class: 1, title:'결전생활관', body:  '이주환'},
        {id: 11, class: 1, title:'결전생활관', body:  '변민주'},
        {id: 12, class: 1, title:'결전생활관', body:  '정재형'},
        {id: 13, class: 1, title:'결전생활관', body:  '류재국'},
        {id: 14, class: 1, title:'결전생활관', body:  '김연승'},
        {id: 15, class: 1, title:'결전생활관', body:  '박서준'},
    
      ],
      [
        {id: 16, class: 2, title:'태풍생활관', body:  '홍석준'},
        {id: 17, class: 2, title:'태풍생활관', body:  '박병인'},
        {id: 18, class: 2, title:'태풍생활관', body:  '고경엽'},
        {id: 19, class: 2, title:'태풍생활관', body:  '이대현'}
    
      ]  
    ]
    let ArticleContents = null;
    let title,body = null ;
    let bodyarticle = [];
    if(mode === 'Welcome'){
      ArticleContents = <Article title ="환영합니다" body="위 버튼을 클릭하여 생활관 제원을 알아보십시오."></Article>;
    }
    else if(mode === 'Read'){
        title = links[id][0].title;
        for(var i=0; i<links[id].length; i++){
          bodyarticle.push(<li key ={links[id][i].body}>{links[id][i].body}</li>);
        }
        console.log(bodyarticle);
        body = bodyarticle;
        ArticleContents = <Article title = {title} body={body}></Article>;
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

// 젠장.. 그냥 컨디션이 안좋아서 머리가 멍청했었나보다.
// 엄청나게 간단한 문제였고 useEffect는 개뿔 어려운 로직 구조도 아니였다.
// 시도4에 있는 코드를 보면 id가 아니라 i값으로 첫번째 생활관을 특정하려했다.
// 그냥 id값 어차피 0부터 시작하니 그걸로 잡으면되는데 왜그랬는지 참..
// 이제 어느정도 구문 구조가 머릿속에서 짜맞춰지는 기분이다.