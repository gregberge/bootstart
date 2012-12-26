define(["jquery", "lib/views/base", "views/elements/nav", "router"],
  function($, BaseView, NavView, router) {
    "use strict";

    var View = BaseView.extend({

      el: $("body"),

      initialize: function() {
        BaseView.prototype.initialize.call(this);
        this.nav = new NavView();

        router.start();
      },

      render: function(data) {
        BaseView.prototype.render.call(this, data);
        this.assign(this.nav, "#nav");
      }

    });

    return View;
  });