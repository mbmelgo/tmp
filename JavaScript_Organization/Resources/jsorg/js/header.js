var Header = (function (){

  function headerLinkClicks(evt){
      evt.preventDefault();
      evt.stopPropagation();
      evt.stopImmediatePropagation();

      var url = $(evt.target).attr("href");

      $.ajax(url,{ dataType: "text"})
      .then(function(contents){
        $modal.html(contents).show();
      });
  }

  function init() {
      $modal = $("[rel='js-modal']");

      $("[rel='js-controls']").on("click","[rel*='js-']",headerLinkClicks);
  }

  var $modal;

  EVT.on("init", init);

  return {
      init: init
  };

})();
