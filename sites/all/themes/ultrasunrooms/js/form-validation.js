(function($) 
	{

		$(function(){

		
		$("#block-webform-client-block-10 .form-submit,#block-webform-client-block-11 .form-submit").click(function(event) {

		var email = $("#block-webform-client-block-10 .webform-component--email input,#block-webform-client-block-11 .webform-component--email input").val();
  
		var emailReg = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
		var valid = emailReg.test(email);

		if ( !valid ) 
		{	
		 event.preventDefault();
		 
		 var div="<div id=\"error\"><p>Please fill the fields correctly</p></div>";
		 $('#error').remove();
		 $("#block-webform-client-block-10,#block-webform-client-block-11").append(div);
		 return false;
		}
		else
		{	
			return true;
		} 
		});

	});

		
}(jQuery));