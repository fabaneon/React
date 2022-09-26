function Profile(){
    return (
        <div id="App-article">

         <figure>
            <img src="img/fabaneon.jpg" alt=""/>
            </figure>

         <article className="MainArticle">
          
            <span className="title">Fabaneon</span> <br/>
            2001.04.03 <br/>
            [ENTJ]
            <br/>
            <h3 className="important">Primary Skill</h3> 
          
              <p>FrontEnd 개발</p>
              <p>프로젝트 기획</p>
              <p>프로젝트 매니징</p>
              <p>공개 프레젠테이션</p> 
          
              <h3 className="important">Sub Skill</h3> 
                PM, Level Designer, Planner

            <h3 className="important">(Studying)</h3>
              <p>"Web" (HTML+Js+CSS) + React</p>
              <p>"Web Motion Graphic" (p5.js + WebGL)</p>
              <p>"Math" (2,3차함수 + 삼각함수 + 기하와벡터)</p>
              <p>'BackEnd' Node.js</p>

          </article>
        </div>

    );

}
export default Profile;