//alert(localStorage[0]);
// VFW
// Term 1305
// Banchop Ben Kangdouangnhot

// Wait until DOM is ready
window.addEventListener( "DOMContentLoaded", function() {

	// getElementById function
	function killAll ( clear ) {
	var teams = document.getElementById( clear );
	return teams;
}

	// Create drop down elements
	function dropDownList ( ) {
		var formTag = document.getElementsByTagName("form");  //form tags are an array
		selector = killAll('mStuff');
		makeSelection = document.createElement('select');
		makeSelection.setAttribute("id", "groupie");   // used for idGetter function
	 for ( var i = 0, j= addGroups.length; i<j; i++) {
	 		var makeOpt = document.createElement('option');
	 		var opt = addGroups[i];
	 		makeOpt.setAttribute("value", opt);
	 		makeOpt.innerHTML = opt;
	 		makeSelection.appendChild(makeOpt);
	    }
	    selector.appendChild(makeSelection);
	}
	
	// Find values of selected radio buttons
	function getRadios() {
		var setRadios = document.forms[0].any;
		for ( var i=0; i<setRadios.length; i++) {
			if(setRadios[i].checked) {
			seasonValue = setRadios[i].value;
		   }
	 }
}	 
 
    function toggle( t ) {
	 	switch(t) {
	 		case "on" :
	 			//killAll('contactForm').style.display ="none";
	 			killAll('Info').style.display ="inline";
	 			killAll('cData').style.display ="none";
	 			killAll('addNew').style.display = "inline";
	 			break;
	 		
	 		case "off" :
	 			//killAll('contactForm').style.display ="block";
	 			killAll('Info').style.display ="inline";
	 			killAll('cData').style.display ="inline";
	 			killAll('addNew').style.display = "none";
	 			killAll('items').style.display="none";
	 			break;
	 		default:
	 			return false;
	 	}
	 
	 }

	
	// get random number
	function storeLocalData() {
		var getId = Math.floor(Math.random()*100000001);
		// Get all form fields values and store into object.
		// Object properties contains array with the form label and input value.
		
		 getRadios();
		
		var it 			= {};
			it.group 	= ["More Stuff ", killAll('groupie').value ];  // value is important
			it.sport	= ["Sports ", killAll("sport").value];
			it.tname	= ["Team Name ", killAll("tname").value];
			it.name		= ["Name", killAll("name").value];
			it.concerns = ["Concerns", killAll("concerns").value];
			it.range	= ["Price Range ", killAll("range").value];
			it.aDate	= ["Date ", killAll("aDate").value];
			it.payments	= ["Payments ", killAll("payments").value];	
			it.season	= ["Season ", seasonValue];
	       
			// save data to local storage! use Stringify to convert our object to a string
			localStorage.setItem( getId, JSON.stringify(it) );
			alert("Contacts has been saved!");
			
}
	// write data from local storage to browser
	function getData () {
		
		toggle("on");
	
	if( localStorage.length === 0 ) {
		alert("Nothing to show")
		
	}else{
	
		var make = document.createElement("div");
		make.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		make.appendChild(makeList);
		
		document.body.appendChild(make);
		killAll('items').style.display="block";
		
		// looking in local storage
		for(var i=0, j=localStorage.length; i<j; i++) {
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			
			var object = JSON.parse(value); // convert local storage string back to object
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for ( var m in object ) {
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSub = object[m][0]+" : "+object[m][1];
				makeSubLi.innerHTML = optSub;
			
			}
			
		}
	}
}	

function clearLocalData () {
	if( localStorage.length === 0 ) {
			alert("Local storage is empty")
		}else{
			localStorage.clear();
			alert("All data is Deleted!");
			window.location.reload();
			return false;
	}
} 



	// Variable defaults drop down menu
	var addGroups = [ "tickets", "souvenirs", "apparels" ],
		seasonValue;

	dropDownList();
	
 	// Set Links and Submit Click Events	
	var displayData = killAll("Info");
	displayData.addEventListener("click", getData );
	
	var sButton = killAll("bValue");
	sButton.addEventListener("click", storeLocalData);

	var clearLink = killAll("cData");
	clearLink.addEventListener("click", clearLocalData);
	
	//var rangeSlider = killAll("range");
	//rangeSlider.addEventListener("click", slider);
	
	//var rangeValue = killAll("idRange");
	//rangeValue.addEventListener("click", ranger);

});