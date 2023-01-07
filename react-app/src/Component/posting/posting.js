import react,{useState} from 'react';
import "./posting.css";


function Reading(props){
	var posts = props.post;
	console.log(props.post);
	var post = document.querySelector(".Orginal-Post");
	console.log(post);
	post.innerHTML = posts;
	return(
	<>
		<div className="Article-Top-OptionBar">
			<input type="button" name="editbutton" value="수정" onClick={(event)=>{
									event.preventDefault();
									props.onChangemode();							
								}}/>

		</div>
		<div className="Original-Post">
		</div>
	</>	
	);
}

function Editing(props){
	
	return(
		<>
			<label onSubmit={(event,props)=>{
				event.preventDefault();
				
			}}>
				<div className="Article-Top-OptionBar">
					<input  type="submit" name="submitbutton" value="게시"/>
					<input key="post-reading" type="button" name="canclebutton" value="취소" onClick={(event)=>{
									event.preventDefault();
									props.onChangemode();

									}}/>
				</div>

				<input className="Article-Edit" type="text-area"></input>
			</label>
		</>
	);
}

function Posting(){
	const [posting,postingMode] = useState("reading");
	const [post,changePost] = [<><p>
				본문입니다.<br/>
				이러한 내용이죠<br/>
				그런데 사실 테스트중이라 별 내용은 없습니다.
			</p>
			<h1>안녕히 계세요 ^^</h1></>];
	let postView, postingfooter;
	
	if(posting === "reading"){
		postView = <Reading post={post} onChangemode={()=>{postingMode("editing");
			
											  }}/>
	}
	else if(posting === "editing"){
		postView = <Editing post={[post]} onChangemode={()=>{postingMode("reading");
											  }}/>
		
	}
	
	
	return(
		<div className="Container-App-Main">
			<div className="App-header">
				<p className="title">제목</p>
			</div>
			<div className="App-Main">
				<div className="Navigator">
					<li>링크 리스트</li>
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