import {useState} from 'react';
import '../css/comment.css'

// function CommentWrite(props){
//     return(
//         <div>
//             <form onSubmit={(event)=>{
//                 event.preventDefault();
//                 let commentUser = event.target.CommentUser.value;
//                 let commentText = event.target.CommentWriteBox.value;
//                 props.onWrite(commentUser, commentText);
//             }}>
//                 <p><input type="text" name="CommentUser" placeholder="NickName"/></p>
//                 <p><textarea name="CommentWriteBox" placeholder="Hello! Write your Comment!"></textarea></p>
//                 <p><input type="submit" value="댓글 쓰기"/></p>
//             </form>
//         </div>

//     );
// }

function Comment(){
    const [commentList,setcommentList] = useState([]);
    const [check, setCheck] = useState('unwrited');
    let List = [];
    if(commentList.length > 0){
        for(var i=0; i < commentList.length;i++){
            List.push(
               
            <div className="CommentArticle">
            <img alt="profile_img.png" width="80px" src="img/index_profile_img.png"></img>
            <p><div className="CommentArticle_ID">ID : {commentList[i].id}</div></p>
            <p><div className="CommentArticle_Text">{commentList[i].text}</div></p>
            </div>);
        }
    }
    // console.log("댓글 목록 : "+commentList);
    console.log(check);
    return(
        
        <div className="CommentLayer">
            <div className="Top">
                <div className="CommentList">
                    {List}
                </div>
            </div>
            <div className="Bottom">
                    <div className="CommentProfile">
                        <img alt="profile_img.png" width="80px" src="img/index_profile_img.png"></img>
                    </div>
                    <div className="CommentWrite">
                         <form onSubmit={(event)=>{
                            event.preventDefault();
                            let commentUser = event.target.CommentUser.value;
                            let commentText = event.target.CommentWriteBox.value
                            let Newcomment = {id: commentUser , text: commentText};
                            let newCommentList = commentList;                
                            newCommentList.push(Newcomment);
                            console.log(newCommentList);
                            setcommentList(newCommentList);
                            setCheck('writed');
                         }}>
                            <p><input type="text" name="CommentUser" placeholder="NickName"/></p>
                            <p><textarea name="CommentWriteBox" placeholder="Hello! Write your Comment!"></textarea></p>
                            <p><input type="submit" onClick={()=>{
                                setCheck('unwrited');
                            }}value="댓글 쓰기"/></p>
                        </form>
                    </div>

                <h5 className="date">학습 시작일 : 2022-09-04</h5>
            </div>
        </div>
    );
}

export default Comment;