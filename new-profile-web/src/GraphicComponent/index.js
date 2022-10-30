import {useRef, useState, useEffect} from 'react';
function Index(){

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
			drawing();
			
		})
	
	
		function drawing(){
			ctx.storkeStyle= "red";
			ctx.lineWidth = 2.5;

			ctx.beginPath();
			ctx.moveTo(50,50);
			ctx.lineTo(100,100);
			ctx.strokeStyle = "red";
			ctx.stroke();

			ctx.fillStyle = "skyblue"

			ctx.font = "bold 24px Arial";
			ctx.fillText("학습 중", 100,120);    

			ctx.font = "bold 12px Arial";
			ctx.fillText("index", 100,200);    

			ctx.fillText("자세한것은 F12 -> Source || 주석 확인",100,240); 

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

export default Index;