

function Roadmap(){
    return(
        <div id="App-Profile-article">
        <section>
          <article className="roadmap description">
            <span className="title">나의 로드맵 ~ 2022.09.02</span>
            <figure>
              <img className="ArticleImg" src={require("../img/ownroadmap.png")} alt="나의 로드맵"/><br/>
            </figure>
            <span className="title">참고한 로드맵</span> <br/>
            <figure>
              <img className="ArticleImg" src={require("../img/frontend.png")} alt="프론트엔드 로드맵"/> <br/>
              <hr/>
              <img className="ArticleImg" src={require("../img/backend.png")} alt="백엔드 로드맵"/> <br/>
              <hr/>
              <img className="ArticleImg" src={require("../img/devops.png")} alt="데브옵스 로드맵"/> <br/>
            </figure>
          </article>
        </section>
      </div>
    );
}

export default Roadmap;