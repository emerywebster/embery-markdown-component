import Component from '@ember/component';
import MarkdownIt from 'markdown-it';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

const md = new MarkdownIt();

export default Component.extend({

  source: 'Hello, *markdown*!',

  html: computed('source', function() {
    return htmlSafe(md.render(this.source));
  })

});