import Component from '@ember/component';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

const md = new MarkdownIt({
  highlight(code, lang) {
    if (hljs.getLanguage(lang)) {
    return hljs.highlight(lang, code).value
    }
    else {
      return code;
    }
  }

});

export default Component.extend({

  html: computed('source', function() {
    return htmlSafe(md.render(this.source));
  })

});