import Controller from '@ember/controller';
import dedent from 'dedent';

export default Controller.extend({
  
  blogPost: dedent`
    # Example markdown

    This is an example

    We'll cover **three** steps:

      1. Step 1
      2. Step 2
      3. Step 3

    ## Install

    \`\`\`bash
    npm install -g ember-cli
    \`\`\`

    That's about it!
  `

});