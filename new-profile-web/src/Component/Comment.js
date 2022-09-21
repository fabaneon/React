import {useState} from 'react'
import './css/Comment.css'

function Comment(){
    const [commentlist, setCommentList] = useState([]);
    const [number, setNumber] = useState(0)
    let list = [[]];
    const [listPage, setlistPage] = useState(0);
    let button = [];

    if(commentlist.length > 0){
        for(var i=0; i < commentlist.length;i++){
            let xamplelist = list[i];
            for(var b=0; b < commentlist[i].length; b++)
            {
                xamplelist[b].push(
               
                    <div className="CommentArticle">
                    <img width="80px" src="img/index_profile_img.png"></img>
                    <p><div className="CommentArticle_text">ID : {commentlist[i].user}</div></p>
                    <p><div className="CommentArticle_text">{commentlist[i].text}</div></p>
                    </div>);
        
            }
        }
    }
    // for(var a=0; a < listPage; a++){
    //     var PageNumber = a;
    //     button.push(
    //         <button name={Number(PageNumber)} onClick={(event)=>{
    //             event.preventDefault();
    //             // setCommentblock(list[PageNumber]);
              
    //         }}
    //         >{"[ " + PageNumber + " ]"}</button>

    //     );
    // }
    // setCommentblock(list[listPage]);
    return(
        <div id="Comment_Container">
                {list}
                {button}
 
                    <form id="Comment_Layer" onSubmit={(event)=>{
                        event.preventDefault();
                        
                        var id = event.target.id.value ;
                        var comment_text = event.target.comment_text.value;
                        let newcommentlist = {id:number, user:id, text:comment_text};
                        let newcommentlists = commentlist;
                        
                        if(!newcommentlists[listPage]){
                            newcommentlists[listPage] = [];
                        }
                        console.log(newcommentlists[0]);

                        newcommentlists[listPage].push(newcommentlist);

                        if(newcommentlists[listPage] && newcommentlists[listPage].length > 4){
                            setlistPage(listPage+1);
                        }

                        setNumber(number+1);
                        setCommentList(newcommentlists);
                        console.log(newcommentlist);

                        console.log(newcommentlists);

                        console.log(commentlist);

                        console.log(listPage);
                        }
                    }>
                        <div className='Comment_Box'><input name='id' type="text" placeholder="ID"/>
                        </div>
                        <div className='Comment_Box'><textarea name='comment_text'placeholder='안녕하세요!'></textarea>
                        </div>
                        <div className='Comment_Box'><input type="submit" value="댓글쓰기"/></div>
                    </form>

        </div>
    );
}

export default Comment;