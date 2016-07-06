var Details = (function(){

	function loadPerson(ID){
		$.ajax("details/" + ID + ".html", { dataType: "text" })
		.then(function(contents){
			$content.html(contents);
		});
	}

	var $content;

	function init(){
		$content = $("[rel=js-details]");

		EVT.on("person-selected",loadPerson);
	}
	
	EVT.on("init", init);

	return {
		init: init,
		loadPerson: loadPerson
	};
	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.
})();
