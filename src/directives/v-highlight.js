import Vue from 'vue'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'//样式见: https://highlightjs.org/static/demo/

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});
