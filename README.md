# Welcome To Lightbox

View the Demo [here](benbayard.github.io/lightbox/index.html).

This is a Typescript and Javascript implementation of a lightbox. A grid view of images,
when clicked opens a lightbox with arrows. The arrows are built in CSS using borders.

I built the app using ES6 / ES7(typescript), CSS3 and HTML5. The HTML5 features are around
DOM manipulation and CSS classes. The CSS3 is mostly CSS variables,
view units and transform.

### Browser Support
This works in Chrome and Firefox. Working on iOS Safari and desktop Safari works
except for data fetching. Unfortunately, `window.fetch` is not supported until  
Safari `10.2.1`. 

### Features 
1. Support for google images, flickr, and giphy.
1. CSS using variables for added maintainability.
1. Easily add new providers by conforming to a documented API. 

### Factories
A set of function that enables an HTML element to be
  * Created
  * Destroyed
  * Updated
This would be close to a `Component`.

## Javascript
The Javascript version of this app uses webpack for bundling, 
but otherwise does not transform the code. Native ES6 (except for bundling)
is running in the browser.

## Typescript 
The Typescript version of this app is built using just the typescript compiler.
This app was started using the typescript version, but was later ported to ES6
where it was finished. 

### Why Namespaces?
A namespace in Typescript is very similar to `import * as` export in ES6.
However, importing it is done with a typescript special comment that references 
the path. This is the only way to use multiple files in the typescript compiler 
without a module bundler like `Webpack`.
  
### Getting Started
 
To get started first install all the dependencies with 

```
$ npm install
```

In order to run a simple server I use `python` and this can
be invoked using:

```
$ npm start
```

### Things I'd like to add
First I would like to improve the way vertical images render.

Then, I would also like to use some sort of declarative rendering with 
a state container to make the code more reliable.

Finally, I would like to have implemented `BrowserHistory`, but 
with the lack of declarative rendering implementing this along
with the server would have required handling dozens of edge cases. 
