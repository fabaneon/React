import {useState} from 'react';

function Career2020(){
    return(
     <div className = "App-Article-Career-2020">
      <figure>
        <img src="/img/2020.png" width="400"alt="growup"/>
      </figure>
      <p>
        <ul>
          <li>2020.08.~2020.12</li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/youtubegaming/status/1340454450113200137" title="YouTube Gaming Official Twitter">
            2020 Youtube Creator Town</a> 프로젝트 | 수석 레벨 디자이너 & PM<br/>
          <br/>
          <li>2020.08.~2020.09</li>
          <a target="_blank" rel="noreferrer" href="http://www.sfsciencefestival.or.kr/program/sf-virtual-experience" title="과천과학관 페스티벌 홈페이지">
            2020 SF 가상체험 - 국립과천과학관</a> 프로젝트 | PM<br/>
          <br/>
          <li>2020.9.~2021.02</li>
          <a target="_blank" rel="noreferrer" href="https://sandbox.co.kr/" title="YouTube Gaming Official Twitter">
            SANDBOX</a> 애니매이션 스튜디오 | 콘텐츠 개발 프리랜서 PM<br/>
          <br/>
          <li>2020.08.~2020.12</li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/youtubegaming/status/1340454450113200137" title="YouTube Gaming Official Twitter">
            2020 Youtube Creator Town</a> 프로젝트 수석 레벨 디자이너 & PM<br/>
          <br/>
        </ul>
      </p>

     </div>

    );
}

function Career2021(){
    return(
     <div className = "App-Article-Career-2021">
             <figure>
                <img src="/img/2021.png" width="400"alt="growup"/>
              </figure>
              <p>

                <ul>
                  <li>2021.03.~2021.09</li>
                  <a target="_blank" rel="noreferrer" href="https://sandbox.co.kr/" title="YouTube Gaming Official Twitter">
                    SANDBOX</a> 애니매이션 스튜디오 | 콘텐츠 개발 기간제 PM<br/>
                    <br/>
                  <li>2021.04 ~ </li>
                  우마공 크리에이티브 공동창업 | 부사장 <br/>
                  <br/>
                  <li>2021.05~2021.07</li>
                  <a target="_blank" rel="noreferrer" href="https://zdnet.co.kr/view/?no=20210928103257" title="ZDNET | 매체 기사">
                    2021 Youtube Creator Town</a> 프로젝트 | 콘텐츠 기획 & PM<br/>
                  <br/>
                  <li>2021.05.~2021.09</li>
                  <a target="_blank" rel="noreferrer" href="https://blog.naver.com/jeonjunight9937/222098377392" title="과천과학관 페스티벌 홈페이지">
                    전주 문화재 야행 - 실록의 조각</a> | 콘텐츠 개발 PM<br/>
                  <br/>
                  <li>2021.05</li>
                  <a target="_blank" rel="noreferrer" href="https://m.thisisgame.com/webzine/game/nboard/225/?n=128426" title="YouTube Gaming Official Twitter">
                    NVIDIA - RTX 퍼포먼스 공모전</a> 스태프<br/>
                  <br/>
                  <li>2021.09.~2021.12</li>
                  <a target="_blank" rel="noreferrer" href="https://cbtp.inno-craft.com/home" title="충북이노크래프트 | 홈페이지">
                    충북 이노크래프트</a> 프로젝트 | 메인 PM<br/>
                  <br/>
                </ul>
              </p>

     </div>

    );
}

function Career2022(){
    return(
     <div className = "App-Article-Career-2022">
              <figure>
                <img src="/img/2022.png" width="400"alt="growup"/>
              </figure>
              <p>

                <ul>
                  <li>2021.12.~2022.02</li>
                  <a target="_blank" rel="noreferrer" href="https://pixelnetwork.kr/" title="ZDNET | 매체 기사">
                    Pixel Network</a> 콘텐츠 개발소 | 콘텐츠 기획 & PM<br/>
                  <br/>
                  <li>군입대</li>
                  2022.03 ~ 2023.09<br/>
                </ul>
              </p>

     </div>

    );
}

function Student(){
    return(
     <div className = "App-Article-Career-Student">
         <p>
                <ul>
                  <li>2018 경상남도 고등부 과학 동아리 연구 대회 - 은상</li>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1mYNXWJ270b4fuxzVNMEQHqkGefPYbrck/view?usp=sharing" title="계획서 google drive viewer" >
                    연구 계획서 viewer
                  </a>
                  <br/>
                  <li>2019 과학교육 종합 성과발표회 - 학생 과제연구 발표대회 3위</li>
                  <figure>
                    <img src="/img/2019_Highschool.png" width="600"alt="growup"/>
                  </figure>
                  <br/>
                </ul>
         </p>

     </div>

    );
}

function CareerNav(props){
    return(
        <div className="App-Article-Career-Nav">
          <form>
            <table border = "2">
              <thead>
                <tr>
                    <td>
                        연혁표
                    </td>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>2020년도</td>
                    <td>
                      <button year = '2020'type="button" className="navyBtn" onClick={(event)=>{
                        event.preventDefault();
                        props.onChangeMode('2020');
                      }}>
                      열람하기</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2021년도</td>
                    <td>
                      <button year = '2021' type="button"  className="navyBtn" onClick={(event)=>{
                        event.preventDefault();
                        props.onChangeMode('2021');
                      }}>
                      열람하기</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2022년도</td>
                    <td>
                      <button year = '2022' type="button" className="navyBtn" onClick={(event)=>{
                        event.preventDefault();
                        props.onChangeMode('2022');
                      }}>
                      열람하기</button><br/>
                    </td>
                  </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colSpan="3">
                    <button year = 'student' type="button" className="navyBtn" onClick={(event)=>{
                        event.preventDefault();
                        props.onChangeMode('student');
                    }}>
                    학창 시절 과제 연구물</button>
                </td>
              </tr>
              </tfoot>
            </table>
          </form>
        </div>



    );
}

function Career(){
    const[year, setYear] = useState('2020');


    let careerfigure = null;
    
    if(year === '2020'){
        careerfigure = <Career2020></Career2020>;
    }
    else if(year === '2021'){
        careerfigure = <Career2021></Career2021>;
    }
    else if(year === '2022'){
        careerfigure = <Career2022></Career2022>;
    }
    else if(year === 'student'){
        careerfigure = <Student></Student>;
    }

    
    
    return(
        <div className="App-Article-Career">
            <CareerNav onChangeMode={(year)=>{
                setYear(year);
                console.log(year);
            }}></CareerNav>
            {careerfigure}

        </div>
    );


}

export default Career;
