define(["lib/views/page", "text!templates/pages/about.html"],
	function(PageView, template) {
		"use strict";

		var View = PageView.extend({
			template: template,
			render: function() {
				PageView.prototype.render.call(this);
			}
		});

		return View;
	});