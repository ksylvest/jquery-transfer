/*!
 * jQuery Transfer
 *
 * Copyright 2010 Kevin Sylvestre
 */

(function ($) {

  $.fn.transfer = function(options) {

    var settings = {
      url: 'http://transferhq.heroku.com/',
      auto: true,
      method: 'POST',
      parameters: {},
      events: { 
        progress: null, 
        error: null, 
      },
    };
    
    if (options) ($.extend(settings, options));
    
    const XMLHttpFactories = [
      function () { return new XDomainRequest(); },
      function () { return new XMLHttpRequest(); },
      function () { return new ActiveXObject("Msxml2.XMLHTTP"); },
      function () { return new ActiveXObject("Msxml3.XMLHTTP"); },
      function () { return new ActiveXObject("Microsoft.XMLHTTP"); },
    ];
    
    var xhr = null;
    
    for (var i = 0; i < XMLHttpFactories.length; i++) {
      try { xhr = XMLHttpFactories[i](); break; } catch (exception) { continue; }
    }
    
    if (!(xhr && ('upload' in xhr) && ('onprogress' in xhr.upload))) return;
    
    xhr.upload.addEventListener('progress', settings.events.progress, false);
    
    return $(this).change(function () {
      
      for (var i = 0; i < this.files.length; i++) {
        
        var file = this.files[i];
        
        var formdata = new FormData();
        formdata.append('file', file);
        
        xhr.open(settings.method, settings.url, true);
        xhr.send(formdata);
        
      }
      
    });

  };
  
}) (jQuery);