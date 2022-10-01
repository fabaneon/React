import './gamble.css';
import {useState} from 'react';

function BetlistPrinter(props){
    let list= [];
    let total=[];
    var totalbet = 0;
    var teamNumber = Number(props.team); 
    var betlist = props.betlist[teamNumber];
    
    if(betlist.length > 0){console.log(betlist[teamNumber])};

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
    


    return(
        <article className="Bet-list">
            {teamNumber+ 1 + " 팀 "} <br/>
            {list}
            {total}

        </article>
    );

}
function GambleTotal(props){
    var team1,team2, total = null;
    var team1 = props.betlist[0];
    var team2 = props.betlist[1];
    var average = null;

    if( team1.length > 0 && team2.length > 0){
        total = Number(null);
        for(var a = 0; a < team1.length; a++){
            total += Number(team1[a].bet);
        }
        for(var b = 0; b < team2.length; b++){
            total += Number(team1[b].bet);
        }    
    }
    else{
        total = "양쪽에 베팅금이 있어야합니다."
    }
    // 주사위 Dice 모션을 넣고 어느팀이 이긴지 판별되게끔 하고서
    // 전체 판돈 / 이긴팀원수 => 각 인원별 판돈을 나누어 몇배인지 산출. 
    // average = (total / );

    return(
        <>
            {"판돈 : " + total + "원"}
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