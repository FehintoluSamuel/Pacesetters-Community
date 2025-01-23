/*only execute this script when the document is ready*/ 
$(document).ready(function() {
	/*function called when you click of the button */
	$("buttonn").click(function() {
		/*this if else to change the test in the button*/
	if ($("buttonn").text()==":::") {
		$("buttonn").text(^);
	}else{
		$("buttonn").text(":::");
	}
	/*this function toggle the visibility of our "li" elements*/
	$("li").toggle("slow");
});
});
