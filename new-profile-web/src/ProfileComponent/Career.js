import {NavLink,Route,Routes,useParams} from 'react-router-dom'

function CareerIntroduce(){
  return(
    <div>
      <h3 className='important'>탐색해보세요!</h3>
      <figure>
        <img src={require("../img/searching.jpg")} width="300"alt="searching"/>
      </figure>
      <article>
        <p>위 버튼을 눌러 연도별 성과를 확인하실 수 있습니다.</p>
        <p className='notice'>※ 중.소규모 프로젝트는 제외시켰습니다.※</p>  
      </article>    
    
        
    </div>

  );
}
  

function Career2020(){
    return(
     <div>
      <figure>
        <img src={require("../img/2020.png")} width="400"alt="2020"/>
      </figure>
      
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
      
     </div>

    );
}

function Career2021(){
    return(
     <div>
             <figure>
                <img src={require("../img/2021.png")} width="400"alt="2021"/>
              </figure>
              

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
              

     </div>

    );
}

function Career2022(){
    return(
     <div>
              <figure>
                <img src={require("../img/2022.png")} width="400"alt="2022"/>
              </figure>
              

                <ul>
                  <li>2021.12.~2022.02</li>
                  <a target="_blank" rel="noreferrer" href="https://pixelnetwork.kr/" title="ZDNET | 매체 기사">
                    Pixel Network</a> 콘텐츠 개발소 | 콘텐츠 기획 & PM<br/>
                  <br/>
                  <li>군입대</li>
                  2022.03 ~ 2023.09<br/>
                </ul>
              

     </div>

    );
}

function Student(){
    return(
     <div>
         
                <ul>
                  <li>2018 경상남도 고등부 과학 동아리 연구 대회 - 은상</li>
                  <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1mYNXWJ270b4fuxzVNMEQHqkGefPYbrck/view?usp=sharing" title="계획서 google drive viewer" >
                    연구 계획서 viewer
                  </a>
                  <br/>
                  <li>2019 과학교육 종합 성과발표회 - 학생 과제연구 발표대회 3위</li>
                  <figure>
                    <img src={require("../img/2019_Highschool.png")} width="600"alt="학생 과제연구 발표대회 포스터"/>
                  </figure>
                  <br/>
                </ul>
         

     </div>

    );
}

function CareerNav(props){
  const list = props.list;  
  let navlist = [];
  for (var i=0; i < list.length; i++){
    navlist.push(<div id="NavBtn"><NavLink key={list[i].year+list[i].id} className="NavBtn-text" to={"/Portfolio-Profile_Website/career/" + list[i].year}type='button'>                 
    {list[i].description}</NavLink></div>)
  }

    return(
        <div id="App-Profile-Nav">
          {navlist}
        </div>
    );
}
function SelectedPage (props) {
  const list = props.list;
  var {career_id} = useParams();
  var selected_page = ["Sorry, Nothing Found Here."];
    for (var i=0; i<list.length; i++){
      if(list[i].year === career_id){
        selected_page = list[i].content;
        console.log(list[i].year === career_id)
      }
      
    }
    console.log({career_id})
    console.log(list[0].content)
    console.log(list.length)
  return (
    <div>
      {selected_page}
    </div>
  );
}

function Career(){

  const list = [
    {id: 0, year: "2020", description:2020, content:<Career2020/>},
    {id: 1, year: "2021", description:2021, content:<Career2021/>},
    {id: 2, year: "2022", description:2022, content:<Career2022/>},
    {id: 3, year: "student", description:"학생 시절 연구물",content:<Student/>}
  ];
    
    return(
        <div id="App-Profile-article">
            <CareerNav list = {list}></CareerNav>
          <Routes>
            <Route path=":career_id" element={<SelectedPage list = {list}/>}></Route>
            <Route path="/" element={<CareerIntroduce/>}></Route>
          </Routes>
          

        </div>
    );


}

export default Career;
