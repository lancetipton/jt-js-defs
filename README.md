# jtree Javascript Definitions

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
        import jtreeDefs from 'jtree-definitions'


      // * Or require code
        const jtreeDefs = require('jtree-definitions')
      
      // * Add as html script
        <script src='/path/to/js-utils/build/jtree-definitions.js'></script>
        // jsutils will be available on the window 
        <script>
          const jtreeDefs = window.jtreeDefs
          
        </script>
    ```
