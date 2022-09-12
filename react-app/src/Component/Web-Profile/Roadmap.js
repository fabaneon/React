

function Roadmap(){
    return(
        <div class="App-Article">
        <section>
          <article class="roadmap description">
            <span className="title">나의 로드맵 ~ 2022.09.02</span>
            <figure>
              <img src="img/ownroadmap.png" alt="나의 로드맵"/><br/>
            </figure>
            <span className="title">참고한 로드맵</span> <br/>
            <figure>
              <img src="img/frontend.png" alt="프론트엔드 로드맵"/> <br/>
              <hr/>
              <img src="img/backend.png" alt="백엔드 로드맵"/> <br/>
              <hr/>
              <img src="img/devops.png" alt="데브옵스 로드맵"/> <br/>
            </figure>
          </article>
        </section>
      </div>
    );
}

export default Roadmap;