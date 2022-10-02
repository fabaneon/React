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
    var team= null,team2 = null, total = [[null],[null]];
    team = props.betlist;
    var teamaverage = Number(null), team2average = Number(null);
    var teamlist = [[],[]];
    var teamdisplay = [[],[]];

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
                    console.log(teamdisplay[l2][0]);
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

        }
    } 
        else{
            total[0]= "양쪽에";
            total[1] = "베팅금이 있어야합니다.";
        }

        // 주사위 Dice 모션을 넣고 어느팀이 이긴지 판별되게끔 하고서
        // 전체 판돈 / 이긴팀원수 => 각 인원별 판돈을 나누어 몇배인지 산출. 
        // average = (total / );
    return(
        <>
            <div className='Bet-result-list'>
                { " 1팀 참가자 : " + teamlist[0].length + " 명 "}<br/>
                {teamdisplay[0]}<br/>
            </div>
            <div className='Bet-reuslt-list'>
                <div className='Gamble-DiceMotion'>
                    Dice
                </div>
                {"판돈 : " + (total[0] + total[1]) }
            </div>
            <div className='Bet-result-list'>
                { " 2팀 참가자 : " + teamlist[1].length + " 명 "}<br/>
                {teamdisplay[1]}<br/>
            </div>
            
        </>
    )
}

function Gamble(){
    const [betlist, setBetlist] = useState([[],[]]);
    const [number, setNumber] = useState(0);

    return(
        <div>
            <header className="App-header">
                <h1 className="title">갬블 시스템</h1>
            </header>
            <section className="Container-Gamble">
                <div className='Gamble-list'>
                         <BetlistPrinter betlist = {betlist} team="0"/>
                    <article className="Bet-Article">
                        <GambleTotal betlist = {betlist}/>
                    </article>

                        <BetlistPrinter betlist = {betlist} team="1"/>
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
                    <div>
                        Team1:
                        <input type="radio" name="team" value="0"  required/>
                        Team2:
                        <input type="radio" name="team" value="1" required/>
                    </div>
                    <div>
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