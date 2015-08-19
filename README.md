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

### Integration DIVs

Please be sure of add the following divs tags at the bottom of your html boyd . Could it be below your footer tag

```html 
<div id="errores" style="display: none" title="jQuery Dialog" class="ui-state-active ui-corner-all"></div>
<div id="confirms" style="display: none" title="jQuery Dialog" class="ui-state-active ui-corner-all"></div>
<div id="mensajes" style="display: none" title="jQuery Dialog" class="ui-state-active ui-corner-all"> </div>
<div id="alerts" style="display: none" title="jQuery Dialog" class="ui-state-active ui-corner-all"></div>
<div id="prompts" style="display: none" title="jQuery Dialog" class="ui-state-active ui-corner-all">
	<div id="promptMessage">
	</div>
   <div id="promptInput">
    <label for="prompt">Prompt</label>
	<input type="text" name="prompt" id="txtPrompt" class="ui-widget-content ui-corner-all" />	
  </div>	
</div>
```
For including a Single Date Picker, you need to invoke the setUpDate function on the document ready event or onload event from body tag.

```html 
<script>
$(function(){
   setupJQuery();
   ...
   //1. First form
   setUpDate('singleDatePicker')
});
</script>
...
<!-- 2. Second form -->
<body onload="setUpDate("singleDatePicker")">
...
<label for="singleDate">Single Date</label>
<input type="text" readonly="true" name="singleDatePicker" id="singleDatePicker" />
</body>
```

For including a Date Picker Range, you need to invoke the setUpDateRange function on the document ready event or onload event from body tag.

```html 
<script>
$(function(){
   setupJQuery();
   ...
   //1. First form
   setUpDateRange('startDate','endDate');
});
</script>
<!-- 2. Second form -->
<body onload="setUpDateRange('startDate','endDate')">
...
<label for="startDate">Start Date</label>
	<input type="text" readonly="true" name="startDate"  id="startDate" /> <br />
<label for="endDate">End Date</label>
	<input type="text" readonly="true" name="endDate"  id="endDate" />
</body>
```

Readmes of the libraries used, can be found here:
* [jQuery](http://jquery.com/). Version 1.7.2 is used in the current library.
* [jQuery UI Dialog widget](https://jqueryui.com/dialog/). Version 1.7.3 is used in the current library.
* [jQuery UI Datepicker widget](http://jqueryui.com/datepicker/)

License
----

MIT

Please contact me by [mail](mailto:hi@jairaviles.mx) for either comments, doubts or any suggestions you might have.

**Originally, this was a development of Ricardo Rodriguez Perez that I forked and re-used for personal purposes**