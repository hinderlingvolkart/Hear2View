javascript: (function(n){var e={reExec:!1,eval:'"(function(){artoo.stylesheets[\\"bookmark.css\\"]=\\"p {\\\\n  color: red;\\\\n  font-size: 14px;\\\\n}\\\\n\\"}).call(this),function(){artoo.stylesheets[\\"view.css\\"]=\'@charset \\"UTF-8\\";\\\\nbody {\\\\n  font: 100%/1.4 \\"Helvetica Neue\\", Helvetica, Arial;\\\\n  max-width: 90ex;\\\\n  padding: 20px;\\\\n  margin: 0 auto;\\\\n  background: #f8f8f8; }\\\\n\\\\nimg, svg, video {\\\\n  display: none !important; }\\\\n\\\\na {\\\\n  color: #108AEF;\\\\n  text-decoration: underline; }\\\\n\\\\ninput, textarea, button, select {\\\\n  font: inherit;\\\\n  background: white; }\\\\n\\\\n.screenreader--image {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  display: inline-block;\\\\n  min-width: 6em;\\\\n  border: 1px dashed; }\\\\n  .screenreader--image:before {\\\\n    display: inline !important;\\\\n    content: \\"Image\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n.screenreader--invisible,\\\\n[aria-hidden=\\"true\\"]:not(#screenreader--focus) {\\\\n  opacity: 0;\\\\n  width: 0;\\\\n  height: 0;\\\\n  margin: 0;\\\\n  padding: 0; }\\\\n\\\\n.screenreader--defect {\\\\n  opacity: 0.5;\\\\n  box-shadow: inset 0 0 5px white, 0 0 20px rgba(255, 0, 0, 0.5); }\\\\n\\\\n.screenreader--success {\\\\n  box-shadow: inset 0 0 5px rgba(0, 128, 0, 0.25), 0 0 20px rgba(0, 128, 0, 0.25); }\\\\n\\\\n.screenreader--has-focus:not(html) {\\\\n  opacity: 1;\\\\n  outline: none;\\\\n  position: relative;\\\\n  z-index: 1; }\\\\n\\\\n#screenreader--cover {\\\\n  display: block;\\\\n  position: fixed;\\\\n  z-index: 9998;\\\\n  top: 0;\\\\n  bottom: 0;\\\\n  left: 0;\\\\n  right: 0; }\\\\n\\\\n#screenreader--focus {\\\\n  pointer-events: none;\\\\n  display: block;\\\\n  position: fixed;\\\\n  z-index: 9999;\\\\n  -webkit-transition: all 150ms;\\\\n  transition: all 150ms; }\\\\n  #screenreader--focus:before {\\\\n    position: absolute;\\\\n    content: \\\\\'\\\\\';\\\\n    top: -10px;\\\\n    bottom: -10px;\\\\n    left: -10px;\\\\n    right: -10px;\\\\n    z-index: 1;\\\\n    border: 1px solid rgba(0, 0, 0, 0.5);\\\\n    box-shadow: inset 0 0 10px white, 0 0 40px rgba(0, 0, 0, 0.2); }\\\\n\\\\nhtml:not(.screenreader--has-focus) #screenreader--focus {\\\\n  opacity: 0; }\\\\n\\\\nul > li,\\\\nol > li,\\\\n[role=\\"list\\"] > [role=\\"listitem\\"] {\\\\n  margin-left: 1em;\\\\n  display: block !important;\\\\n  position: relative; }\\\\n\\\\nul > li:before,\\\\nol > li:before,\\\\n[role=\\"list\\"] > [role=\\"listitem\\"]:before {\\\\n  content: \\\\\'•\\\\\' !important;\\\\n  position: absolute;\\\\n  left: -1em;\\\\n  top: 0; }\\\\n\\\\ndl dt {\\\\n  font-weight: bold;\\\\n  display: block !important;\\\\n  margin-top: 1ex; }\\\\n\\\\ndl dd {\\\\n  display: block !important;\\\\n  margin-left: 2em; }\\\\n\\\\n[role=\\"tablist\\"] {\\\\n  border: 1px solid; }\\\\n  [role=\\"tablist\\"] [role=\\"tab\\"] {\\\\n    float: left;\\\\n    display: block;\\\\n    border-right: 1px solid;\\\\n    padding: 4px 10px;\\\\n    border-bottom: 1px solid;\\\\n    margin-bottom: -1px; }\\\\n\\\\n[role=\\"tablist\\"] {\\\\n  border: 1px solid;\\\\n  padding: 0;\\\\n  display: inline-block !important;\\\\n  border-width: 1px 0 0 1px; }\\\\n  [role=\\"tablist\\"] [role=\\"tab\\"] {\\\\n    float: left;\\\\n    border-right: 1px solid;\\\\n    padding: 4px 10px;\\\\n    border-bottom: 1px solid;\\\\n    margin-bottom: -1px; }\\\\n\\\\n[role=\\"tablist\\"]:after {\\\\n  display: table;\\\\n  content: \\\\\'\\\\\';\\\\n  clear: both; }\\\\n\\\\n[aria-selected=\\"true\\"] {\\\\n  border: 3px solid green; }\\\\n\\\\n[role=\\"checkbox\\"]:before {\\\\n  content: \\\\\'☐\\\\\'; }\\\\n\\\\n[role=\\"checkbox\\"][aria-checked=\\"true\\"]:before {\\\\n  content: \\\\\'☒\\\\\'; }\\\\n\\\\n[role=\\"radio\\"]:before {\\\\n  content: \\\\\'⚪️\\\\\'; }\\\\n\\\\n[role=\\"radio\\"][aria-checked=\\"true\\"]:before {\\\\n  content: \\\\\'⚫️\\\\\'; }\\\\n\\\\n[aria-expanded]:before {\\\\n  content: \\\\\'➡️\\\\\'; }\\\\n\\\\n[aria-expanded=\\"true\\"]:before {\\\\n  content: \\\\\'⬇️\\\\\'; }\\\\n\\\\n[aria-expanded]:after {\\\\n  display: inline !important;\\\\n  content: \\"closed\\" !important;\\\\n  font-size: 14px;\\\\n  font-weight: 200;\\\\n  text-transform: normal;\\\\n  background: rgba(240, 240, 240, 0.5) !important;\\\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n  color: black !important;\\\\n  padding: 2px 6px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex; }\\\\n\\\\n[aria-expanded=\\"true\\"]:after {\\\\n  display: inline !important;\\\\n  content: \\"expanded\\" !important;\\\\n  font-size: 14px;\\\\n  font-weight: 200;\\\\n  text-transform: normal;\\\\n  background: rgba(240, 240, 240, 0.5) !important;\\\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n  color: black !important;\\\\n  padding: 2px 6px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex; }\\\\n\\\\nh1,\\\\n[role=\\"heading\\"][aria-level=\\"1\\"] {\\\\n  font-size: 60px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h1,\\\\n    [role=\\"heading\\"][aria-level=\\"1\\"] {\\\\n      font-size: 30px; } }\\\\n  h1:after,\\\\n  [role=\\"heading\\"][aria-level=\\"1\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"1\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nh2,\\\\n[role=\\"heading\\"][aria-level=\\"2\\"] {\\\\n  font-size: 35px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h2,\\\\n    [role=\\"heading\\"][aria-level=\\"2\\"] {\\\\n      font-size: 22px; } }\\\\n  h2:after,\\\\n  [role=\\"heading\\"][aria-level=\\"2\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"2\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nh3,\\\\n[role=\\"heading\\"][aria-level=\\"3\\"] {\\\\n  font-size: 22px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h3,\\\\n    [role=\\"heading\\"][aria-level=\\"3\\"] {\\\\n      font-size: 18px; } }\\\\n  h3:after,\\\\n  [role=\\"heading\\"][aria-level=\\"3\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"3\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nh4,\\\\n[role=\\"heading\\"][aria-level=\\"4\\"] {\\\\n  font-size: 18px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h4,\\\\n    [role=\\"heading\\"][aria-level=\\"4\\"] {\\\\n      font-size: 16px; } }\\\\n  h4:after,\\\\n  [role=\\"heading\\"][aria-level=\\"4\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"4\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nbutton, [role=\\"button\\"], input[type=\\"button\\"], input[type=\\"submit\\"] {\\\\n  -webkit-appearance: none;\\\\n     -moz-appearance: none;\\\\n          appearance: none;\\\\n  border: 1px solid black;\\\\n  border-radius: 4px;\\\\n  padding: 3px 6px;\\\\n  font-family: inherit;\\\\n  background: #032d7b;\\\\n  color: white;\\\\n  display: inline-block;\\\\n  text-decoration: none;\\\\n  cursor: pointer; }\\\\n\\\\n[aria-selected=\\"true\\"],\\\\n[aria-expanded=\\"true\\"] {\\\\n  box-shadow: 0 0 0 1px white, 0 0 20px 3px #8DD906; }\\\\n\\\\n[title]:after {\\\\n  content: attr(title);\\\\n  display: inline !important;\\\\n  font-size: 80%;\\\\n  font-weight: 200;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  border: 1px solid;\\\\n  padding: 2px 3px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex;\\\\n  text-decoration: none; }\\\\n\\\\n[aria-label]:after {\\\\n  content: attr(aria-label);\\\\n  display: inline !important;\\\\n  font-size: 80%;\\\\n  font-weight: 200;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  border: 1px solid;\\\\n  padding: 2px 3px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex;\\\\n  text-decoration: none; }\\\\n\\\\nnav, [role=\\"navigation\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(194, 229, 236, 0.5);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  border: 1px solid rgba(113, 183, 197, 0.5); }\\\\n  nav:before, [role=\\"navigation\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Navigation\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n  @media (min-width: 1400px) {\\\\n    nav, [role=\\"navigation\\"] {\\\\n      float: left;\\\\n      margin-left: -350px;\\\\n      width: 300px;\\\\n      box-sizing: border-box;\\\\n      clear: left; } }\\\\n  nav [id^=\\"screenreader--heading\\"], [role=\\"navigation\\"] [id^=\\"screenreader--heading\\"] {\\\\n    margin-top: 0; }\\\\n\\\\naside, [role=\\"complementary\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  aside:before, [role=\\"complementary\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Complementary\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\narticle, [role=\\"article\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\\\n  padding: 40px 20px 20px; }\\\\n  article:before, [role=\\"article\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Article\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\ndialog, [role=\\"dialog\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  dialog:before, [role=\\"dialog\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Dialog\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n[role=\\"banner\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  [role=\\"banner\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Banner (Page Header)\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n[role=\\"contentinfo\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  [role=\\"contentinfo\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Content Info (Page Footer)\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n[role=\\"search\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.2);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  [role=\\"search\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Search\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\nmain, [role=\\"main\\"] {\\\\n  display: block !important;\\\\n  position: relative;\\\\n  background: white;\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  border: 1px solid rgba(0, 0, 0, 0.6);\\\\n  padding: 50px 30px 30px; }\\\\n  main:before, [role=\\"main\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Main\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\ntable:not(.screenreader--layouttable) {\\\\n  border-collapse: collapse; }\\\\n  table:not(.screenreader--layouttable) caption {\\\\n    background-color: #999;\\\\n    font-weight: bold;\\\\n    border: 1px solid;\\\\n    padding: 5px; }\\\\n  table:not(.screenreader--layouttable) td, table:not(.screenreader--layouttable) th {\\\\n    border: 1px solid #999;\\\\n    padding: 5px 8px;\\\\n    text-align: left; }\\\\n  table:not(.screenreader--layouttable) th {\\\\n    font-weight: bold;\\\\n    color: white;\\\\n    background: black; }\\\\n\\\\ntable.screenreader--layouttable, table.screenreader--layouttable tbody, table.screenreader--layouttable tfoot, table.screenreader--layouttable thead, table.screenreader--layouttable tr {\\\\n  display: block; }\\\\n\\\\ntable.screenreader--layouttable td, table.screenreader--layouttable th {\\\\n  display: inline; }\\\\n\\\\n#screenreader--headings {\\\\n  background: white;\\\\n  padding: 20px;\\\\n  border: 10px solid rgba(0, 0, 0, 0.1);\\\\n  margin: 0 0 20px; }\\\\n  #screenreader--headings li {\\\\n    list-style: none;\\\\n    margin: 0;\\\\n    padding: 0;\\\\n    font-size: 27px;\\\\n    line-height: 22px; }\\\\n  #screenreader--headings a {\\\\n    text-decoration: none;\\\\n    font-size: 16px; }\\\\n  #screenreader--headings strong {\\\\n    display: inline;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5);\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-right: 0.5ex; }\\\\n\\\\n[role=\\"presentation\\"] {\\\\n  display: inline !important;\\\\n  margin: 0;\\\\n  padding: 0;\\\\n  background: transparent;\\\\n  font: inherit; }\\\\n\'}.call(this),function(){artoo.templates[\\"bookmark.tpl\\"]=\\"\\"}.call(this),function(n){function e(n){var e=window.XMLHttpRequest,t=!1;try{t=e&&\\"withCredentials\\"in new e}catch(a){}if(!t)return console.error(\\"CORS not supported\\"),void 0;var r=new e;r.open(\\"GET\\",n),r.onload=function(){if(r.onload=r.onerror=null,r.status<200||r.status>=300)console.error(\\"style failed to load: \\"+n);else{var e=document.createElement(\\"style\\");e.appendChild(document.createTextNode(r.responseText)),document.head.appendChild(e)}},r.onerror=function(){r.onload=r.onerror=null,console.error(\\"XHR CORS CSS fail:\\"+styleURI)},r.send()}function t(n){var r=n.cssRules;if(r)for(var o=0;r&&o<r.length;o++)r[o].type===r[o].STYLE_RULE?a(r[o]):r[o].styleSheet?t(r[o].styleSheet):r[o].cssRules&&t(r[o]);else console.log(\\"Stylesheet can\'t be processed due to security restrictions. Trying to work around it.\\",n.href),n.disabled=!0,e(n.href)}function a(n){var e=n.style.visibility,t=n.style.display,a=n.style.content;n.style.cssText=\\"\\",\'\\"\\"\'!==a&&\\"\'\'\\"!=a&&(n.style.display=\\"inline-block\\"==t?\\"inline\\":t.indexOf(\\"flex\\")>=0?\\"block\\":t,n.style.content=a,e&&(n.style.visibility=\\"hidden\\"==e?\\"hidden\\":\\"visible\\"))}function r(){for(var n=0;n<document.styleSheets.length;n++){var e=document.styleSheets[n];e.processed||(e.processed=!0,t(e))}}function o(n,e){for(var t=0;t<n.attributes.length;t++)e.setAttribute(n.attributes[t].name,n.attributes[t].value)}function i(){var e=n(this).attr(\\"alt\\");if(\\"IMG\\"!=this.nodeName||\\"\\"!==e){e=e||n(this).text();var t=n(\\"<span>\\"+e+\\"</span>\\");o(this,t.get(0)),t.addClass(\\"screenreader--image\\"),n(this).after(t)}}function l(){var e=\'<ol id=\\"screenreader--headings\\">\';return n(\'h1, h2, h3, h4, h5, h6, h7, h8, [role=\\"heading\\"]\').each(function(){var t=n(this);if(t.is(\\":visible\\")&&\\"true\\"!=t.attr(\\"aria-hidden\\")&&(0!==t.outerWidth()||0!==t.outerHeight())){var a=0,r=this.nodeName.match(/H(\\\\d)/);r&&(a=Number(r[1])),r=t.attr(\\"aria-level\\"),r&&(a=Number(r)),this.id||(b++,this.id=\\"screenreader--heading--\\"+b),e+=\'<li style=\\"padding-left: \'+(a-1)+\'em;\\"><a href=\\"#\'+this.id+\'\\"><strong>\'+a+\\"</strong> \\"+t.text()+\\"</a></li>\\"}}),e+=\\"</ol>\\"}function d(e,t){var a=t?\\"addClass\\":\\"removeClass\\",r=n(e);if(n(\\"html\\")[a](\\"screenreader--has-focus\\"),n(event.target)[a](\\"screenreader--has-focus\\"),event.target.id){var o=n(\'label[for=\\"\'+event.target.id+\'\\"]\')[a](\\"screenreader--has-focus\\");r=r.add(o)}return r}function p(e){if(e){var t=d(e,!0),a={left:Number.MAX_VALUE,top:Number.MAX_VALUE,bottom:Number.MIN_VALUE,right:Number.MIN_VALUE};t.each(function(){var n=this.getBoundingClientRect();a.left=Math.min(a.left,n.left),a.top=Math.min(a.top,n.top),a.right=Math.max(a.right,n.right),a.bottom=Math.max(a.bottom,n.bottom)}),n(\\"#screenreader--focus\\").css({left:a.left,top:a.top,width:a.right-a.left,height:a.bottom-a.top})}}function s(n){for(var e,t=document.elementsFromPoint(n.clientX,n.clientY),a=0;a<t.length&&(e=t[a],e.focus(),document.activeElement!=e);a++);}r();var c={style:function(){a(this)},label:function(){},input:function(){var e=this.id,t=document.querySelector(\'label[for=\\"\'+e+\'\\"]\');t?n([this,t]).addClass(\\"screenreader--success\\"):n(this).addClass(\\"screenreader--defect\\")},ariaLabel:function(){var e=n(this).attr(\\"aria-labelledby\\")||n(this).attr(\\"aria-describedby\\"),t=document.getElementById(e);t&&this.setAttribute(\\"aria-label\\",n(t).text())},table:function(){var e=n(this),t=!0;t=t&&\\"table\\"==e.css(\\"display\\"),t=t&&e.find(\\"th, tbody, caption\\").length>0,t||e.addClass(\\"screenreader--layouttable\\")},svg:i,img:i};n(\\"[style]\\").each(c.style),n(\\"table\\").filter(c.table),n(\'img, input[type=\\"image\\"]\').each(c.img),n(\\"[aria-describedby], [aria-labelledby]\\").each(c.ariaLabel),n(\\"label\\").each(c.label),n(\\"input,textarea,select\\").each(c.input),n(\\"svg\\").each(c.svg);var b=0,x=artoo.stylesheets[\\"view.css\\"];artoo.injectInlineStyle(x);for(var g=0;g<document.styleSheets.length;g++)document.styleSheets[g].processed=!0;n(\\"body\\").prepend(l()),n(\\"body\\").append(\'<div id=\\"screenreader--focus\\"></div>\'),document.addEventListener(\\"focus\\",function(n){p(n.target)},!0),document.addEventListener(\\"scroll\\",function(){p(document.activeElement)},!0),document.addEventListener(\\"blur\\",function(n){d(n.target,!1)},!0),document.body.addEventListener(\\"mousemove\\",s,!0),document.body.addEventListener(\\"touchstart\\",s,!0),console.log(\\"Bookmarklet is ready\\");var m=document,f=new MutationObserver(function(n){f.disconnect(),n.forEach(function(n){if(\\"style\\"===n.attributeName&&\\"screenreader--focus\\"!==n.target.id)c.style.call(n.target);else if(n.addedNodes)for(var e=0;e<n.addedNodes.length;e++){var t=n.addedNodes[e];\\"TABLE\\"==t.nodeName?c.table.call(t):\\"IMG\\"==t.nodeName?c.img.call(t):\\"INPUT\\"==t.nodeName||\\"TEXTAREA\\"==t.nodeName||\\"SELECT\\"==t.nodeName?c.input.call(t):\\"LABEL\\"==t.nodeName?c.label.call(t):\\"SVG\\"==t.nodeName?c.svg.call(t):(\\"STYLE\\"==t.nodeName||\\"LINK\\"==t.nodeName)&&r()}}),f.observe(m,u)}),u={attributes:!0,childList:!0,subtree:!0,characterData:!1,attributeFilter:[\\"style\\"]};f.observe(m,u)}.call(this,artoo.$);"'},t=!0;if("object"==typeof this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo already exists within this page. No need to inject him again."),artoo.loadSettings(e),artoo.exec(),t=!1)),t){var a=document.getElementsByTagName("body")[0];a||(a=document.createElement("body"),document.documentElement.appendChild(a));var r=document.createElement("script");console.log("artoo.js is loading..."),r.src="//medialab.github.io/artoo/public/dist/artoo-latest.min.js",r.type="text/javascript",r.id="artoo_injected_script",r.setAttribute("settings",JSON.stringify(e)),a.appendChild(r)}}).call(this);