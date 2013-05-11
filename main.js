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
		selector = killAll('addSelect');
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groupie");   // used for idGetter function
	 for ( var i = 0, j= addGroup.length; i<j; i++) {
	 		var makeOpt = document.createElement('option');
	 		var opt = addGroup[i];
	 		makeOpt.setAttribute("value", opt);
	 		makeOpt.innerHTML = opt;
	 		makeSelect.appendChild(makeOpt);
	    }
	    selector.appendChild(makeSelect);
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
	
	
	function storeLocalData() {
		var getId = Math.floor(Math.random()*100000001);
		// Get all form fields values and store into object.
		// Object properties contains array with the form label and input value.
		
		getRadios();
		
		var it 			= {};
			it.group 	= ["Group ", killAll('groupie').value ];  // value is important
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

	
	// Variable defaults
	var addGroup = [ "tickets", "souvenirs", "apparels" ],
		seasonValue;

	dropDownList();
	
 	// Set Links and Submit Click Events	
 	/*
 	var clearLink = killAll("cData");
 	var displayData = killAll("sData");
	displayData.addEventListener("click", getData);
	clearLink.addEventLister("click", clearLocal);
	*/
	
	var sButton = killAll("bValue");
	sButton.addEventListener("click", storeLocalData);

	
});
