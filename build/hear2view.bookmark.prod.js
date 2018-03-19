javascript: (function(n){var e={reExec:!1,eval:'"(function(){artoo.stylesheets[\\"bookmark.css\\"]=\\"p {\\\\n  color: red;\\\\n  font-size: 14px;\\\\n}\\\\n\\"}).call(this),function(){artoo.stylesheets[\\"view.css\\"]=\'@charset \\"UTF-8\\";\\\\nbody {\\\\n  font: 100%/1.4 \\"Helvetica Neue\\", Helvetica, Arial;\\\\n  max-width: 90ex;\\\\n  padding: 20px;\\\\n  margin: 0 auto;\\\\n  background: #f8f8f8; }\\\\n\\\\nimg, svg, video {\\\\n  display: none !important; }\\\\n\\\\na {\\\\n  color: #108AEF;\\\\n  text-decoration: underline; }\\\\n\\\\ninput, textarea, button, select {\\\\n  font: inherit;\\\\n  background: white; }\\\\n\\\\n.screenreader--image {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  display: inline-block;\\\\n  min-width: 6em;\\\\n  border: 1px dashed; }\\\\n  .screenreader--image:before {\\\\n    display: inline !important;\\\\n    content: \\"Image\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n.screenreader--invisible,\\\\n[aria-hidden=\\"true\\"]:not(#screenreader--focus) {\\\\n  opacity: 0;\\\\n  width: 0;\\\\n  height: 0;\\\\n  margin: 0;\\\\n  padding: 0; }\\\\n\\\\n.screenreader--defect {\\\\n  opacity: 0.5;\\\\n  box-shadow: inset 0 0 5px white, 0 0 20px rgba(255, 0, 0, 0.5); }\\\\n\\\\n.screenreader--success {\\\\n  box-shadow: inset 0 0 5px rgba(0, 128, 0, 0.25), 0 0 20px rgba(0, 128, 0, 0.25); }\\\\n\\\\n.screenreader--has-focus:not(html) {\\\\n  opacity: 1;\\\\n  outline: none;\\\\n  position: relative;\\\\n  z-index: 1; }\\\\n\\\\n#screenreader--cover {\\\\n  display: block;\\\\n  position: fixed;\\\\n  z-index: 9998;\\\\n  top: 0;\\\\n  bottom: 0;\\\\n  left: 0;\\\\n  right: 0; }\\\\n\\\\n#screenreader--focus {\\\\n  pointer-events: none;\\\\n  display: block;\\\\n  position: fixed;\\\\n  z-index: 9999;\\\\n  -webkit-transition: all 150ms;\\\\n  transition: all 150ms; }\\\\n  #screenreader--focus:before {\\\\n    position: absolute;\\\\n    content: \\\\\'\\\\\';\\\\n    top: -10px;\\\\n    bottom: -10px;\\\\n    left: -10px;\\\\n    right: -10px;\\\\n    z-index: 1;\\\\n    border: 1px solid rgba(0, 0, 0, 0.5);\\\\n    box-shadow: inset 0 0 10px white, 0 0 40px rgba(0, 0, 0, 0.2); }\\\\n\\\\nhtml:not(.screenreader--has-focus) #screenreader--focus {\\\\n  opacity: 0; }\\\\n\\\\nul > li,\\\\nol > li,\\\\n[role=\\"list\\"] > [role=\\"listitem\\"] {\\\\n  margin-left: 1em;\\\\n  display: block !important;\\\\n  position: relative; }\\\\n\\\\nul > li:before,\\\\nol > li:before,\\\\n[role=\\"list\\"] > [role=\\"listitem\\"]:before {\\\\n  content: \\\\\'•\\\\\' !important;\\\\n  position: absolute;\\\\n  left: -1em;\\\\n  top: 0; }\\\\n\\\\ndl dt {\\\\n  font-weight: bold;\\\\n  display: block !important;\\\\n  margin-top: 1ex; }\\\\n\\\\ndl dd {\\\\n  display: block !important;\\\\n  margin-left: 2em; }\\\\n\\\\n[role=\\"tablist\\"] {\\\\n  border: 1px solid; }\\\\n  [role=\\"tablist\\"] [role=\\"tab\\"] {\\\\n    float: left;\\\\n    display: block;\\\\n    border-right: 1px solid;\\\\n    padding: 4px 10px;\\\\n    border-bottom: 1px solid;\\\\n    margin-bottom: -1px; }\\\\n\\\\n[role=\\"tablist\\"] {\\\\n  border: 1px solid;\\\\n  padding: 0;\\\\n  display: inline-block !important;\\\\n  border-width: 1px 0 0 1px; }\\\\n  [role=\\"tablist\\"] [role=\\"tab\\"] {\\\\n    float: left;\\\\n    border-right: 1px solid;\\\\n    padding: 4px 10px;\\\\n    border-bottom: 1px solid;\\\\n    margin-bottom: -1px; }\\\\n\\\\n[role=\\"tablist\\"]:after {\\\\n  display: table;\\\\n  content: \\\\\'\\\\\';\\\\n  clear: both; }\\\\n\\\\n[aria-selected=\\"true\\"] {\\\\n  border: 3px solid green; }\\\\n\\\\n[role=\\"checkbox\\"]:before {\\\\n  content: \\\\\'☐\\\\\'; }\\\\n\\\\n[role=\\"checkbox\\"][aria-checked=\\"true\\"]:before {\\\\n  content: \\\\\'☒\\\\\'; }\\\\n\\\\n[role=\\"radio\\"]:before {\\\\n  content: \\\\\'⚪️\\\\\'; }\\\\n\\\\n[role=\\"radio\\"][aria-checked=\\"true\\"]:before {\\\\n  content: \\\\\'⚫️\\\\\'; }\\\\n\\\\n[aria-expanded]:before {\\\\n  content: \\\\\'➡️\\\\\'; }\\\\n\\\\n[aria-expanded=\\"true\\"]:before {\\\\n  content: \\\\\'⬇️\\\\\'; }\\\\n\\\\n[aria-expanded]:after {\\\\n  display: inline !important;\\\\n  content: \\"closed\\" !important;\\\\n  font-size: 14px;\\\\n  font-weight: 200;\\\\n  text-transform: normal;\\\\n  background: rgba(240, 240, 240, 0.5) !important;\\\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n  color: black !important;\\\\n  padding: 2px 6px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex; }\\\\n\\\\n[aria-expanded=\\"true\\"]:after {\\\\n  display: inline !important;\\\\n  content: \\"expanded\\" !important;\\\\n  font-size: 14px;\\\\n  font-weight: 200;\\\\n  text-transform: normal;\\\\n  background: rgba(240, 240, 240, 0.5) !important;\\\\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n  color: black !important;\\\\n  padding: 2px 6px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex; }\\\\n\\\\nh1,\\\\n[role=\\"heading\\"][aria-level=\\"1\\"] {\\\\n  font-size: 60px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h1,\\\\n    [role=\\"heading\\"][aria-level=\\"1\\"] {\\\\n      font-size: 30px; } }\\\\n  h1:after,\\\\n  [role=\\"heading\\"][aria-level=\\"1\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"1\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nh2,\\\\n[role=\\"heading\\"][aria-level=\\"2\\"] {\\\\n  font-size: 35px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h2,\\\\n    [role=\\"heading\\"][aria-level=\\"2\\"] {\\\\n      font-size: 22px; } }\\\\n  h2:after,\\\\n  [role=\\"heading\\"][aria-level=\\"2\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"2\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nh3,\\\\n[role=\\"heading\\"][aria-level=\\"3\\"] {\\\\n  font-size: 22px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h3,\\\\n    [role=\\"heading\\"][aria-level=\\"3\\"] {\\\\n      font-size: 18px; } }\\\\n  h3:after,\\\\n  [role=\\"heading\\"][aria-level=\\"3\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"3\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nh4,\\\\n[role=\\"heading\\"][aria-level=\\"4\\"] {\\\\n  font-size: 18px;\\\\n  margin-bottom: .5ex;\\\\n  line-height: 1.1; }\\\\n  @media (max-width: 600px) {\\\\n    h4,\\\\n    [role=\\"heading\\"][aria-level=\\"4\\"] {\\\\n      font-size: 16px; } }\\\\n  h4:after,\\\\n  [role=\\"heading\\"][aria-level=\\"4\\"]:after {\\\\n    display: inline !important;\\\\n    content: \\"4\\" !important;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5) !important;\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black !important;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-left: 0.5ex; }\\\\n\\\\nbutton, [role=\\"button\\"], input[type=\\"button\\"], input[type=\\"submit\\"] {\\\\n  -webkit-appearance: none;\\\\n     -moz-appearance: none;\\\\n          appearance: none;\\\\n  border: 1px solid black;\\\\n  border-radius: 4px;\\\\n  padding: 3px 6px;\\\\n  font-family: inherit;\\\\n  background: #032d7b;\\\\n  color: white;\\\\n  display: inline-block;\\\\n  text-decoration: none;\\\\n  cursor: pointer; }\\\\n\\\\n[aria-selected=\\"true\\"],\\\\n[aria-expanded=\\"true\\"] {\\\\n  box-shadow: 0 0 0 1px white, 0 0 20px 3px #8DD906; }\\\\n\\\\n[data-screenreader-describedby]:after {\\\\n  content: attr(data-screenreader-describedby);\\\\n  display: inline !important;\\\\n  font-size: 80%;\\\\n  font-weight: 200;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  border: 1px solid;\\\\n  padding: 2px 3px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex;\\\\n  text-decoration: none;\\\\n  opacity: 0.5; }\\\\n\\\\n[title]:after {\\\\n  content: attr(title);\\\\n  display: inline !important;\\\\n  font-size: 80%;\\\\n  font-weight: 200;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  border: 1px solid;\\\\n  padding: 2px 3px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex;\\\\n  text-decoration: none; }\\\\n\\\\n[aria-label]:after {\\\\n  content: attr(aria-label);\\\\n  display: inline !important;\\\\n  font-size: 80%;\\\\n  font-weight: 200;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  border: 1px solid;\\\\n  padding: 2px 3px;\\\\n  border-radius: 2px;\\\\n  vertical-align: middle;\\\\n  margin-left: 0.5ex;\\\\n  text-decoration: none; }\\\\n\\\\nb {\\\\n  font-weight: inherit;\\\\n  font-style: inherit; }\\\\n\\\\nnav, [role=\\"navigation\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(194, 229, 236, 0.5);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  border: 1px solid rgba(113, 183, 197, 0.5); }\\\\n  nav:before, [role=\\"navigation\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Navigation\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n  @media (min-width: 1400px) {\\\\n    nav, [role=\\"navigation\\"] {\\\\n      float: left;\\\\n      margin-left: -350px;\\\\n      width: 300px;\\\\n      box-sizing: border-box;\\\\n      clear: left; } }\\\\n  nav [id^=\\"screenreader--heading\\"], [role=\\"navigation\\"] [id^=\\"screenreader--heading\\"] {\\\\n    margin-top: 0; }\\\\n\\\\naside, [role=\\"complementary\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  aside:before, [role=\\"complementary\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Complementary\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\narticle, [role=\\"article\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(255, 255, 255, 0.5);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\\\n  padding: 40px 20px 20px; }\\\\n  article:before, [role=\\"article\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Article\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\ndialog, [role=\\"dialog\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  dialog:before, [role=\\"dialog\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Dialog\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n[role=\\"banner\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  [role=\\"banner\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Banner (Page Header)\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n[role=\\"contentinfo\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.1);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  [role=\\"contentinfo\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Content Info (Page Footer)\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\n[role=\\"search\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: rgba(0, 0, 0, 0.2);\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px; }\\\\n  [role=\\"search\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Search\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\nmain, [role=\\"main\\"] {\\\\n  display: block;\\\\n  position: relative;\\\\n  background: white;\\\\n  padding: 30px 10px 10px;\\\\n  margin-top: 20px;\\\\n  margin-bottom: 20px;\\\\n  border-radius: 2px;\\\\n  border: 1px solid rgba(0, 0, 0, 0.6);\\\\n  padding: 50px 30px 30px; }\\\\n  main:before, [role=\\"main\\"]:before {\\\\n    display: inline !important;\\\\n    content: \\"Main\\" !important;\\\\n    font-size: 10px;\\\\n    font-weight: normal;\\\\n    background: rgba(0, 0, 0, 0.4);\\\\n    color: white;\\\\n    padding: 3px 6px;\\\\n    border-radius: 2px;\\\\n    position: absolute;\\\\n    top: 0;\\\\n    left: 0;\\\\n    text-transform: uppercase;\\\\n    letter-spacing: 1px; }\\\\n\\\\ntable:not(.screenreader--layouttable) {\\\\n  border-collapse: collapse; }\\\\n  table:not(.screenreader--layouttable) caption {\\\\n    background-color: #999;\\\\n    font-weight: bold;\\\\n    border: 1px solid;\\\\n    padding: 5px; }\\\\n  table:not(.screenreader--layouttable) td, table:not(.screenreader--layouttable) th {\\\\n    border: 1px solid #999;\\\\n    padding: 5px 8px;\\\\n    text-align: left; }\\\\n  table:not(.screenreader--layouttable) th {\\\\n    font-weight: bold;\\\\n    color: white;\\\\n    background: black; }\\\\n\\\\ntable.screenreader--layouttable, table.screenreader--layouttable tbody, table.screenreader--layouttable tfoot, table.screenreader--layouttable thead, table.screenreader--layouttable tr {\\\\n  display: block; }\\\\n\\\\ntable.screenreader--layouttable td, table.screenreader--layouttable th {\\\\n  display: inline; }\\\\n\\\\n.screenreader--header {\\\\n  background: white;\\\\n  padding: 20px;\\\\n  border: 10px solid rgba(0, 0, 0, 0.1);\\\\n  margin: 0 0 20px; }\\\\n  .screenreader--header h1 {\\\\n    font-size: 200%; }\\\\n\\\\n#screenreader--headings {\\\\n  list-style: none; }\\\\n  #screenreader--headings li {\\\\n    list-style: none;\\\\n    margin: 0;\\\\n    padding: 0;\\\\n    font-size: 27px;\\\\n    line-height: 22px; }\\\\n    #screenreader--headings li:before {\\\\n      content: none !important; }\\\\n  #screenreader--headings a {\\\\n    text-decoration: none;\\\\n    font-size: 16px; }\\\\n  #screenreader--headings strong {\\\\n    display: inline;\\\\n    font-size: 14px;\\\\n    font-weight: 200;\\\\n    text-transform: normal;\\\\n    background: rgba(240, 240, 240, 0.5);\\\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\\\\n    color: black;\\\\n    padding: 2px 6px;\\\\n    border-radius: 2px;\\\\n    vertical-align: middle;\\\\n    margin-right: 0.5ex; }\\\\n\\\\n#screenreader--links {\\\\n  list-style: none; }\\\\n  #screenreader--links li {\\\\n    list-style: none;\\\\n    margin: 5px;\\\\n    display: inline-block !important;\\\\n    border: 1px solid #777;\\\\n    padding: 1px 1ex;\\\\n    background: white;\\\\n    border-radius: 4px; }\\\\n    #screenreader--links li:before {\\\\n      content: none !important; }\\\\n\\\\n[role=\\"presentation\\"] {\\\\n  display: inline !important;\\\\n  margin: 0;\\\\n  padding: 0;\\\\n  background: transparent;\\\\n  font: inherit; }\\\\n\'}.call(this),function(){artoo.templates[\\"bookmark.tpl\\"]=\\"\\"}.call(this),function(n){function e(n){return n.nodeName.toUpperCase()}function t(n){var e;try{e=n.rules||n.cssRules}catch(a){return console.warn(\\"Stylesheet cannot be processed, has no rules\\"),void 0}if(e)for(var i=0;e&&i<e.length;i++)e[i].type===e[i].STYLE_RULE?r(e[i]):e[i].styleSheet?t(e[i].styleSheet):e[i].cssRules&&t(e[i]);else console.log(\\"Stylesheet can\'t be processed due to security restrictions. Trying to work around it.\\",n.href),n.disabled=!0}function r(n){var e=n.style.visibility,t=n.style.display,r=n.style.content;n.style.cssText=\\"\\",\'\\"\\"\'!==r&&\\"\'\'\\"!=r&&(n.style.display=\\"inline-block\\"==t?\\"inline\\":t.indexOf(\\"flex\\")>=0?\\"block\\":t,n.style.content=r,e&&(n.style.visibility=\\"hidden\\"==e?\\"hidden\\":\\"visible\\"))}function a(){for(var n=0;n<document.styleSheets.length;n++){var e=document.styleSheets[n];e.processed||(e.processed=!0,t(e))}}function i(n,e){for(var t=0;t<n.attributes.length;t++)e.setAttribute(n.attributes[t].name,n.attributes[t].value)}function o(){var t=n(this).attr(\\"alt\\");if(\\"\\"!==t||\\"IMG\\"!=e(this)){t=t||l(this);var r=n(\\"<span></span>\\");if(i(this,r.get(0)),!t){if(\\"SVG\\"===e(this))return;t=\\"???\\",r.addClass(\\"screenreader--defect\\")}r.text(t),r.addClass(\\"screenreader--image\\"),n(this).after(r)}}function l(e){var t,r=n(e),a=r.attr(\\"aria-labelledby\\");return a&&(a=a.replace(/(\\\\S+)/g,\\"#$1\\").replace(/\\\\s+/,\\",\\"),t=n(a).text()),t=t||r.attr(\\"aria-label\\")||r.text(),a=r.attr(\\"title\\"),t=n.trim(t),a&&(t?t+=\\", \\"+a:t=a),t}function d(){var e=\'<div class=\\"screenreader--header\\">\';e+=\'<h1>Headings</h1><ol id=\\"screenreader--headings\\">\',n(\'h1, h2, h3, h4, h5, h6, h7, h8, [role=\\"heading\\"]\').each(function(){var t=n(this);if(t.is(\\":visible\\")&&\\"true\\"!=t.attr(\\"aria-hidden\\")&&(0!==t.outerWidth()||0!==t.outerHeight())){var r=0,a=this.nodeName.match(/H(\\\\d)/);a&&(r=Number(a[1])),a=t.attr(\\"aria-level\\"),a&&(r=Number(a)),this.id||(x++,this.id=\\"screenreader--heading--\\"+x),e+=\'<li style=\\"padding-left: \'+(r-1)+\'em;\\"><a href=\\"#\'+this.id+\'\\"><strong>\'+r+\\"</strong> \\"+t.text()+\\"</a></li>\\"}}),e+=\\"</ol>\\",e+=\'<h1>Links &amp; Buttons</h1><ol id=\\"screenreader--links\\">\';var t=n(\'a[href], [role=\\"button\\"][tabindex], button\');return t.each(function(){e+=\\"<li>\\"+l(this)+\\"</li>\\"}),e+=\\"</ul>\\",e+=\\"</div>\\"}function p(e,t){var r=t?\\"addClass\\":\\"removeClass\\",a=n(e);if(n(\\"html\\")[r](\\"screenreader--has-focus\\"),n(event.target)[r](\\"screenreader--has-focus\\"),event.target.id){var i=n(\'label[for=\\"\'+event.target.id+\'\\"]\')[r](\\"screenreader--has-focus\\");a=a.add(i)}return a}function s(e){if(e){var t=p(e,!0),r={left:Number.MAX_VALUE,top:Number.MAX_VALUE,bottom:Number.MIN_VALUE,right:Number.MIN_VALUE};t.each(function(){var n=this.getBoundingClientRect();r.left=Math.min(r.left,n.left),r.top=Math.min(r.top,n.top),r.right=Math.max(r.right,n.right),r.bottom=Math.max(r.bottom,n.bottom)}),n(\\"#screenreader--focus\\").css({left:r.left,top:r.top,width:r.right-r.left,height:r.bottom-r.top})}}function c(n){for(var e,t=document.elementsFromPoint(n.clientX,n.clientY),r=0;r<t.length&&(e=t[r],e.focus(),document.activeElement!=e);r++);}a();var b={style:function(){r(this)},label:function(){},input:function(){var e=this.id,t=document.querySelector(\'label[for=\\"\'+e+\'\\"]\');t?n([this,t]).addClass(\\"screenreader--success\\"):n(this).addClass(\\"screenreader--defect\\")},ariaLabel:function(){var e=n(this).attr(\\"aria-labelledby\\");e=e.replace(/(\\\\S+)/g,\\"#$1\\").replace(/\\\\s+/,\\",\\");var t=n(e);t&&this.setAttribute(\\"aria-label\\",t.text())},ariaDescribed:function(){var e=n(this).attr(\\"aria-describedby\\");e=e.replace(/(\\\\S+)/g,\\"#$1\\").replace(/\\\\s+/,\\",\\");var t=n(e);t&&this.setAttribute(\\"data-screenreader-describedby\\",t.text())},table:function(){var e=n(this),t=!0;t=t&&\\"table\\"==e.css(\\"display\\"),t=t&&e.find(\\"th, tbody, caption\\").length>0,t||e.addClass(\\"screenreader--layouttable\\")},svg:o,img:o};n(\\"[style]\\").each(b.style),n(\\"table\\").filter(b.table),n(\'img, input[type=\\"image\\"]\').each(b.img),n(\\"[aria-labelledby]\\").each(b.ariaLabel),n(\\"[aria-describedby]\\").each(b.ariaDescribed),n(\\"label\\").each(b.label),n(\\"input,textarea,select\\").each(b.input),n(\\"svg\\").each(b.svg);var x=0,g=artoo.stylesheets[\\"view.css\\"];artoo.injectInlineStyle(g);for(var m=0;m<document.styleSheets.length;m++)document.styleSheets[m].processed=!0;n(\\"body\\").prepend(d()),n(\\"body\\").append(\'<div id=\\"screenreader--focus\\"></div>\'),document.addEventListener(\\"focus\\",function(n){s(n.target)},!0),document.addEventListener(\\"scroll\\",function(){s(document.activeElement)},!0),document.addEventListener(\\"blur\\",function(n){p(n.target,!1)},!0),document.body.addEventListener(\\"mousemove\\",c,!0),document.body.addEventListener(\\"touchstart\\",c,!0),console.log(\\"Bookmarklet is ready\\");var h=document,f=new MutationObserver(function(n){f.disconnect(),n.forEach(function(n){if(\\"style\\"===n.attributeName&&\\"screenreader--focus\\"!==n.target.id)b.style.call(n.target);else if(n.addedNodes)for(var e=0;e<n.addedNodes.length;e++){var t=n.addedNodes[e];\\"TABLE\\"==t.nodeName?b.table.call(t):\\"IMG\\"==t.nodeName?b.img.call(t):\\"INPUT\\"==t.nodeName||\\"TEXTAREA\\"==t.nodeName||\\"SELECT\\"==t.nodeName?b.input.call(t):\\"LABEL\\"==t.nodeName?b.label.call(t):\\"SVG\\"==t.nodeName?b.svg.call(t):(\\"STYLE\\"==t.nodeName||\\"LINK\\"==t.nodeName)&&a()}}),f.observe(h,u)}),u={attributes:!0,childList:!0,subtree:!0,characterData:!1,attributeFilter:[\\"style\\"]};f.observe(h,u)}.call(this,artoo.$);"'},t=!0;if("object"==typeof this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo already exists within this page. No need to inject him again."),artoo.loadSettings(e),artoo.exec(),t=!1)),t){var r=document.getElementsByTagName("body")[0];r||(r=document.createElement("body"),document.documentElement.appendChild(r));var a=document.createElement("script");console.log("artoo.js is loading..."),a.src="//medialab.github.io/artoo/public/dist/artoo-latest.min.js",a.type="text/javascript",a.id="artoo_injected_script",a.setAttribute("settings",JSON.stringify(e)),r.appendChild(a)}}).call(this);