import {useRef, useState, useEffect} from 'react';




function Space(){

	const canvasRef = useRef(null); // 캔버스 useRef 사용
	const ctxRef = useRef(null); // 드로잉 context에 useRef 사용
	
	const [context, setContext] = useState(); // 드로잉 context의 state
	const [canvasTag, setCanvasTag] = useState([]); // 캔버스의 state
	

	
	useEffect(()=> {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
	

		canvas.resize = function(){
			canvas.width = window.innerWidth*0.9;
			canvas.height = window.innerHeight;
		}
		canvas.resize();
			
		window.addEventListener("resize", function(){
			canvas.resize();
			init();
			
		})
		window.addEventListener("mousemove", 
   		 function(event){

			// mouse.x = event.x;
			// mouse.y = event.y;

			mouse.x = (event.clientX - canvas.offsetLeft + window.scrollX);
			mouse.y = (event.clientY - canvas.offsetTop + window.scrollY);


			// 중력 대포에서 배운 내용.
			// 이제 인터렉션 배율을 조절해서 스크롤을 해도 마우스 좌표값이 이상해지지않는다.
        
   		 })
	
	
		


		var maxRadius = 50;
		var minRadius = 5;
		//공통 비례 적용 최대,최소 값

		var colorArr = [
			"#937DC2",
			"#C689C6",
			"#FFABE1",
			"#FFABE1",
			"#FFE6F7",

		];

		var mouse = {
			x : undefined,
			y : undefined
		}

		// 마우스의 움직임 관련 이벤트 읽어오기
		// mouseevent의 메소드들로 screenX 등이 저장되어있음.

			function Circle(x,y,vx,vy,radius){
				this.x = x;
				this.y = y;
				this.vx = vx;
				this.vy = vy;
				this.radius = radius;
				this.color = colorArr[Math.floor(Math.random() * colorArr.length)];
				this.draw = function(){

					ctx.beginPath();
					ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
					ctx.strokeStyle= "rgba(0,0,255,255)";
					ctx.fillStyle = this.color;
					ctx.fill();
					ctx.stroke();
				} 
				this.update = function(){

					if(this.x + this.radius > canvas.width ||
						 this.x - this.radius < 0 ){

						this.vx = -this.vx;
					}
					if(this.y + this.radius > canvas.height|| 
						this.y - this.radius < 0 ){

						this.vy = -this.vy;
					}
					this.x += this.vx;
					this.y += this.vy;

					// 마우스의 위치와 원의 위치 상호작용
					if (mouse.x - this.x < maxRadius && 
						mouse.x - this.x > -maxRadius&&
						mouse.y - this.y < maxRadius &&
						mouse.y - this.y > -maxRadius &&
						this.radius < maxRadius){
						this.radius += 2;
					}
					else if (this.radius > minRadius){
						this.radius -= 2;
					}


					this.draw();
				}

			}
			let circleArr = [];
			for(var i=0; i < 500; i++){
				var radius = Math.random()*10+ 1;
				var x = (Math.random(2,30) * (canvas.width - radius*2));
				var y = (Math.random(2,30) * (canvas.height - radius*2));

				var vx = (Math.random(2,30) - 0.5) * 2;
				var vy = (Math.random(2,30) - 0.5) * 2;

				circleArr.push(new Circle(x,y,vx,vy,radius));

			}


			function init(){

				circleArr = [];
				for(var i=0; i < 1000; i++){
					radius = Math.random()*10+ 1;
					var x = (Math.random() * (canvas.width - radius*2));
					var y = (Math.random() * (canvas.height - radius*2));

					var vx = (Math.random() - 0.5) * 2;
					var vy = (Math.random() - 0.5) * 2;

					circleArr.push(new Circle(x,y,vx,vy,radius));
				}
				console.log(circleArr[0]);


			}
			// resize를 하는 함수에서 브라우저 사이즈가 재정의될때마다 색깔원들을 재생성하기위한 init 함수


			function drawing(){
				requestAnimationFrame(drawing);
				// console.log(circleArr[1].x);

				ctx.beginPath();
				ctx.arc(mouse.x,mouse.y,maxRadius,0,Math.PI * 2 ,false);
				ctx.strokeStyle = "green";
				ctx.stroke();


				ctx.fillStyle = "rgba(30,30,30,0.2)";
				ctx.fillRect(0,0,canvas.width,canvas.height);


				for(var i=0; i < circleArr.length;  i++){
					circleArr[i].update();
				}

				ctx.fillStyle = "white";
				ctx.font = "italic bold 48px Arial"; //Arial 적용
				ctx.fillText("원자의 세계", 100, 60);

				ctx.font = "italic bold 18px Arial"; //Arial 적용

				ctx.fillText("상호작용에 대해 공부해보았다.", 100, 120);
				ctx.fillText("마우스 커서가 원자 근처로 가면 원자가 부풀어 오른다.", 100, 150);

				ctx.fillText("자세한것은 F12 -> Source에서 소스파일 주석참고",100, 180);
				ctxRef.current = ctx;
			}
	drawing();
		
		
		
		setContext(ctxRef.current);
		setCanvasTag(canvas);

	}, []);
	
	return (
		<>
		<canvas ref = {canvasRef} id="canvas">
		</canvas>

		</>
	);
}

export default Space;