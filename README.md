# jTree Javascript Definitions

Standard class definitions for JTree Types

## Install

  * Download the repo
    ```js
      // Clone repo
      git clone https://github.com/lancetipton/jtree-js-definitions.git
      // Or Add to package.json
      "dependencies": {
        "jTDefs": "git+https://github.com/lancetipton/jtree-js-definitions.git"
        ...
      },
    ```
  * Add to your code
    ```js
      // * Import into code
        import jTreeDefs from 'jTDefs'


      // * Or require code
        const jTreeDefs = require('jTreeDefs')
      
      // * Add as html script
        <script src='/path/to/js-utils/build/jTreeDefs.min.js'></script>
        // jsUtils will be available on the window 
        <script>
          const jTreeDefs = window.jTreeDefs
          
        </script>
    ```
