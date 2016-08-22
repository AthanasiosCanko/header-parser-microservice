var express = require('express');
// We require the 'ip' module to display a user's IP address
var ip = require('ip');
var app = new express();

app.get("/", function(req, res) {
	
	var ipaddress = ip.address();
	// Valuable data is found on request headers
	var lang = req.headers["accept-language"];
	// We filter the software data
	var software = req.headers["user-agent"].split("(")[1].split(")")[0];
	
	// We process it as json and send it as a response
	res.json({
		"ipaddress": ipaddress,
		"lang": lang,
		"software": software
	});
});

// We check for errors during listen
app.listen(process.env.PORT || 8080, function(err) {
	if (err) console.error(err);
	else console.log("Connected...");
});