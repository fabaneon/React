import {useState} from 'react';
import './randomchoice.css'



function Randomchoice(){
    const [list,setList] = useState([]);
    const [num,setNum] = useState(0);
    const [status,setStatus] = useState('unrefreshed');
    let display = [];
    let [result,setResult] = useState('') ;
    if(list.length > 0){
        for(var i=0; i < list.length; i++){
            display.push(<li key={list[i].id}>{list[i].user}</li>);
        }
    }


    console.log(list + " / " + status);
    return(
        <div className="Container">
            <div className="App-header">
                <h1 className="title"> 죽음의 랜덤뽑기  </h1>     
                <h2 className='important'>규칙 설명</h2>
                <h5> 한번만 말하니 잘 들어라 </h5>
                <ol>
                    <li>희생양을 추가해서 뽑을 인원을 먼저 정해라.</li>           
                    <li>다 넣었으면 희생양 뽑기를 눌러라. 그럼 랜덤으로 한명이 한다.</li>           
                    <li>마지막으로 남은 한사람이 희생양이 되는거다.</li>           
                    <li>한번 뽑힌 인원은 명단에서 없어지니까 공평하지 못하다고 징징거리지 마라.</li>           
                </ol>
            </div>
            <div className='ChoiceBox'>
                <div className='ListBox'>
                    <ul>
                        {display}                    
                    </ul>                    
                  <hr/>
                  {result}
               </div>  
                
                <div className='OptionBox'>
                    <form onSubmit={(event)=>{
                            event.preventDefault();
                            var username = event.target.user.value;
                            var newlist = {id:num ,user:username};
                            var newlists = list;
                            newlists.push(newlist);
                            setList(newlists);
                            setNum(num+1);
                            setStatus('refrehed');
                        }}>
                        <input name='user' type="text" placeholder='희생양의 이름'/>
                        <input type="submit" value="이름추가"onClick={(event)=>{
                            setStatus('unrefreshed');

                        }}/>
                    </form>
                        <button onClick={(event)=>{
                            event.preventDefault();
                            var editlist = list;
                            var r = null;
                            if(editlist.length < 1){
                                setResult(<section><p>희생양이 없다.</p>추가부터 해라.</section>);   
                            }

                            else{
                                r = Math.floor((Math.random() * ( list.length - 0 )  ) + 0);
                                console.log("지정된 랜덤 id : "+r);
                                if(editlist.length === 2 && editlist[r].user === "차승민"){
                                    setResult(<section>♥{editlist[r].user}♥<p>최후의 희생양</p></section>);   
                                    editlist.pop();
                                    editlist.pop();
                                }
                                else{
                                    setResult(<section>{editlist[r].user}<p>살아남은 희생양</p></section>);
                                    editlist.splice(r, 1)
                                    if(editlist.length === 1){
                                        setResult(<section>♥{editlist[0].user}♥<p>최후의 희생양</p></section>);   
                                        editlist.pop();
                                    }       
                                }
                            }
                            console.log("지정된 랜덤 user : "+result);


                            setList(editlist);
                            setStatus('unrefrehsed');
                            
                        }}>"희생양 뽑기"</button>
                </div>
                
            </div>
        </div>
    );

}

export default Randomchoice;