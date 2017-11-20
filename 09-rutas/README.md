# Favorites Add 

## Install angular-route

```
npm i -S angular-route
````

```
config.$inject = ['$routeProvider', '$locationProvider']

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { template: '<app></app>' })
    .when('/favorites', { template: '<favorites></favorites>' })

  $locationProvider.html5Mode(true)
}

export default config

```


````
var config = {headers:  {
        'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
        'Accept': 'application/json;odata=verbose',
        "X-Testing" : "testing"
    }
}…
````
