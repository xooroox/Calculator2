function typeField(current){
	//въвеждане на стойности в полето
	var id = current.id; 
	var num = document.getElementById(id).value;
	document.getElementById('field').value += num;
}
function clearField(){
	//clear
	var input = document.getElementById('field').value = '';
}
function calculateNumbers(){
	/*всички операции без eval функцията (с която ми се стори много лесно), 
 	опитах се за повече упражняване по по-труден начин, 
	макар че не е перфектно*/
	var allInput = document.getElementById('field').value;
	//събиране, като може да се събира едновременно две и повече числа
	if((allInput.indexOf("+")) > 0){
		
		var arr = allInput.split("+");
		var result = 0;
			for(var i = 0; i < arr.length; i++){
			
				var num = parseFloat(arr[i]);
				result = result + num;
			}
			if(isNaN(result) == true){
					
				document.getElementById('field').value = 'Error: +';
			}else{
				document.getElementById('field').value = result;
			}
	}
	//умножение, като може да се умножават едновременно две и повече числа
	if((allInput.indexOf("*")) > 0){
			
		var arr = allInput.split("*");
		var result = 1;
			for(var i = 0; i < arr.length; i++){
			
				var num = parseFloat(arr[i]);
				result = result * num;
			}
			if(isNaN(result) == true){
				document.getElementById('field').value = 'Error: *';
			}else{
				document.getElementById('field').value = result;
			}
	}
	//изваждане, като може да се изваждат едновременно две и повече числа
	if((allInput.indexOf("-")) > 0){
		
		var arr = allInput.split("-");
		var result = parseFloat(arr[0]);;
			for(var i = 1; i < arr.length; i++){
			
				var num = parseFloat(arr[i]);
				result = result - num;
			}
			if(isNaN(result) == true){
				document.getElementById('field').value = 'Error: -';
			}else{
				document.getElementById('field').value = result;
			}
	}
	//деление, като може да се делят едновременно две и повече числа
	if((allInput.indexOf("/")) > 0){
		
		var arr = allInput.split("/");
		var result = parseFloat(arr[0]);
			for(var i = 1; i < arr.length; i++){
				
				var num = parseFloat(arr[i]);
				result = result / num;
			}
			if(isNaN(result) == true){
				document.getElementById('field').value = 'Error: /';
			}else{
				document.getElementById('field').value = result;
			}
	}
}
function squareRoot(){
	//корен квадратен
	var allInput = document.getElementById('field').value;
	var square = Math.sqrt(allInput); 
	document.getElementById('field').value = square;
}
function backNum(){
	//функцията за триене на последното число (BACKSPACE)
	var allInput = document.getElementById('field').value;
	var arr = allInput.split('');
	arr.pop();	
	var result = arr.join('');
	document.getElementById('field').value = result;
}
