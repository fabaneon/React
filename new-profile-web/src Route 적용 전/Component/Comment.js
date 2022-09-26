import {useState} from 'react'
import './css/Comment.css'

function Commentlist(props){
    var PageNumber = props.selectPage;
    var list = props.commentlist[PageNumber];
    var comment_num = props.number;
    console.log();
    if(list && list.length > 0){

        var xamplelist = [];
        for(var i=0; i < list.length;i++){
                xamplelist.push(
               
                    <div key={list[i].id+"-comment"}>
                    <span className='notice'>{list[i].id+1+"번째 댓글"}</span><br/>
                    <img width="80px" src="img/index_profile_img.png"></img>
                    <div className="CommentArticle_text">ID : {list[i].user}</div>
                    <div className="CommentArticle_text">{list[i].text}</div>
                    </div>);
        }
    }
    return(
        <div className="CommentArticle">
            {xamplelist}
        </div>
    );
}

function Comment(){
    const [commentlist, setCommentList] = useState([[]]);
    const [number, setNumber] = useState(0)
    let list = [];
    const [listPage, setlistPage] = useState(0);
    const [selectPage, setSelectPage] = useState(0);


    list = <Commentlist
        number = {number} 
        listPage = {listPage} 
        selectPage = {selectPage} 
        commentlist = {commentlist}>
        </Commentlist>;
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
                    
                    <div className='PageBtn'>
                    <span className='PageNum'>{selectPage+ 1 + " / " + Number(commentlist.length)}</span>
                    <br/>
                    <button onClick={(event)=>{
                            event.preventDefault();
                            if(selectPage > 0){
                                setSelectPage(selectPage-1);
                            }
                        }
                        }>◀</button>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        if(selectPage < commentlist.length-1){
                            setSelectPage(selectPage+1);
                        }
                    }
                    }>▶</button>
                    </div>
                {list}
                
 
                    <form id="Comment_Layer" onSubmit={(event)=>{
                        event.preventDefault();
                        
                        var id = event.target.id.value ;
                        var comment_text = event.target.comment_text.value;
                        let newcommentlist = {id:number, user:id, text:comment_text};
                        let newcommentlists = commentlist;


                        // if(!newcommentlists[listPage]){
                        //     newcommentlists[listPage] = [];
                        // }
                        console.log(newcommentlists[0]);

                        newcommentlists[listPage].push(newcommentlist);

                        if(newcommentlists[listPage] && newcommentlists[listPage].length > 5){
                            newcommentlists[listPage+1] = [];
                            newcommentlists[listPage+1].push(newcommentlists[listPage][5]);
                            newcommentlists[listPage].pop();
                            setlistPage(listPage+1);
                            setSelectPage(selectPage+1);
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