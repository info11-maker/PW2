var deliveryaddress;
function insert(myForm){

	var a = prompt("Please enter your delivery address", "Your address here");
	document.getElementById('address').value = a; 
	deliveryaddress=a;
}

function total(myForm){
	var total = 0.00;
	//var topping = 8;
	var count = 0;
	if(document.getElementById('small').checked){

		total+= 80.00;
	}
	if(document.getElementById('medium').checked){

		total+= 90.00;
	}
	if(document.getElementById('large').checked){

		total+= 120.00;
	}
	if(document.getElementById('topping0').checked){
		total+= 5.00;
	}
	if(document.getElementById('topping1').checked){
		total+= 6.00;
	}
	if(document.getElementById('topping2').checked){
		total+= 9.00;
	}
	if(document.getElementById('topping3').checked){
		total+= 8.00;
	}
	if(document.getElementById('topping4').checked){
		total+= 9.00;
	}
	if(document.getElementById('topping6').checked){
		total+= 5.00;
	}
	if(document.getElementById('topping7').checked){
		total+= 6.00;
	}

	//total+= count * topping;
	if(document.getElementById('delivery').checked){
		total = total * 1.10;
	}
	var result = Math.round(total*100)/100;
	if(document.getElementById('delivery').checked){
		alert('Suma spre plata '+ result+ ' va ajunge in decurs de o ora pe '+ deliveryaddress);
	}else{
		alert('Suma spre plata '+ result+ ' lei');
	}
}

function blank(myForm){
	document.getElementById('carryout').checked=true;
	document.getElementById('small').checked=true;
	document.getElementById('address').value="";
	for(var a=0; a<13; a++){
		var topname = "topping" + a;
		document.getElementById(topname).checked=false;
	}

}