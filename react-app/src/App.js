import './App.css';

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
  {id: 0, team:"철벽생활관", name:  "박상우"},
  {id: 1, team:"철벽생활관", name:  "정재엽"},
  {id: 2, team:"철벽생활관", name:  "박준홍"},
  {id: 3, team:"철벽생활관", name:  "황태훈"},
  {id: 4, team:"철벽생활관", name:  "유근영"},
  {id: 5, team:"철벽생활관", name:  "이연호"},
  {id: 6, team:"철벽생활관", name:  "손창현"},
  {id: 7, team:"철벽생활관", name:  "차승민"},
  {id: 8, team:"철벽생활관", name:  "정현재"},

  {id: 9,  team:"결전생활관", name:  "김현재"},
  {id: 10, team:"결전생활관", name:  "이주환"},
  {id: 11, team:"결전생활관", name:  "변민주"},
  {id: 12, team:"결전생활관", name:  "정재형"},
  {id: 13, team:"결전생활관", name:  "류재국"},
  {id: 14, team:"결전생활관", name:  "김연승"},
  {id: 15, team:"결전생활관", name:  "박서준"},

  {id: 16, team:"태풍생활관", name:  "홍석준"},
  {id: 17, team:"태풍생활관", name:  "박병인"},
  {id: 18, team:"태풍생활관", name:  "고경엽"},
  {id: 19, team:"태풍생활관", name:  "이대현"}
  ];

  let mbr = [];
  for (var i = 0; i < memberlist.length; i++){
    if(props == 1 && memberlist[i].team === "철벽생활관"){
      mbr.push( memberlist[i].team + " : " + memberlist[i].name + `\n`);
      console.log("들어간 값 : " + mbr);
    }
    else if(props == 2 && memberlist[i].team === "결전생활관"){
      mbr.push( memberlist[i].team + " : " + memberlist[i].name + `\n`);
      console.log("들어간 값 : " + mbr);
    }
    else if(props == 3 && memberlist[i].team === "태풍생활관"){
      mbr.push( memberlist[i].team + " : " + memberlist[i].name + `\n`);
      console.log("들어간 값 : " + mbr);
    }
    else{
      console.log("아무것도 못들어감");
    }
    console.log(i+"번째 반복 | 팀명 :" + memberlist[i].team);
  }

  console.log("클릭한 링크의 id값 : "+props);
  console.log(mbr);

  alert(mbr);
}

function Header(props){
      return(
        <header>
          <h1><u><a href="/" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a></u></h1>
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
  let links = [
    {id: 1, title: '철벽생활관', url: "https://namu.wiki/w/A" },
    {id: 2, title: '결전생활관', url: "https://namu.wiki/w/B" },
    {id: 3, title: '태풍생활관', url: "https://namu.wiki/w/C" }
  ]
    return(
      <div className="App">
        <Header title = "Welcome to my React Study." onChangeMode={()=>{alert('Header');}}></Header>
        <Nav links = {links} onChangeMode={function(id){Memberlist(id);}}></Nav>
        <Article title ="기본 페이지" body="이곳은 기본 페이지 입니다."></Article>

      </div>
    );
}

export default App;
