function PythonCRUD(){
	return(
		<>
			<py-script>
				#!/usr/local/bin/python3
				print("Content-Type: text/html")
				print()
			
				print('''
					<div>
						ok python
					</div>
			
				''')
			</py-script>
		</>
	);
}

export default PythonCRUD;