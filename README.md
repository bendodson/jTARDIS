![](http://bendodson.com/_images/projects/jtardis-thumb.jpg)

jTARDIS is a jQuery plugin which allows you to see what sites a user has visited by going back through their browser history. Traditionally, it has not been possible to go through a users browser history as this can obviously be seen as a security risk. However, with this plugin you can essentially ask the users browser "have you been to facebook.com" (or any other site) and it will come back with a yes or a no. This is made possible by generating a list of links which you'd like to know if the user has been to or not and then checking with the browser whether they flag up as :visited. There are a few javascript snippets floating around which allow you to do this by checking the colour of :visited links but these are generally quite large scripts as IE requires that you place such links inside a visible iframe and get the computed style. This plugin uses 2 lines of CSS and a small amount of jQuery magic to get the same results in a cleverer way - it's also completely cross-browser compatible without any hacks or browser sniffing.

Installation
============

You will need the latest version of jQuery. Include the CSS file and the javascript files in the usual way (please make sure you include the javascript in the following order - jquery.js, jtardis.sites.js, jtardis.js) to get everything ready. jTARDIS will now automatically create a new global variable within jQuery which you can query in the following manner (please note that the site names will differ depending on how you've configured the jtardis.sites.js file):

	$(document).ready(function() {

	    if ($.jtardis.facebook) {
	        // run some code if the user has visited facebook
	    } else {
	        // run some code if the user hasn't visited facebook
	    }
    
	});

There are also 2 other auto generated global variables that are available to you:

**$.jtardis.list** - an array with the pretty names of all the sites that have been visited.  
**$.jtardis.total** - an integer with the total number of sites from your list that returned true.

Configuring the jtardis.sites.js file
-------------------------------------

The only piece of configuration you'll need to do is to the jtardis.sites.js file which contains a JSON object with all of the sites you are checking for. This JSON file is in the following format:

	var sites = {
	    "facebook": {
	        "name": "Facebook",
	        "links": ["http://facebook.com/home.php", "http://facebook.com", "https://login.facebook.com/login.php"]
	    },
	    "delicious": {
	        "name": "Del.icio.us",
	        "links": ["http://delicious.com/"]
	    },
	    "bendodson": {
	        "name": "Ben Dodson's Site",
	        "links": ["http://labs.bendodson.com","http://bendodson.com"]
	    }        
	}
	
A JSON object is created against the variable "sites" which the **jtardis.js** file will use later. The JSON object is then setup with a short name for each site which then has assigned to it a "name" attribute and a "links" array. The file has been setup this way (with 2 names) so that you can have a code friendly name for when you are checking if the site has been visited (the short name will be used for the **$.jtardis.sitename** variable and thus must conform to the conditions for javascript variables - no spaces, special characters, etc) but a pretty name if you want to display all of the sites you've managed to sniff - this would usually be accessed from the **$.jtardis.list** array which contains the pretty names of all the sites that have come back as true.

The links array for each site can have as many urls in it as you like - please bear in mind that the script will only look for that exact URL so if you have http://last.fm/ that will not match http://last.fm/user/bendodson/. Please also note that IE will only record the final URL from any redirections so whereas Firefox will pick up http://del.icio.us/ before it is redirected to http://delicious.com/, IE won't.

Suggested Uses
--------------

There are numerous ways you can use this script but I've listed a few suggestions below. If you are using jTARDIS, then let me know so I can add your site to the list!

*	Show only relevant social networking badges to your users by sniffing to see which ones they belong to.
*	Offer special deals to customers to your e-commerce site if you know they have been to a competitors site.
*	Present users with a survey if they have been to a certain section of your site for which you'd like their feedback.
*	Customize related blog articles depending on where a user has been (e.g. if you wrote an article about the BBC iPlayer and they have been to that site, then promote that blog article above your other related ones).
*	Check to see if users have seen your posted videos on youtube. If they have, ask them what they thought of them - if they haven't, then give them a link!


License
=======

This work is licensed under a [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).

