import './App.css';
import {useEffect} from 'react';

function App() {
	useEffect(()=>{
		window.addEventListener( 'scroll', function (){
			let screen1Text = document.getElementById("screen1-article1");
			let screen1Img = document.getElementById('screen1-img1');
			let value = window.scrollY;
			console.log('scrollY',value);
			if(value > 350){
				screen1Text.style.animation='text-slide-close 2s ease-out foward';
				console.log('hey');
			}
			else{
				screen1Text.style.animation='text-slide-open 2s ease-out foward';
			}

		})
		return()=>{
			window.removeEventListener( 'scroll', function (){
			let screen1Text = document.getElementById("screen1-article1");
			let screen1Img = document.getElementById('screen1-img1');
			let value = window.scrollY;
			console.log('scrollY',value);
			if(value > 350){
				screen1Text.style.animation='text-slide-close 2s ease-out foward';
				console.log('hey');
			}
			else{
				screen1Text.style.animation='text-slide-open 2s ease-out foward';
			}
			})		
		}
	})		
		
	
  return (
    <div className="App">
		<header className="App-header">
			Test
		</header>
		<nav className="App-nav">
			button
		</nav>
		<div className="App-showscreen">
			<section className="screen1">
				<h1 id='screen1-article1' className="screen-article">
					COME AGAIN !
				</h1>
				<img id="screen1-img1"
					className="screen1-photo" src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_pick_img.png" alt="사진들"></img>
			</section>
		</div>
		  
    </div>
  );
}

export default App;
