;(function(undefined) {artoo.stylesheets['bookmark.css'] = "p {\n  color: red;\n  font-size: 14px;\n}\n";}).call(this);
;(function(undefined) {artoo.stylesheets['view.css'] = "@charset \"UTF-8\";\nbody {\n  font: 100%/1.4 \"Helvetica Neue\", Helvetica, Arial;\n  max-width: 90ex;\n  padding: 20px;\n  margin: 0 auto;\n  background: #f8f8f8; }\n\nimg, svg, video {\n  display: none !important; }\n\na {\n  color: #108AEF;\n  text-decoration: underline; }\n\ninput, textarea, button, select {\n  font: inherit;\n  background: white; }\n\n.screenreader--image {\n  display: block;\n  position: relative;\n  background: rgba(255, 255, 255, 0.5);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px;\n  display: inline-block;\n  min-width: 6em;\n  border: 1px dashed; }\n  .screenreader--image:before {\n    display: inline !important;\n    content: \"Image\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\n.screenreader--invisible,\n[aria-hidden=\"true\"]:not(#screenreader--focus) {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  margin: 0;\n  padding: 0; }\n\n.screenreader--defect {\n  opacity: 0.5;\n  box-shadow: inset 0 0 5px white, 0 0 20px rgba(255, 0, 0, 0.5); }\n\n.screenreader--success {\n  box-shadow: inset 0 0 5px rgba(0, 128, 0, 0.25), 0 0 20px rgba(0, 128, 0, 0.25); }\n\n.screenreader--has-focus:not(html) {\n  opacity: 1;\n  outline: none;\n  position: relative;\n  z-index: 1; }\n\n#screenreader--cover {\n  display: block;\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n#screenreader--focus {\n  pointer-events: none;\n  display: block;\n  position: fixed;\n  z-index: 9999;\n  -webkit-transition: all 150ms;\n  transition: all 150ms; }\n  #screenreader--focus:before {\n    position: absolute;\n    content: '';\n    top: -10px;\n    bottom: -10px;\n    left: -10px;\n    right: -10px;\n    z-index: 1;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n    box-shadow: inset 0 0 10px white, 0 0 40px rgba(0, 0, 0, 0.2); }\n\nhtml:not(.screenreader--has-focus) #screenreader--focus {\n  opacity: 0; }\n\nul > li,\nol > li,\n[role=\"list\"] > [role=\"listitem\"] {\n  margin-left: 1em;\n  display: block !important;\n  position: relative; }\n\nul > li:before,\nol > li:before,\n[role=\"list\"] > [role=\"listitem\"]:before {\n  content: '•' !important;\n  position: absolute;\n  left: -1em;\n  top: 0; }\n\ndl dt {\n  font-weight: bold;\n  display: block !important;\n  margin-top: 1ex; }\n\ndl dd {\n  display: block !important;\n  margin-left: 2em; }\n\n[role=\"tablist\"] {\n  border: 1px solid; }\n  [role=\"tablist\"] [role=\"tab\"] {\n    float: left;\n    display: block;\n    border-right: 1px solid;\n    padding: 4px 10px;\n    border-bottom: 1px solid;\n    margin-bottom: -1px; }\n\n[role=\"tablist\"] {\n  border: 1px solid;\n  padding: 0;\n  display: inline-block !important;\n  border-width: 1px 0 0 1px; }\n  [role=\"tablist\"] [role=\"tab\"] {\n    float: left;\n    border-right: 1px solid;\n    padding: 4px 10px;\n    border-bottom: 1px solid;\n    margin-bottom: -1px; }\n\n[role=\"tablist\"]:after {\n  display: table;\n  content: '';\n  clear: both; }\n\n[aria-selected=\"true\"] {\n  border: 3px solid green; }\n\n[role=\"checkbox\"]:before {\n  content: '☐'; }\n\n[role=\"checkbox\"][aria-checked=\"true\"]:before {\n  content: '☒'; }\n\n[role=\"radio\"]:before {\n  content: '⚪️'; }\n\n[role=\"radio\"][aria-checked=\"true\"]:before {\n  content: '⚫️'; }\n\n[aria-expanded]:before {\n  content: '➡️'; }\n\n[aria-expanded=\"true\"]:before {\n  content: '⬇️'; }\n\n[aria-expanded]:after {\n  display: inline !important;\n  content: \"closed\" !important;\n  font-size: 14px;\n  font-weight: 200;\n  text-transform: normal;\n  background: rgba(240, 240, 240, 0.5) !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  color: black !important;\n  padding: 2px 6px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-left: 0.5ex; }\n\n[aria-expanded=\"true\"]:after {\n  display: inline !important;\n  content: \"expanded\" !important;\n  font-size: 14px;\n  font-weight: 200;\n  text-transform: normal;\n  background: rgba(240, 240, 240, 0.5) !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  color: black !important;\n  padding: 2px 6px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-left: 0.5ex; }\n\nh1,\n[role=\"heading\"][aria-level=\"1\"] {\n  font-size: 60px;\n  margin-bottom: .5ex;\n  line-height: 1.1; }\n  @media (max-width: 600px) {\n    h1,\n    [role=\"heading\"][aria-level=\"1\"] {\n      font-size: 30px; } }\n  h1:after,\n  [role=\"heading\"][aria-level=\"1\"]:after {\n    display: inline !important;\n    content: \"1\" !important;\n    font-size: 14px;\n    font-weight: 200;\n    text-transform: normal;\n    background: rgba(240, 240, 240, 0.5) !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    color: black !important;\n    padding: 2px 6px;\n    border-radius: 2px;\n    vertical-align: middle;\n    margin-left: 0.5ex; }\n\nh2,\n[role=\"heading\"][aria-level=\"2\"] {\n  font-size: 35px;\n  margin-bottom: .5ex;\n  line-height: 1.1; }\n  @media (max-width: 600px) {\n    h2,\n    [role=\"heading\"][aria-level=\"2\"] {\n      font-size: 22px; } }\n  h2:after,\n  [role=\"heading\"][aria-level=\"2\"]:after {\n    display: inline !important;\n    content: \"2\" !important;\n    font-size: 14px;\n    font-weight: 200;\n    text-transform: normal;\n    background: rgba(240, 240, 240, 0.5) !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    color: black !important;\n    padding: 2px 6px;\n    border-radius: 2px;\n    vertical-align: middle;\n    margin-left: 0.5ex; }\n\nh3,\n[role=\"heading\"][aria-level=\"3\"] {\n  font-size: 22px;\n  margin-bottom: .5ex;\n  line-height: 1.1; }\n  @media (max-width: 600px) {\n    h3,\n    [role=\"heading\"][aria-level=\"3\"] {\n      font-size: 18px; } }\n  h3:after,\n  [role=\"heading\"][aria-level=\"3\"]:after {\n    display: inline !important;\n    content: \"3\" !important;\n    font-size: 14px;\n    font-weight: 200;\n    text-transform: normal;\n    background: rgba(240, 240, 240, 0.5) !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    color: black !important;\n    padding: 2px 6px;\n    border-radius: 2px;\n    vertical-align: middle;\n    margin-left: 0.5ex; }\n\nh4,\n[role=\"heading\"][aria-level=\"4\"] {\n  font-size: 18px;\n  margin-bottom: .5ex;\n  line-height: 1.1; }\n  @media (max-width: 600px) {\n    h4,\n    [role=\"heading\"][aria-level=\"4\"] {\n      font-size: 16px; } }\n  h4:after,\n  [role=\"heading\"][aria-level=\"4\"]:after {\n    display: inline !important;\n    content: \"4\" !important;\n    font-size: 14px;\n    font-weight: 200;\n    text-transform: normal;\n    background: rgba(240, 240, 240, 0.5) !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    color: black !important;\n    padding: 2px 6px;\n    border-radius: 2px;\n    vertical-align: middle;\n    margin-left: 0.5ex; }\n\nbutton, [role=\"button\"], input[type=\"button\"], input[type=\"submit\"] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 3px 6px;\n  font-family: inherit;\n  background: #032d7b;\n  color: white;\n  display: inline-block;\n  text-decoration: none;\n  cursor: pointer; }\n\n[aria-selected=\"true\"],\n[aria-expanded=\"true\"] {\n  box-shadow: 0 0 0 1px white, 0 0 20px 3px #8DD906; }\n\n[data-screenreader-describedby]:after {\n  content: attr(data-screenreader-describedby);\n  display: inline !important;\n  font-size: 80%;\n  font-weight: 200;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid;\n  padding: 2px 3px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-left: 0.5ex;\n  text-decoration: none;\n  opacity: 0.5; }\n\n[title]:after {\n  content: attr(title);\n  display: inline !important;\n  font-size: 80%;\n  font-weight: 200;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid;\n  padding: 2px 3px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-left: 0.5ex;\n  text-decoration: none; }\n\n[aria-label]:after {\n  content: attr(aria-label);\n  display: inline !important;\n  font-size: 80%;\n  font-weight: 200;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid;\n  padding: 2px 3px;\n  border-radius: 2px;\n  vertical-align: middle;\n  margin-left: 0.5ex;\n  text-decoration: none; }\n\nb {\n  font-weight: inherit;\n  font-style: inherit; }\n\nnav, [role=\"navigation\"] {\n  display: block;\n  position: relative;\n  background: rgba(194, 229, 236, 0.5);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px;\n  border: 1px solid rgba(113, 183, 197, 0.5); }\n  nav:before, [role=\"navigation\"]:before {\n    display: inline !important;\n    content: \"Navigation\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n  @media (min-width: 1400px) {\n    nav, [role=\"navigation\"] {\n      float: left;\n      margin-left: -350px;\n      width: 300px;\n      box-sizing: border-box;\n      clear: left; } }\n  nav [id^=\"screenreader--heading\"], [role=\"navigation\"] [id^=\"screenreader--heading\"] {\n    margin-top: 0; }\n\naside, [role=\"complementary\"] {\n  display: block;\n  position: relative;\n  background: rgba(0, 0, 0, 0.1);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px; }\n  aside:before, [role=\"complementary\"]:before {\n    display: inline !important;\n    content: \"Complementary\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\narticle, [role=\"article\"] {\n  display: block;\n  position: relative;\n  background: rgba(255, 255, 255, 0.5);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 40px 20px 20px; }\n  article:before, [role=\"article\"]:before {\n    display: inline !important;\n    content: \"Article\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\ndialog, [role=\"dialog\"] {\n  display: block;\n  position: relative;\n  background: rgba(0, 0, 0, 0.1);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px; }\n  dialog:before, [role=\"dialog\"]:before {\n    display: inline !important;\n    content: \"Dialog\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\n[role=\"banner\"] {\n  display: block;\n  position: relative;\n  background: rgba(0, 0, 0, 0.1);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px; }\n  [role=\"banner\"]:before {\n    display: inline !important;\n    content: \"Banner (Page Header)\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\n[role=\"contentinfo\"] {\n  display: block;\n  position: relative;\n  background: rgba(0, 0, 0, 0.1);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px; }\n  [role=\"contentinfo\"]:before {\n    display: inline !important;\n    content: \"Content Info (Page Footer)\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\n[role=\"search\"] {\n  display: block;\n  position: relative;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px; }\n  [role=\"search\"]:before {\n    display: inline !important;\n    content: \"Search\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\nmain, [role=\"main\"] {\n  display: block;\n  position: relative;\n  background: white;\n  padding: 30px 10px 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n  padding: 50px 30px 30px; }\n  main:before, [role=\"main\"]:before {\n    display: inline !important;\n    content: \"Main\" !important;\n    font-size: 10px;\n    font-weight: normal;\n    background: rgba(0, 0, 0, 0.4);\n    color: white;\n    padding: 3px 6px;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n\ntable:not(.screenreader--layouttable) {\n  border-collapse: collapse; }\n  table:not(.screenreader--layouttable) caption {\n    background-color: #999;\n    font-weight: bold;\n    border: 1px solid;\n    padding: 5px; }\n  table:not(.screenreader--layouttable) td, table:not(.screenreader--layouttable) th {\n    border: 1px solid #999;\n    padding: 5px 8px;\n    text-align: left; }\n  table:not(.screenreader--layouttable) th {\n    font-weight: bold;\n    color: white;\n    background: black; }\n\ntable.screenreader--layouttable, table.screenreader--layouttable tbody, table.screenreader--layouttable tfoot, table.screenreader--layouttable thead, table.screenreader--layouttable tr {\n  display: block; }\n\ntable.screenreader--layouttable td, table.screenreader--layouttable th {\n  display: inline; }\n\n.screenreader--header {\n  background: white;\n  padding: 20px;\n  border: 10px solid rgba(0, 0, 0, 0.1);\n  margin: 0 0 20px; }\n  .screenreader--header h1 {\n    font-size: 200%; }\n\n#screenreader--headings {\n  list-style: none; }\n  #screenreader--headings li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 27px;\n    line-height: 22px; }\n    #screenreader--headings li:before {\n      content: none !important; }\n  #screenreader--headings a {\n    text-decoration: none;\n    font-size: 16px; }\n  #screenreader--headings strong {\n    display: inline;\n    font-size: 14px;\n    font-weight: 200;\n    text-transform: normal;\n    background: rgba(240, 240, 240, 0.5);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n    color: black;\n    padding: 2px 6px;\n    border-radius: 2px;\n    vertical-align: middle;\n    margin-right: 0.5ex; }\n\n#screenreader--links {\n  list-style: none; }\n  #screenreader--links li {\n    list-style: none;\n    margin: 5px;\n    display: inline-block !important;\n    border: 1px solid #777;\n    padding: 1px 1ex;\n    background: white;\n    border-radius: 4px; }\n    #screenreader--links li:before {\n      content: none !important; }\n\n[role=\"presentation\"] {\n  display: inline !important;\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  font: inherit; }\n";}).call(this);
;(function(undefined) {artoo.templates['bookmark.tpl'] = "";}).call(this);
;(function($, undefined) {

  // Code goes here...
  // var ui = new artoo.ui({
  //   stylesheets: ['bookmark.css']
  // });
  //


  function nodeName(el) {
    return el.nodeName.toUpperCase();
  }


  function loadCSSCors(stylesheet_uri) {
    var _xhr = window.XMLHttpRequest;
    var has_cred = false;
    try {has_cred = _xhr && ('withCredentials' in (new _xhr()));} catch(e) {}
    if (!has_cred) {
      console.error('CORS not supported');
      return;
    }
    var xhr = new _xhr();
    xhr.open('GET', stylesheet_uri);
    xhr.onload = function() {
      xhr.onload = xhr.onerror = null;
      if (xhr.status < 200 || xhr.status >=300) {
        console.error('style failed to load: ' + stylesheet_uri)
      } else {
        var style_tag = document.createElement('style');
        style_tag.appendChild(document.createTextNode(xhr.responseText));
        document.head.appendChild(style_tag);
      }
    }
    xhr.onerror = function() {
      xhr.onload = xhr.onerror = null;
      console.log('XHR CORS CSS fail:' + stylesheet_uri);
    };
    xhr.send();
  }


  function processStylesheet(value) {
    var items;
    try {
      items = value.rules || value.cssRules;
    } catch (error) {
      console.warn('Stylesheet cannot be processed, has no rules');
      return;
    }
    if (items) {
      for (var i = 0; items && i < items.length; i++) {
        if (items[i].type === items[i].STYLE_RULE) {
          processStyleRule(items[i]);
        } else
        if (items[i].styleSheet) {
          processStylesheet(items[i].styleSheet);
        } else
        if (items[i].cssRules) {
          processStylesheet(items[i]);
        }
      }
    } else {
      console.log("Stylesheet can't be processed due to security restrictions. Trying to work around it.", value.href);
      value.disabled = true;
      // loadCSSCors(value.href);
    }
  }

  function processStyleRule(value) {
    var visibility = value.style.visibility;
    var display = value.style.display;
    var content = value.style.content;
    value.style.cssText = '';
    if (content === '""' || content == "''") {
      return;
    }
    value.style.display = display == 'inline-block' ? 'inline' : (display.indexOf('flex') >= 0 ? 'block' : display);
    value.style.content = content;
    if (visibility) {
      value.style.visibility = visibility == 'hidden' ? 'hidden' : 'visible';
    }
  }



  // clean existing stylesheets

  function processStylesheets() {
    for (var i=0 ; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.processed) {
        sheet.processed = true;
        processStylesheet(sheet);
      }
    }
  }


  processStylesheets();

  function copyAttr(src, dst) {
    for (var i = 0; i < src.attributes.length; i++) {
      dst.setAttribute(src.attributes[i].name, src.attributes[i].value);
    }
  }

  function processFigure() {
      var alt = $(this).attr('alt');
      if (alt === '') {
        if (nodeName(this) == 'IMG') {
          return; // don't show images with alt=""
        }
      }
      alt = alt || getSpokenText(this);
      var $alt = $('<span></span>');
      copyAttr(this, $alt.get(0));
      if (!alt) {
        if (nodeName(this) === 'SVG') {
          return; // ignore svg without text
        } else {
          alt = '???';
          $alt.addClass('screenreader--defect');
        }
      }
      $alt.text(alt);
      $alt.addClass('screenreader--image');
      $(this).after($alt);
  }

  function getSpokenText(el) {
    var $el = $(el);
    var text;
    var rel = $el.attr('aria-labelledby');
    if (rel) {
      rel = rel.replace(/(\S+)/g, '#$1').replace(/\s+/, ',');
      text = $(rel).text();
    }
    text = text || $el.attr('aria-label') || $el.text();
    rel = $el.attr('title');
    text = $.trim(text);
    if (rel) {
      if (text) {
        text += ', ' + rel;
      } else {
        text = rel;
      }
    }
    return text;
  }

  var domProcessor = {
    style: function() {
      processStyleRule(this);
    },
    label: function() {
    },
    input: function() {
      var id = this.id;
      var target = document.querySelector('label[for="' + id + '"]');
      if (!target) {
        $(this).addClass('screenreader--defect');
      } else {
        $([this, target]).addClass('screenreader--success');
      }
    },
    ariaLabel: function() {
      var id = $(this).attr('aria-labelledby');
      id = id.replace(/(\S+)/g, '#$1').replace(/\s+/, ',');
      var target = $(id);
      if (target) {
        this.setAttribute('aria-label', target.text());
      }
    },
    ariaDescribed: function() {
      var id = $(this).attr('aria-describedby');
      id = id.replace(/(\S+)/g, '#$1').replace(/\s+/, ',');
      var target = $(id);
      if (target) {
        this.setAttribute('data-screenreader-describedby', target.text());
      }
    },
    table: function() {
      var $table = $(this);
      var isTable = true;
      isTable = isTable && $table.css('display') == 'table';
      isTable = isTable && $table.find('th, tbody, caption').length > 0;
      if (!isTable) {
        $table.addClass('screenreader--layouttable');
      }
    },
    svg: processFigure,
    img: processFigure
  }

  $('[style]').each(domProcessor.style);
  $('table').filter(domProcessor.table);
  $('img, input[type="image"]').each(domProcessor.img);
  $('[aria-labelledby]').each(domProcessor.ariaLabel);
  $('[aria-describedby]').each(domProcessor.ariaDescribed);
  $('label').each(domProcessor.label);
  $('input,textarea,select').each(domProcessor.input);
  $('svg').each(domProcessor.svg);



  var headingCounter = 0;
  function getHeadingNav() {
    var html = '<div class="screenreader--header">';
    html += '<h1>Headings</h1><ol id="screenreader--headings">';
    $('h1, h2, h3, h4, h5, h6, h7, h8, [role="heading"]').each(function() {
      var $heading = $(this);
      if (!$heading.is(':visible')) {
        return;
      }
      if ($heading.attr('aria-hidden') == 'true') {
        return;
      }
      if ($heading.outerWidth() === 0 && $heading.outerHeight() === 0) {
        return;
      }
      var level = 0;
      var match = this.nodeName.match(/H(\d)/);
      if (match) {
        level = Number(match[1]);
      }
      match = $heading.attr('aria-level');
      if (match) {
        level = Number(match);
      }
      if (!this.id) {
        headingCounter++;
        this.id = 'screenreader--heading--' + headingCounter;
      }
      html += '<li style="padding-left: ' + (level-1) + 'em;"><a href="#' + this.id + '"><strong>' + level + '</strong> ' + $heading.text() + '</a></li>';
    });
    html += '</ol>';

    html += '<h1>Links &amp; Buttons</h1><ol id="screenreader--links">';
    var $links = $('a[href], [role="button"][tabindex], button');
    $links.each(function() {
      html += '<li>' + getSpokenText(this) + '</li>';
    });
    html += '</ul>';

    html += '</div>';
    return html;
  }


  // add hear2view stylesheet

  var styles = artoo.stylesheets['view.css'];
  artoo.injectInlineStyle(styles);

  // avoid our stylesheet from being processed
  for (var i = 0; i < document.styleSheets.length; i++) {
    document.styleSheets[i].processed = true;
  }

  $('body').prepend(getHeadingNav());
  $('body').append('<div id="screenreader--focus"></div>');
  // $('body').append('<div id="screenreader--cover"></div>');


  function setFocus(target, focus) {
    var setClass = focus ? 'addClass' : 'removeClass';
    var $focus = $(target);
    $('html')[setClass]('screenreader--has-focus');
    $(event.target)[setClass]('screenreader--has-focus');
    if (event.target.id) {
      var $labels = $('label[for="' + event.target.id + '"]')[setClass]('screenreader--has-focus');
      $focus = $focus.add($labels);
    }
    return $focus;
  }

  function updateFocus(target) {
    if (!target) return;
    var $focus = setFocus(target, true);
    var rect = {left: Number.MAX_VALUE, top: Number.MAX_VALUE, bottom: Number.MIN_VALUE, right: Number.MIN_VALUE};
    $focus.each(function(){
      var r = this.getBoundingClientRect();
      rect.left = Math.min(rect.left, r.left);
      rect.top = Math.min(rect.top, r.top);
      rect.right = Math.max(rect.right, r.right);
      rect.bottom = Math.max(rect.bottom, r.bottom);
    });
    $('#screenreader--focus').css({
     left: rect.left, top: rect.top, width: rect.right - rect.left, height: rect.bottom - rect.top
    });
  }
  document.addEventListener('focus', function(e) {
    updateFocus(e.target);
  }, true);

  document.addEventListener('scroll', function(e) {
    updateFocus(document.activeElement);
  }, true);


  document.addEventListener('blur', function(event) {
    setFocus(event.target, false);
  }, true);




  // block mouse only events

  function stopEvent(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  function focusByEvent(event) {
    var elements = document.elementsFromPoint(event.clientX, event.clientY);
    var el;
    for (var i = 0; i < elements.length; i++) {
      el = elements[i];
      el.focus();
      if (document.activeElement == el) {
        break;
      }
    }
  }
  document.body.addEventListener('mousemove', focusByEvent, true);
  document.body.addEventListener('touchstart', focusByEvent, true);

  console.log('Bookmarklet is ready');




  // zu überwachende Zielnode (target) auswählen
  var target = document;

  // eine Instanz des Observers erzeugen
  var observer = new MutationObserver(function(mutations) {
    observer.disconnect(); // ignore our own manipulations
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'style' && mutation.target.id !== 'screenreader--focus') {
        domProcessor.style.call(mutation.target);
      }
      else
      if (mutation.addedNodes) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          var node = mutation.addedNodes[i];
          if (node.nodeName == 'TABLE') {
            domProcessor.table.call(node);
          } else
          if (node.nodeName == 'IMG') {
            domProcessor.img.call(node);
          } else
          if (node.nodeName == 'INPUT' || node.nodeName == 'TEXTAREA' || node.nodeName == 'SELECT') {
            domProcessor.input.call(node);
          } else
          if (node.nodeName == 'LABEL') {
            domProcessor.label.call(node);
          } else
          if (node.nodeName == 'SVG') {
            domProcessor.svg.call(node);
          } else
          if (node.nodeName == 'STYLE' || node.nodeName == 'LINK') {
            processStylesheets();
          }
        }
      }
    });
    observer.observe(target, config);
  });

  // Konfiguration des Observers: alles melden - Änderungen an Daten, Kindelementen und Attributen
  var config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: false,
    attributeFilter: ['style']
  };

  // eigentliche Observierung starten und Zielnode und Konfiguration übergeben
  observer.observe(target, config);




}).call(this, artoo.$);
