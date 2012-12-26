define(["lib/views/page", "text!templates/pages/util/loading.html"],
function(PageView, template) {
  "use strict";
  
  var View = PageView.extend({
    template: template
  });

  return View;
});