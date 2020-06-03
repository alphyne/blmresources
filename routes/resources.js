
/*
 * GET project page.
 */

var data = require('../data.json');

exports.view = function(req, res){
	var param = req.params.title;

	var resources = data.resources;

  	for(var i = 0; i < resources.length; i++){
		var resource = resources[i];

		if (param == resource.url) {
		res.render("resource", {
			data,
			resource,
			title: resource.name,
		});
		return;
	}
}

};
