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
function App() {
  // const _mode = useState(0);
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('Welcome');
  const [id, setId] = useState(null);
  console.log(mode +" 모드 : 셋모드 " + setMode);
  console.log(id + " 아이디 : 셋아이디 " + setId);

  let links = [
    [
    {id: 0, class: 1, title:'철벽생활관', body:  '박상우'},
    {id: 1, class: 1, title:'철벽생활관', body:  '정재엽'},
    {id: 2, class: 1, title:'철벽생활관', body:  '박준홍'},
    {id: 3, class: 1, title:'철벽생활관', body:  '황태훈'},
    {id: 4, class: 1, title:'철벽생활관', body:  '유근영'},
    {id: 5, class: 1, title:'철벽생활관', body:  '이연호'},
    {id: 6, class: 1, title:'철벽생활관', body:  '손창현'},
    {id: 7, class: 1, title:'철벽생활관', body:  '차승민'},
    {id: 8, class: 1, title:'철벽생활관', body:  '정현재'}, 
  ],
  [
    {id: 9,  class: 2, title:'결전생활관', body:  '김현재'},
    {id: 10, class: 2, title:'결전생활관', body:  '이주환'},
    {id: 11, class: 2, title:'결전생활관', body:  '변민주'},
    {id: 12, class: 2, title:'결전생활관', body:  '정재형'},
    {id: 13, class: 2, title:'결전생활관', body:  '류재국'},
    {id: 14, class: 2, title:'결전생활관', body:  '김연승'},
    {id: 15, class: 2, title:'결전생활관', body:  '박서준'},

  ],
  [
    {id: 16, class: 3, title:'태풍생활관', body:  '홍석준'},
    {id: 17, class: 3, title:'태풍생활관', body:  '박병인'},
    {id: 18, class: 3, title:'태풍생활관', body:  '고경엽'},
    {id: 19, class: 3, title:'태풍생활관', body:  '이대현'},
    {id: 20, class: 3, title:'태풍생활관', body:  '가나다'}

  ]  
    ];
  
  let ArticleContents = null;
  if(mode === 'Welcome'){
    ArticleContents = <Article title ="기본 페이지" body="이곳은 기본 페이지 입니다."></Article>;
  }
  else if(mode === 'Read'){
    let title, body = null;
    for(let i=0; i<links; i++)
    { if(links[i].id === id)
      {
        title = links[i].title;
        body = links[i].body;
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

// 상위 함수
// 	하위 함수


// 상위 함수에서 계산 다하고 하위 함수에게 보내어 "출력만 시켜야한다."

// 그렇다면 출력되는 값만 계속 바뀌어서 나오게 하려면?

// 하위 함수는 받는값에서 특정 값을 골라내 출력하는건 가능 = [일단 값을 객체로 전부 받아야한다.]

// 하지만 하위 함수에서 특정 외부[상위] 함수를 호출하여 계산후 해당 결과를 출력하는건 불가능.

// + 하지만, 이미 상위 함수로부터 받은 props의 값을 수정할 수 는 있다.

// =====

// App.js는 첫 실행때 이미 전부 컴파일되어버린다.

// 따라서 첫 실행 이후 변경되는 값을 계산해야하는데...

// 이 계산을 상위함수에서 한 후 하위함수에서 출력하는것이 맞다.

// 그렇다면 아래는 어떨까?

// ===

// 1버튼을 누르면 / => 1에 대한 정보가 화면에 출력


// 최고위함수 {

// 	<상위 함수> </상위함수>
// }


export default App;
