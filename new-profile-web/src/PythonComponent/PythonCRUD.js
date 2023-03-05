import {spawn} from 'child_process';

function PythonCRUD(){
	var spawn = require('child_process').spawn;

	// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
	const result = spawn('py', ['./python_test.py', 'param1', 'param2']);



	// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
	result.stdout.on('data', function(data) {
			console.log("111", data.toString());
	})

	// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
	result.stderr.on('data', function(data) {
			console.log("222", data.toString());
	});

	
	return(
		<>
			dd
		</>
	);
}

export default PythonCRUD;