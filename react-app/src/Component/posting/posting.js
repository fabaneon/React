import {useState} from 'react';
import "./posting.css";

function SearchRead(props) {
	var mode = props.mode;
	var Id = props.id;
	var List = props.postList;
	var post = [];
	var Edit = [];
		
	if(List.length < 1){
		post = <p>첫 글을 작성해주세요!</p>
	}
	else if(mode === "read"){
		post.push(<div key={List[Id].id + List[Id].title} className="Orginal-Post">
					  <h1 className="title">{List[Id].title}</h1>
					  <p className="Posted-article">{List[Id].content}</p></div>
		);
		Edit.push(<> {"|"} <input key={"수정버튼"} type="button" defaultValue="수정" 
							   onClick={(event)=>{
						  event.preventDefault();
						  props.onEditmode();
					  }}></input>{"|"}
				 <input key={"뒤로가기버튼"}type="button" defaultValue="뒤로가기" 
					 onClick={(event)=>{
						  event.preventDefault();
						  props.onSearchmode();
					  }}></input>
					 <input key={"삭제버튼"}type="button" defaultValue="삭제" 
					 onClick={(event)=>{
						  event.preventDefault();
						  props.del();
					  }}></input></>

				 );
	}
	else{
		post = 
			<>
				<h1 className="title">Community</h1><p>자유롭게 활동해보세요</p>
			</>;
	}
	
	return(
		<>
			
			<div className="Article-Top-OptionBar">
				<input type="button" defaultValue="작성" onClick={(event)=>{
					event.preventDefault();
					props.onWritemode();
			}}/>
				{Edit}
			</div>
			{post}
		</>
	);
}

function Write (props) {
	return(
	
		<form onSubmit={(event)=>{
				event.preventDefault();
				let title = event.target.title.value;
				let content = event.target.content.value;
				/*content = content.replace(/(?:\r\n|\r|\n)/g, '<br/>');*/
				//이건 리액트에선 안먹힌단다.
				props.Write(title,content);
			}}>
			
			<div className="Article-Top-OptionBar">
				<input type="submit" defaultValue="게시"/> |
				<input type="button" defaultValue="취소" onClick={(event)=>{
					event.preventDefault();
					props.onSearchmode();
				}}></input>

			</div>
			<input required className ="Article-write-title" name = "title"  placeholder="제목"/>
			<textarea required className="Article-write-content" name = "content" placeholder="내용"/>
		</form>
	
	);
}

function Edit (props){
	var id = props.selectedId;
	var List = props.postList;
	var prevtitle = List[id].title;
	var prevcontent = List[id].content;
	return(
		<form onSubmit={(event)=>{
				event.preventDefault();
				let title = event.target.title.value;
				let content = event.target.content.value;
				/*content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');*/
				//이건 리액트에선 안먹힌단다.
				props.Edit(title,content);
			}}>
			
			<div className="Article-Top-OptionBar">
				<input type="submit" defaultValue="게시"/> |
				<input type="button" defaultValue="취소" onClick={(event)=>{
					event.preventDefault();
					props.onSearchmode();
				}}></input>

			</div>
			<input required className ="Article-write-title" name = "title"  defaultValue={prevtitle}/>
			<textarea required className="Article-write-content" name = "content" defaultValue={prevcontent}/>
		</form>
	);
}
function Posting(){
	var postView = [];
	const [postList, setpostList] = useState([]);
	const [mode,setMode] = useState("search");
	const [selectedId,selectId] = useState(0);
	const [nextId,setNextId] = useState(0);
	let nav = [];
	
	if(postList.length > 0){	
		for(var i=0; i<postList.length; i++){
			let a = postList[i];
			nav.push(<li key={a.id}><a key={a.id+a.title}href={'/read/'+a.id} onClick={(event)=>{
								 event.preventDefault();
								 selectId(a.id);	 
								 setMode("read");
							 }}>{a.title}</a></li>);
		}
	}
	if(mode === "delete"){
		var delList =  postList;
		delList = delList.splice(selectedId, 1);
		setpostList(delList);
		setMode("search");
	}
	else if(mode === "search" || mode === "read"){
		postView = <SearchRead id={selectedId} postList={postList} mode={mode} onSearchmode={()=>{setMode("search");}} 
					   onWritemode={()=>{setMode("write")}} onEditmode={()=>{setMode("edit");}} del={()=>{setMode("delete");}}/>
	}
	else if(mode === "write"){
		postView = <Write onSearchmode={()=>{setMode("search");}}
					   Write={(write_title,write_content)=>{
				var newpost = {id:nextId, title:write_title, content: write_content};
				var newpostList = postList;
				newpostList.push(newpost);
				setpostList(newpostList);
				setNextId(nextId+1);
				selectId(nextId);
				setMode("read");
			}} />
		
	}
	else if(mode === "edit"){
		postView = <Edit selectedId={selectedId} postList={postList} Edit={(edit_title,edit_content)=>{
				var newpost = {id:selectedId, title:edit_title, content: edit_content};
				var newpostList = postList;
				newpostList[selectedId] = newpost;
				setpostList(newpostList);
				setMode("read");
			}} />
	}
	return(
		<div className="Container-App-Main">
			<div className="App-header">
				<p className="title">제목</p>
			</div>
			<div className="App-Main">
				<div className="Navigator">
					<ul>
						{nav}
					</ul>
				</div>
				<div className="Article">
					{postView}
				</div>
				<div className="Aside">
					부가기능들
				</div>
			</div>
		</div>
	);
	
	
}

export default Posting;