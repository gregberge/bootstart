define(["lib/views/template", "text!templates/elements/nav.html", "router"],
function(TemplateView, template, router) {
  "use strict";
  
  var View = TemplateView.extend({
    template: template,
    
    page: "home",
    
    initialize: function() {
      TemplateView.prototype.initialize.call(this);
      router.on("all", this.routeChange, this);
    },
    
    render: function() {
      TemplateView.prototype.render.call(this);
      this.$(".nav li")
      .removeClass("active")
      .filter("[data-page=" + this.page + "]")
      .addClass("active");
    },
    
    routeChange: function(route) {
      if(typeof route !== "undefined") {
        var name = route.match(/:(.*)/)[1];
        this.page = name;
        this.render();
      }
    }
  });
  
  return View;
});