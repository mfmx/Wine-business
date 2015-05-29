
function entryPg(){ 
	alert("                   "+"One of our  missions is to ensure that our wines are enjoyed responsibly."+ "\n We must confirm that you are of legal drinking age in your country before welcoming you to GVZZO.");
 var verifyCountry= prompt("Enter one of the three options: United States, Italy, Others");
var country= verifyCountry.toLocaleLowerCase();
 
 if(country=="united states"){
	
	 var enterAge= prompt("Enter your Age");
	 if(enterAge<21){
		 document.getElementById("sorryDiv").style="display:block";
		
	 }

	 else {
		 window.location.href="index.html?indexPage";

	 }

		 
	 }
	 
	 
	 
	 
	 
	 
	 
	 
	 
 
 
 
 
 
 else if(country=="italy"){
	 var enterAge= prompt("Enter your Age");
	 if(enterAge<18){
		 document.getElementById("sorryDiv").style="display:block";
	 }
	 else {
		
		 window.location.href="index.html?indexPage";
		
	 }
	

		 
	 
 
 }
 
 
 else if(country=="others"){
	 var enterAge= prompt("Enter your Age");
	 if(enterAge<18){
		 document.getElementById("sorryDiv").style="display:block";
	 }
	 else {
		
		 window.location.href="index.html?indexPage";
		
	 }
	

		 
	 
		 

			 
		 }
 
 else{
	 alert("Are you sure that you live in "+ verifyCountry); 
	 verifyCountry=prompt("Enter one of the three options: United States, Italy, Others");
	 entryPg();
	 
 }
 
}
function welcome(){
alert("WELCOME!!");}


function gaglioppoPg(){
	
	window.location.href="gvzzoGaglioppo.html?gvzzoGaglioppoPage";
}

function kremissaPg(){
	window.location.href="gvzzoKremissa.html?gvzzoKremissaPage";
}

function homePg(){
	window.location.href="index.html?indexPage";
}