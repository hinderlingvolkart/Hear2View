;(function($, undefined) {

  // Code goes here...
  var ui = new artoo.ui({
    stylesheets: ['bookmark.css']
  });


  var $invisible = $('body').find('*').not(':visible');
  $('link[rel="stylesheet"]').remove();
  $invisible.addClass('screenreader--invisible');
  $('*').removeAttr('style');
  $('img').each(function(){
    var alt = $(this).attr('alt');
    if (alt) {
      $(this).after('<span class="screenreader--image">' + alt + '</span>');

    }
  });
  
  var styles = artoo.stylesheets['ui.css'];
  artoo.injectInlineStyle(styles);

  console.log('Bookmarklet is ready');

  
}).call(this, artoo.$);
