/*
The aim of this library is to integrate all the jQuery UI widgets integration within a simple,
scalable an well-coded document that allow us to save time and save time for the front end.

This general function should be invoked at the loading of any page. Make sure to
add the reference to this library in your HTML document or dynamic page.

1. First form. Invoke on the onLoad Event of the body tag as following:
<head>
...
<meta>
...
	<body onLoad='setupJQuery()'> ... </body>

2. Second form. Invoke on the document ready event as following:

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

As for the css styles, they are integrated in the jquery-ui-1.7.3.custom.css file. 
Feel free to modify based on your own styles.

Author:  Jair Avilés
Twitter: @javiles87
Mail:    hi@jairaviles.mx

 */
function setupJQuery() {
	//Override from prototype for fixing IE6 issue
	$.ui.dialog.defaults.bgiframe = true;
	$.ui.dialog2.defaults.bgiframe = true;

	//Dialog for error messages
	$("#errores").dialog( {
		autoOpen : false,
		modal : true,
		show : 'slide',
		hide : 'slide',
		resizable : false,
		dialogClass: 'ui-state-error'/*,
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui).show(); }*/
	});

	//Dialog for loading modal
	$("#loading").dialog( {
		autoOpen : false,
		modal : true,
		resizable : false,
		closeOnEscape: false,
		open: function(event, ui) { //Hide widget close button
		  $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
		}
	});
	
	//Dialog for Confirms Modal
	$("#confirms").dialog( {
		autoOpen : false,
		modal : true,
		show : 'clip',
		hide : 'clip',
		resizable : false
	});

	//Dialog for Prompt Modal
	$("#prompts").dialog( {
		autoOpen : false,
		modal : true,
		show : 'clip',
		hide : 'clip',
		resizable : false
	});

	//Dialog for Alert Modal
	$("#alerts").dialog( {
		autoOpen : false,
		modal : true,
		show : 'clip',
		hide : 'clip',
		resizable : false
	});

	//Dialog for Info Modal
	$("#mensajes").dialog( {
		autoOpen:false,
		modal:true,
		show:'clip',
		hide:'clip',
		closeOnEscape: false,
		resizable:false,	
		position:'center',
		height: 'auto',
		width : 'auto',
		open: function(event, ui) {
			  $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
			}
	});
}

/*
  This function shows models for Warning message (alerts)
 
  @param mensaje - Any HTML format message
 */
function jAlert(mensaje) {
	var contenedor = "alerts";
	var msg = '<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>' + mensaje + '</p>';
	$("#" + contenedor).html(msg);
	showMsg(contenedor, 300);
}

/*
  This function invokes the Modal for showing error messages
 
  @param mensaje - Any HTML format message
 */
function jError(mensaje) {
	var contenedor = "errores";
	$("#" + contenedor).addClass("ui-state-error");
	var msg = '<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>' + mensaje + '</p>';
	$("#" + contenedor).html(msg);
	showMsg(contenedor, 300);
}

/*
  Funcion que se encarga de presentar un dialogo de tipo confirm con opciones de aceptar y cancelar
  
  @param mensaje - Any HTML format message
  @param okFunction - Function name that will be invoked when OK(Aceptar) button is clicked
  @param cancelFunction - Function name that will be invoked when Cancelar(Cancel) button is clicked
 
 */
function jConfirm(mensaje, okFunction, cancelFunction) {
	var contenedor = "confirms";
	var msg = '<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>' + mensaje + '</p>';
	$("#confirms").html(mensaje);
	$("#" + contenedor).dialog('option', 'buttons', {
		"Cancelar" : function() {
			$(this).dialog("close");
			cancelFunction();
		},
		"Aceptar" : function() {
			$(this).dialog("close");
			okFunction();
		}
	});
	showMsg(contenedor, 600);
}

/*
  This Function show a modal asking for a text input (prompt)
  
  @param mensaje - Any HTML format message
  @param textFunction - Function name that will handle the text introduced from the prompt
 
 */
function jPrompt(mensaje, textFunction) {
	var contenedor = "prompts";
	var msg = '<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>' + mensaje + '</p>';
	$("#" + contenedor).html(msg);
	$("#" + contenedor).dialog('option', 'buttons', {
		"Cancelar" : function() {
			$(this).dialog("close");
		},
		"Aceptar" : function() {
			$(this).dialog("close");
			textFunction();
		}
	});
	showMsg(contenedor, 600);
}

/*
  This function show a Modal with general Info message
  
  @param mensaje - Any HTML format message

 */
function jDialogo(mensaje) {
	var contenedor = "mensajes";
	var msg = mensaje;
	$("#" + contenedor).html(msg);
	$("#" + contenedor).dialog('option', 'buttons', {		
		"Aceptar" : function() {
			$(this).dialog("close");
			textFunction();
		}
	});
	showMsg(contenedor, 700);
}

//This function assign the jQueryUi styel to a button filed object
function jButton(objDestino) {
	$('#' + objDestino).hover( function() {
		$(this).addClass("ui-state-hover");
	}, function() {
		$(this).removeClass("ui-state-hover");
	}).mousedown( function() {
		$(this).addClass("ui-state-active");
	}).mouseup( function() {
		$(this).removeClass("ui-state-active");
	});
	return $("#" + objDestino);
}

// Generic function for showing message in any Modal 
function showMsg(contenedor, tamanio) {
	$("#" + contenedor).addClass("letraMensajes");
	
	if(tamanio!==0){
		$("#" + contenedor).dialog('option', 'width', tamanio);
	}
	noScrollIE();

	$("#" + contenedor).dialog('open');
	$("#" + contenedor).dialog('moveToTop');
	$("#" + contenedor).bind('dialogclose', function(event, ui) {scrollIE();});
}

/*
  This function show a Modal with general Info message
 
   @param fechaIni - Start date 
   @param fechafin - Final date 
 
 */
function setUpDateRange(fechaIni, fechaFin) {
	$("#" + fechaIni).datepicker(
			{
				duration : 'fast',
				showAnim : 'drop',
				dateFormat : "dd/mm/yy", //Format used in Mexico
				maxDate : '0',
				showOn : 'button',
				buttonImage : 'img/calendar.gif',
				buttonImageOnly : true,
				onSelect : function(dateText, inst) {
					$('#' + fechaFin).datepicker('option', 'minDate',
							$("#" + fechaIni).datepicker('getDate'));
				}

			});
	$("#" + fechaFin).datepicker(
			{
				duration : 'fast',
				showAnim : 'drop',
				dateFormat : "dd/mm/yy", //Format used in Mexico
				maxDate : '0',
				showOn : 'button',
				buttonImage : 'img/calendar.gif',
				buttonImageOnly : true,
				onSelect : function(dateText, inst) {
					$('#' + fechaIni).datepicker('option', 'maxDate',
							$("#" + fechaFin).datepicker('getDate'));
				}
			});
}
// Function for setting up a generic DatePicker textfield according to its id object as parameter
function setUpFecha(objDestino){
	$("#" + objDestino).datepicker(
		{
           	duration:'fast',
          	showAnim:'drop',
           	dateFormat:"dd/mm/yy",
           	showOn: 'button',
           	buttonImage: 'img/calendar.gif',
           	buttonImageOnly: true
		});
}
// Clean HTML DIV
function cleanDiv(campo){
	$("#" + campo).html('');
}

//Show Dialog from its id object passed as parameter
function showDialog(objDestino)
{
	$("#" + objDestino).dialog("open");	
	return false;
}