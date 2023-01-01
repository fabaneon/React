import react,{useState} from 'react';

function PostingFooter(props){
		var Editbutton = [];
		console.log(props.onCreate);

		if(props.onCreate === "reading"){
			Editbutton.push(<input  type="button" name="editbutton" value="수정"/>);
			
		}
		else if(props.onCreate === "editing"){
			Editbutton.push(<><input  type="button" name="canclebutton" value="취소"/>
							<input  type="button" name="submitbutton" value="게시"/></>);			
		}
	
	return(
		<div className="Article-Footer">
			{Editbutton}
		</div>
	);
	
}

function Reading(){
	
	return(
	<>
		<div className="Original Post">
			<p>
				본문입니다.<br/>
				이러한 내용이죠<br/>
				그런데 사실 테스트중이라 별 내용은 없습니다.
			</p>
			<h1>안녕히 계세요 ^^</h1>
		</div>
	</>	
	);
}

function Editing(){
	
	return(
		<>
			<div className="Article-Top-OptionBar">
			</div>
			<div className="Article-Edit">
			</div>
		</>
	);
}

function Posting(){
	const [posting,postingMode] = useState("reading");
	let postView, postingfooter;
	

	
	if(posting === "reading"){
		postView = <Reading/>
		postingfooter = <PostingFooter onCreate="reading"/>
	}
	else if(posting === "editing"){
		postView = <Editing/>
		postingfooter = <PostingFooter onCreate="editing"/>
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
					{postingfooter}
				</div>
				<div className="Aside">
					부가기능들
				</div>
			</div>
		</div>
	);
	
	
}

export default Posting;