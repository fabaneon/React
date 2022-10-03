import './gamble.css';


import {useState} from 'react';

function BetlistPrinter(props){
    let list= [];
    let total=[];
    var totalbet = 0;
    var teamNumber = Number(props.team); 
    var betlist = props.betlist[teamNumber];
    
    if(betlist.length > 0){

        for(var i = 0; i < betlist.length; i++){
            list.push(
                <p key={betlist[i].id} className='Listed-text'>            
                    { i + " 번"}<br/>
                    {"참여자 : " + betlist[i].name}<br/>
                    {"베팅금액 : " + betlist[i].bet}<br/>
                </p>
            );
            totalbet = Number(totalbet + betlist[i].bet);
            total = <p>{" 총액 : " + totalbet + "원"}</p>;
        }
    };


    return(
        <article className="Bet-list">
            {teamNumber+ 1 + " 팀 베팅 내역"} <br/>
            {list}
            {total}

        </article>
    );

}
function GambleTotal(props){
    const [dice,setDice] = useState(null);
    const [dicemode, setDicemode] = useState('주사위 굴리기');

    var team= null, total = [[null],[null]], win = null;
    team = props.betlist;
    var teamlist = [[],[]];
    var teamdisplay = [[],[]];
    var dicedisplay = null;


    // 베팅 내역 사용자 별로 집계하기.
    if( team[0].length > 0 && team[1].length > 0){
        for(var l = 0; l < team.length; l++){
            for(var a1 = 0; a1 < team[l].length; a1++){
                var teamname = team[l][a1].name;
                for(var a2 = 0; a2 < team[l].length; a2++){
                    console.log(a2 + "번째 시작")
                    if(teamlist[l][a2] && teamlist[l][a2][0].name === teamname){
                        teamlist[l][a2].push(team[l][a1]);
                        break;
                    }    
                    else if(!teamlist[l][a2]){
                        teamlist[l][a2] = [];
                        teamlist[l][a2].push(team[l][a1]);
                        break;
                    }
                    else{
                        console.log(a2 + "번째는 건너뜀")
                    }
                }
                
                total[l] = Number(total[l]) + Number(team[l][a1].bet);
                console.log(total[l]);
            }
        }
        if(total[0] !== total[1]){
            total[0]= "양쪽 베팅금이 ";
            total[1]= "서로 다릅니다."; 
            dicedisplay = <h3 className='notice'>
                {total[0] + total[1]  + "양쪽의 베팅금액을 맞춰주세요"}</h3>;
        }
        else{
           
            // 예상수익 , 배율 계산
            for(var l2 = 0; l2 < team.length; l2++){
            
        
                for(var a3 = 0; a3 < teamlist[l2].length; a3++){
                    var listtotal = Number(0);
                    for(var a4 = 0; a4 < teamlist[l2][a3].length; a4++){
                        if(teamlist[l2][a3][a4]){
                            listtotal += teamlist[l2][a3][a4].bet;
                        }
                    }
                    var calculate = (((total[0]+total[1]-total[l2])/100*(listtotal/(total[l2]/100)))+listtotal).toFixed(0);
                    teamdisplay[l2].push(
                        <div className="Bet-total" key={teamlist[l2][a3][0].id}>
                        <p>{ a3+1+"번 참가자 :" + teamlist[l2][a3][0].name}</p>
                        <p>{"총 베팅금 :    " + listtotal + "원 "}</p>
                        <p>{"예상  수익 :  " + calculate + "원" }</p>
                        <p>{"배율 " + (calculate / listtotal).toFixed(2)
                        + " 배"}</p>
                        </div>)
                console.log(a3 + " 번째 배율 연산");
                console.log(total[0]+total[1]);

                }   
            }
            dicedisplay = <>
            <input type="button"className='DiceBtn' value={dicemode} onClick={()=>{
                    if(dicemode === "주사위 굴리기"){
                        setDice(<Dice onChangemode={(dice)=>{
                            console.log("Gambletotal에서 onChangemode");
                            console.log(dice);
                            props.onChangemode(dice);
                            setDice(dice);
                        }}/>);
                        setDicemode("게임 초기화");
                    }
                    else{
                        props.onReloadingmode("GAMERELOAD");
                        setDice("1 ~ 6의 숫자가 나옵니다.");
                        setDicemode("주사위 굴리기");
                    }
                    
                    }}/>
                    <h3 className='notice'>{dice}</h3>
            </>;
            if(dice > 3){
                win = <h5 className='notice'>{"2팀 승리!"}</h5>
            }
            else if(dice < 4){
                win = <h5 className='notice'>{"1팀 승리!"}</h5>
            }
            else{
                win = null;
            }
        }
    } 
        else{
            total[0]= "양쪽에";
            total[1] = "베팅금이 있어야합니다.";
            dicedisplay = <h3 className='notice'>
            {total[0] + total[1]}<br/>{"게임에 참여해주세요"}</h3>;
        }
    
        // 이제 이기는 판정만 하면 됨.
        // average = (total / );
    return(
        <>
            <div className='Bet-result-list'>
                { " 1팀 참가자 : " + teamlist[0].length + " 명 "}<br/>
                {teamdisplay[0]}<br/>
            </div>
            <div className='Bet-reuslt-list'>
                 <div className='Gamble-DiceMotion'>
                    {dicedisplay}
                    {win}
                </div>
                <div className='Listed-text'>
                <h2 className='notice'>{"판돈 : " + (total[0] + total[1]) }</h2>

                </div>
            </div>
            <div className='Bet-result-list'>
                { " 2팀 참가자 : " + teamlist[1].length + " 명 "}<br/>
                {teamdisplay[1]}<br/>
            </div>
            
        </>
    )
}
function Dice(props){
    let list = null;
    let calc = null;
    const [listtotal,setlisttotal] = useState(0);

    console.log( "r굴린횟수 :   "+ listtotal)
    if(listtotal > 100){
        setTimeout(function(){
        }, 500);
        calc = Math.floor(Math.random()*5 + 1);
        list=<>{"주사위"}<p>{calc}</p></>;
        props.onChangemode(calc);
        console.log("Dice 함수 onChangemode");
    }
    else{
        calc = Math.floor(Math.random()*5 + 1);
        list=<>{"굴리는 중 . . . "}<p>{calc}</p></>;
        setTimeout(function(){
            setlisttotal(listtotal+1); 
        }, 10);
    }

    

    console.log("최종 list " + list);
    return(
        <>
            {list}
        </>
        
    );
}
function Gamble(){
    const [betlist, setBetlist] = useState([[],[]]);
    const [number, setNumber] = useState(0);
    const [gameover, setGameover] = useState("GAMESTART");
    const [dice,setdice] = useState(null);
    console.log("최종적으로 끄집어낸 dice 눈값" + dice);
    console.log("최종적으로 끄집어낸 gameover 값" + gameover);

    if(gameover === "GAMERELOAD"){
        var clearbetlist = [[],[]];
        setBetlist(clearbetlist);
        setGameover("GAMESTART");
    }
    return(
        <div>
            <header className="App-header">
                <h1 className="title">갬블 시스템</h1>
            </header>
            <section className="Container-Gamble">
                <div className='Gamble-list'>
                         <BetlistPrinter dice={dice} betlist = {betlist} gameover={gameover} team="0"/>
                    <article className="Bet-Article">
                        <GambleTotal betlist = {betlist} gameover={gameover} 
                        onReloadingmode={(reload)=>{
                            console.log("주사위 초기화 버튼 눌러짐");
                            setGameover(reload);
                        }}
                        onChangemode={(dice)=>{
                            console.log("Gamble에서 onChangemode");
                            console.log(dice);
                            setGameover("GAMEOVER");
                            setdice(dice);
                        }}/>
                    </article>

                        <BetlistPrinter dice={dice} betlist = {betlist} gameover={gameover} team="1"/>
                </div>

                <form onSubmit={(event)=>{
                        event.preventDefault();
                        var team = Number(event.target.team.value);
                        var name = event.target.name.value;
                        var bet = Number(event.target.bet.value);
                        var newbetlists = {id:number, team: team, name: name, bet: bet};
                        var newbetlist = betlist;
                        newbetlist[team].push(newbetlists);
                        setBetlist(newbetlist);
                        setNumber(number + 1);
                        alert(team + 1 + " 팀에 " + bet + " 원 베팅 완료!");
                        console.log(betlist);
                    }}>
                <div className="Gamble-box">
                    <div className='Gamble-option'>
                        <span>
                        주사위 눈 1 ~ 3 :
                        <input type="radio" name="team" value="0"  required/></span><br/>
                        <span>
                        주사위 눈 4 ~ 6 :
                        <input type="radio" name="team" value="1" required/></span>
                    </div>
                    <div className='Gamble-option'>
                        <input type="text" name="name"placeholder="이름" required/>
                        <input type="number" name="bet"min="1000" placeholder="최소 1000원" required/>
                        <input type="submit" value="베팅" />
                    </div>
                </div>    
                </form>
            </section>
        </div>
    );
}

export default Gamble;