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
    console.log(a[i].class);
    lis.push(<li key={a[i].class}><a target ="_blank" rel="noreferrer" id={a[i].class} href={'/read/' + a.url}
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
function App() {
  // const _mode = useState(0);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('Welcome');
  const [id, setId] = useState(Number(null));
  console.log(mode + " 모드 : 아이디 " + id);

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
    {id: 19, class: 2, title:'태풍생활관', body:  '이대현'},
    {id: 20, class: 2, title:'태풍생활관', body:  '가나다'}

  ]  
    ];
  console.log(links[0][1].class);
  console.log(links[0][1]);
  let ArticleContents = null;
  // 원인을 찾아냈다.
  // 문법은 정확하게 맞지만 작동되지않는 이유는 State 함수로 선언된
  // id 값 문제였다.
  // state 함수는 비동기적인 async특징 때문에 links 배열에 있는 값이 undefined 된채로
  // links를 불러왔기에 .length나 links[n] 이 제대로 읽히지 않는것이다.
  // useEffect 라는 함수를 활용하라고 하는데 더 공부를 해봐야겠다.
  if(mode === 'Welcome'){
    ArticleContents = <Article title ="기본 페이지" body="이곳은 기본 페이지 입니다."></Article>;
  }
  else if(mode === 'Read'){
    let title, body = null;
    let bodyArticle = [];
    console.log(links.length + ":" + links[0].length);
    
    for(let i=0; i<=links[id].length; i++){ 
      console.log("i의 증가" + i + ":" + links[0].length);
      console.log(links[i][1].class);
      if(Number(links[i][id].class) === id)
      {
           
        title = links[i][id].title;
        for(let t=0; t<links[i].length; t++){
        bodyArticle.push(links[i][t].body+`\n`);
        }
        
        body = bodyArticle;
      }    
    }
    ArticleContents = <Article title ={title} body={body}></Article>;    
  }
  console.log({ArticleContents});
  
    return(
      <div className="App">
        <Header title = "Welcome to my React Study." onChangeMode={()=>{setMode('Welcome');}}></Header>
        <Nav links = {links} onChangeMode={function(id){
          setMode('Read');setId(id);}}></Nav>
        {ArticleContents}

      </div>
    );
}

export default App;
