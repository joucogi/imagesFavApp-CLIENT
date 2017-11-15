# Create Angular App w/ Webpack

## 03. Angular APP w/ ES2015 modules

`npm i -S angular angulargrid`

**`index.js`**

```
import angular from 'angular'
import angularGrid from 'angulargrid'

import './css/styles.css'

import MainCtrl from './controllers/MainCtrl'

const MODULE_NAME = 'ImagesFavApp'

angular.module(MODULE_NAME, [angularGrid]).controller('MainCtrl', MainCtrl)

export default MODULE_NAME
```

