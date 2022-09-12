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
function Memberlist(props){
  let memberlist = [
  {id: 0, title:'철벽생활관', body:  '박상우'},
  {id: 1, title:'철벽생활관', body:  '정재엽'},
  {id: 2, title:'철벽생활관', body:  '박준홍'},
  {id: 3, title:'철벽생활관', body:  '황태훈'},
  {id: 4, title:'철벽생활관', body:  '유근영'},
  {id: 5, title:'철벽생활관', body:  '이연호'},
  {id: 6, title:'철벽생활관', body:  '손창현'},
  {id: 7, title:'철벽생활관', body:  '차승민'},
  {id: 8, title:'철벽생활관', body:  '정현재'},

  {id: 9,  title:'결전생활관', body:  '김현재'},
  {id: 10, title:'결전생활관', body:  '이주환'},
  {id: 11, title:'결전생활관', body:  '변민주'},
  {id: 12, title:'결전생활관', body:  '정재형'},
  {id: 13, title:'결전생활관', body:  '류재국'},
  {id: 14, title:'결전생활관', body:  '김연승'},
  {id: 15, title:'결전생활관', body:  '박서준'},

  {id: 16, title:'태풍생활관', body:  '홍석준'},
  {id: 17, title:'태풍생활관', body:  '박병인'},
  {id: 18, title:'태풍생활관', body:  '고경엽'},
  {id: 19, title:'태풍생활관', body:  '이대현'}
  ];

  let mbr = [];
  for (var i = 0; i < memberlist.length; i++){
    if(props == 1 && memberlist[i].title === "철벽생활관"){
      mbr.push(memberlist[i]);
      console.log("들어간 값 : " + mbr);
    }
    else if(props == 2 && memberlist[i].title === "결전생활관"){
      mbr.push(memberlist[i]);
      console.log("들어간 값 : " + mbr);
    }
    else if(props == 3 && memberlist[i].title === "태풍생활관"){
      mbr.push(memberlist[i]);
      console.log("들어간 값 : " + mbr);
    }
    else{
      console.log("아무것도 못들어감");
    }
    console.log(i+"번째 반복 | 팀명 :" + memberlist[i].title);
  }

  console.log("클릭한 링크의 id값 : "+props);
  console.log(mbr);
  console.log("선택된 생활관 : "+mbr[0].title);


  // Article(mbr);
  // 이제 객체로 정리된 mbr 값을 Article 컴포넌트로 보내어 화면에 출력하면 된다.
  // 해당 내용은 state 개념 학습 후 진행.
}

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
        props.onChangeMode(event.target.id);
      }} >{a.title}</a></li>);

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
  const [mode, setMode] = useState(0);
  let links = [
    {id: 1, title: '철벽생활관', url: "https://namu.wiki/w/A" },
    {id: 2, title: '결전생활관', url: "https://namu.wiki/w/B" },
    {id: 3, title: '태풍생활관', url: "https://namu.wiki/w/C" }
  ]
  let ArticleContents = <Article title ="기본 페이지" body="이곳은 기본 페이지 입니다."></Article>;
  
    return(
      <div className="App">
        <Header title = "Welcome to my React Study." onChangeMode={()=>{alert('Header');}}></Header>
        <Nav links = {links} onChangeMode={function(id){
          Memberlist(id,);}}></Nav>
        {ArticleContents}

      </div>
    );
}

export default App;
