import React from 'react'
import {useState} from 'react';


function Article(props){
  
  return(
    <article >
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
        <header className="App-header">
          <h1 className="title"><u><a href="/" onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode();
          }}>{props.title}</a></u></h1>
          <img width="150px" height="150px"src="img/logo192.png" alt="logo"/>
        </header>
      );
    }
function Nav(props){
  const lis = []
      for(let i = 0; i < props.links.length; i++){
        let a = props.links[i];
        lis.push(<li key={a[0].class}><a target ="_blank" rel="noreferrer" id={a[0].class} href={'/read/' + a[0].title}
        onClick={function(event){
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }} >{a[0].title}</a></li>);
      }

 
  return (
    <ul>
      {lis}
    </ul>
  );
}
function Add(props){
  return(
    <article>
      <h1>Adding name</h1>
        <form onSubmit={(event)=>{
          event.preventDefault();
          let body = event.target.body.value;
          props.onAdd(body);
          }}>
          <p>이름 추가 <input type="text" name="body" placeholder="input name"/></p>
          <p><input type="submit" value="Add"/></p>      
        </form>
        
    </article>
  );
}
function Create(props){
  return (
    <article>
      <h1>Create</h1>
      <form onSubmit={(event)=>{
        event.preventDefault();
        let title = event.target.title.value;
        let body = event.target.body.value;
        props.onCreate(title,body);
      }}>
        <p><input type="text" name="title" placeholder="input title"/></p>
        <p><textarea name="body" paceholder="input body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>

      </form>

    </article>);
}

function CRUD(){


    // const _mode = useState(0);
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState('Welcome');
    const [id, setId] = useState(null);
    const [nextLocal, setNextlocal] = useState(20);
    const [nextId, setNextId] = useState(3);
    console.log(mode +": mode | id :" + id + " nextId : " + nextId);
    let [links, setLinks] = useState([
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
    ]);
    let ArticleContents = null;
    let title,body = null ;
    if(mode === 'Welcome'){
      ArticleContents = <Article title ="MainIdea - 배열-객체 와 state" body="위 버튼을 클릭하여 생활관 제원을 알아보십시오."></Article>;
    }
    else if(mode === 'Read'){
        let bodyarticle = [];
        title = links[id][0].title;
        for(var i=0; i<links[id].length; i++){
          bodyarticle.push(<div key ={links[id][i].body}> {links[id][i].body}</div>);
        }
        bodyarticle.push(<input key = "addingBtn"type="button" value="Adding" onClick={()=>{setMode('Add')}}/>);
        body = bodyarticle;
        ArticleContents = <Article title = {title} body={body}></Article>;
        
    }
    else if(mode === 'Create'){

      ArticleContents = <Create onCreate={(create_title,create_body)=>{
        const newlinks = {id:nextLocal, class:nextId, title:create_title, body:create_body}
        const newlink = links;
        newlink[nextId] = [];
        newlink[nextId].push(newlinks);
        setLinks(links);
        setMode('Read');
        setId(nextId);
        setNextId(nextId+1);
        setNextlocal(nextLocal+1);
      }}></Create>;

    }
    else if(mode === 'Add'){

      ArticleContents = <Add onAdd={(Add_body)=>{
        const addlinks = {id:nextLocal, class:links[id][0].class, title:links[id][0].title, body:Add_body}
        const addlink = links;
        const length = links[id].length
        console.log(id + " id : 길이 " + length);
        // addlink[id][length] = ;
        console.log(nextLocal + " local");
        console.log(addlink[id]);
        addlink[id].push(addlinks);
        setLinks(links);
        setMode('Read');
        setNextlocal(nextLocal+1);
      }}></Add>;
    }

    
    
    return(
      <div>
        <Header title = "생활관 명단 기능" onChangeMode={()=>{setMode('Welcome');}}></Header>
        <div >
        <Nav links = {links} onChangeMode={function(id){
          setMode('Read');setId(id)}}></Nav>
        <li><a
          href='/create'
          onClick={function(event){
           event.preventDefault();
           setMode('Create');
          }}>Create</a></li>
        </div>
        <div className="MainArticle">
        {ArticleContents}
        </div>
      </div>
    );
}

export default CRUD;
