# jQuery Function 

In the words of Bill Gates:

> Software innovation, like almost every other kind of innovation, requires the ability to collaborate and share ideas with other people, and to sit down and talk with customers and get their feedback and understand their needs.

The aim of this library is to integrate all the jQuery UI widgets integration within a simple,
scalable an well-coded document that allow us to save time and save time for the front end.

### Version
0.0.1

### Installation

Make sure to add the reference to this library in your HTML5 document or dynamic page as following. 

**Note**. I assume you include the original css, js and images files but feel free to change it if you want.

```html
<link rel="stylesheet" type="text/css" href="style.css">

<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/jquery-ui-1.7.3.custom.min.js"></script>
<script src="js/jQueryFunctions.js"></script>
```

1. First form. Invoke on the onLoad Event of the body tag as following:

```html
<head>
...
<meta>
...
	<body onLoad='setupJQuery()'> ... </body>
```

2. Second form. Invoke on the document ready event as following:

```html
<head>
...
<meta>
...
<script>
$(function(){
   setupJQuery();
   ...
});
<script>
```

Readmes of the libraries used, can be found here:
* [jQuery](http://jquery.com/). Version 1.7.2 is used in the current library.
* [jQuery UI Dialog widget](https://jqueryui.com/dialog/). Version 1.7.3 is used in the current library.

License
----

MIT

Please contact me by [mail](mailto:hi@jairaviles.mx) for either comments, doubts or any suggestions you might have.

**Originally, this was a development of Ricardo Rodriguez Perez that I forked and re-used for personal purposes**