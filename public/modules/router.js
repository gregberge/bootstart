define(
  ["backbone"],
  function(Backbone) {
    "use strict";

    var Router = Backbone.Router.extend( {

      routes : {
        "": {
          page: "home"
        },
        "about": {
          page: "about"
        }
      },

      initialize: function() {
        this.views = [];

        var self = this,
        routeConfig,
        handleRouteConfig = function(routeConfig) {
          self.route(route, routeConfig.page, function() {
            self.routeHandler(routeConfig, arguments);
          });
        };

        for(var route in this.routes) {
          handleRouteConfig(this.routes[route]);
        }
      },

      routeHandler: function(route, params) {
        var self = this;

        if(typeof self.views[route.page] !== "undefined") {
          this.renderPage(route.page);
        }
        else {
          require(["views/pages/util/loading"], function(LoadingView) {
            if(typeof self.loadingView === "undefined") {
              self.loadingView = new LoadingView();
            }

            self.loadingView.render();

            require(["views/pages/" + route.page], function(PageView) {
              self.views[route.page] = new PageView();
              self.renderPage(route.page, params);
            });
          });
        }
      },

      renderPage: function(page, params) {
        var pageView = this.views[page];

        pageView.urlParams = params;

        if(typeof pageView.load !== "undefined") {
          pageView.load();
        }

        pageView.render();
      },

      start: function() {
        Backbone.history.start();
      }

    });

return new Router();
});