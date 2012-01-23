jQuery(document).ready(function() {
	
	// create jtardis object and add an empty array for list and set the total count to 0
	var jtardis = new Object();
	jtardis.list = new Array();
	jtardis.total = 0;
	
	// create an empty div with an id of jtardis which we can use to isolate all DOM manipulation that is required
	jQuery('body').append('<div id="jtardis"></div>');

	// output all urls into the jtardis div
	for (var site in sites) {
		jtardis[site] = false; // create property of current site in the jtardis object
		for (var i=0; i < sites[site].links.length; i++) {
			jQuery('#jtardis').append('<a href="'+sites[site].links[i]+'" rel="'+site+'">'+sites[site].name+'</a>');
		}		
	}
	
	// remove all non-visited sites
	jQuery('#jtardis a:not(:visible)').remove();
	
	// loop through remaining items and add them to the jtardis object
	jQuery('#jtardis a').each(function() {
		var site = jQuery(this).attr('rel');
		if (!jtardis[site]) {
			jtardis[site] = true; // set site detection to true
			jtardis.list[jtardis.total] = jQuery(this).text(); // add site name to list array
			jtardis.total++; // increase the total number of visited sites
		}
	});
	
	// change the jtardis object into a global jquery object
	jQuery.jtardis = jtardis;
		
	// delete all inserted dom elements
	jQuery('#jtardis').remove();
	
	// example usage
	// if ($.jtardis.facebook) { // do something }
	// alert(jQuery.jtardis.list);
	// alert(jQuery.jtardis.total);
	
});
