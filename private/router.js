var router = function(app) {
	app.get('/', function(req, res) {

		var head = process.env.NODE_ENV === 'production' ? 'elements/head/production' : 'elements/head/development';

		res.render("app", {
			partials: {
				"head": head
			}
		});
	});
};

exports = module.exports = router;