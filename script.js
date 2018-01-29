

		let txtRed = document.getElementById("Red");
		let txtGreen = document.getElementById("Green");
		let txtBlue = document.getElementById("Blue");
		
		let btnShow = document.getElementById("btnColor");
		let btnClear = document.getElementById("btnClear");
		let box = document.getElementById("box");


		function ShowColor(){
		
			box.style.backgroundColor= "rgb(" + txtRed.value + "," + txtGreen.value + "," + txtBlue.value + ")";
	  
		}
		function ClearAll(){
			location.reload();
		}
		

