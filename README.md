# Welcome To Lightbox

This is my attempt at a Typescript version of a lightbox. 

## Features:

1. Fully Documented using TypeDoc comments.
1. Fully linted code using TSLint.
1. Support for google images, flickr, and giphy.
1. Typesafe javascript.
1. CSS using variables for added maintainability.
1. Easily add new providers by conforming to a documented API. 

## Terminology:

* **Namespace:** A namespace in Typescript is very similar to a 
  default export in ES6. However, importing it is done with a 
  typescript special comment that references the path. This is
  the only way to use the typescript compiler without a module
  bundler like `Webpack`.
  
* **Factory:** A namespace that allows for an HTML element to be
  * Created
  * Destroyed
  * Updated
  
## Getting Started
 
To get started first install all the dependencies with 

```
$ npm install
```

In order to run a simple server I use `python` and this can
be invoked using:

```
$ npm start
```

## Things I'd like to add

I would like to add tests, but I felt it was not necessary with the 
type-safety.

I would also like to use some sort of declarative rendering with 
a state container to make the code more reliable.

Finally, I would like to have implemented `BrowserHistory`, but 
with the lack of declarative rendering implementing this along
with the server would have required handling dozens of edge cases. 
