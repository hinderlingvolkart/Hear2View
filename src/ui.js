;(function($, undefined) {

  // Code goes here...
  // var ui = new artoo.ui({
  //   stylesheets: ['bookmark.css']
  // });
  //

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
      console.error('XHR CORS CSS fail:' + styleURI);
    };
    xhr.send();
  }


  function processStylesheet(value) {
    var items = value.cssRules;
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
      loadCSSCors(value.href);
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
      if (this.nodeName == 'IMG' && alt === '') {
        return; // don't show images with alt=""
      }
      alt = alt || $(this).text();
      var $alt = $('<span>' + alt + '</span>');
      copyAttr(this, $alt.get(0));
      $alt.addClass('screenreader--image');
      $(this).after($alt);
  }

  var domProcessor = {
    style: function() {
      processStyleRule(this);
    },
    label: function() {
      var id = $(this).attr('for');
      var target = document.getElementById(id);
      if (!target) {
        $(this).addClass('screenreader--defect');
      }
    },
    ariaLabel: function() {
      var id = $(this).attr('aria-labelledby') || $(this).attr('aria-describedby');
      var target = document.getElementById(id);
      if (target) {
        this.setAttribute('aria-label', $(target).text());
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
  $('[aria-describedby], [aria-labelledby]').each(domProcessor.ariaLabel);
  $('svg').each(domProcessor.svg);



  var headingCounter = 0;
  function getHeadingNav() {
    var html = '<ol id="screenreader--headings">';
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
  $('body').append('<div id="screenreader--cover"></div>');


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
  document.getElementById('screenreader--cover').addEventListener('mousemove', focusByEvent, true);
  document.getElementById('screenreader--cover').addEventListener('touchstart', focusByEvent, true);

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
