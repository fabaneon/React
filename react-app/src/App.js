import './App.css';


function Header(props){
      return(
        <header>
          <h1><u><a href="/" onClick={function (event){
            event.preventDefault();
            props.onChangeMode();
          }
          }>{props.title}</a></u></h1>
          <h3>환영합니다. 아래 목차를 통해서 React 학습 결과물을 열람해볼 수 있습니다 :)</h3>
          <h5>추신. 단기 Toy Project.</h5>
        </header>
      );
    }
function Nav(props){

  const lis = []
  for(let i = 0; i < props.links.length; i++){
    let a = props.links[i];
    lis.push(<li key={a.id}><a target ="_blank" rel="noreferrer" href={'/read/' + a.url}>{a.title}</a></li>);
  }
  return (
    <ul>
      {lis}
    </ul>
  );
}
function Article(props){
  return(
    <article>
      <p>
        <h2>{props.title}</h2>
        {props.body}
      </p>
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


function App() {
  let links = [
    {id:1, title: 'A_Button', url: "https://namu.wiki/w/A" },
    {id:2, title: 'B_Button', url: "https://namu.wiki/w/B" },
    {id:3, title: 'C_Button', url: "https://namu.wiki/w/C" }
  ]
    return(
      <div className="App">
        <Header title = "Welcome to my React Study."></Header>
        <Nav links = {links} ></Nav>
        <Article title ="기본 페이지" body="이곳은 기본 페이지 입니다."></Article>
      </div>
    );
}

export default App;
