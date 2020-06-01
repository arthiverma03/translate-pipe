
<html>
 <head>

 	<style type="text/css">
 		*{
 			margin: 0px;
 			padding: 0px; 
 			font-family: arial;
 		}	

 		.container{
 			width: 1200px;
 			margin: 0 auto;
 			padding: 10px 0px;
 		}

		.box {
			display: inline-block;
			cursor: pointer;
			position: relative;
			padding-left: 25px;
			padding-right: 15px;
			margin-bottom: 12px;
			cursor: pointer;
			font-size: 16px;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			line-height: 20px;
		}
		
		.box input {
			position: absolute;
			opacity: 100%;
			cursor: pointer;
			top: 5px;
			left: 5px;
			height: 10px;
			width: 10px;
		}

		.checkmarks {
			position: absolute;
			top: 0;
			left: 0;
			height: 20px;
			width: 20px;
			background-color: #eee;
			border-radius: 50%;
		}

		.box:hover input ~ .checkmarks {
			background-color: #ccc;
		}

		.box input:checked ~ .checkmarks {
			background-color: #2196F3;
		}

		
		.checkmarks:after {
			content: "";
			position: absolute;
			display: none;
		}
	
		
		.box input:checked ~ .checkmarks:after {
			display: block;
		}

		
	
		input[type="checkbox"]:focus + span {
	  			border:2px solid gray;
		}

		.box .checkmarks:after {
			left: 6px;
			top: 2px;
			width: 5px;
			height: 10px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}	

		input:hover, input:focus, span:focus {
			 background-color: #FEFF7F;
			 border: 1px solid #FF0000;
			 color:#000000;
		}
 	</style>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   
   <script type="text/javascript">
   
   $(document).ready(function() {

       $("input:checkbox").on('click', function() {
     var $box = $(this);
     if ($box.is(":checked")) {
       var group = "input:checkbox[name='" + $box.attr("name") + "']";
       $(group).prop("checked", false);
       $box.prop("checked", true);
     } else {
       $box.prop("checked", false);
     }
   });
   })
   </script>
 </head>
 <body>

<div class="container">
	<form>
		 <h3>Gender</h3>
		 <label class="box">
		   <input class="checkmark" type="checkbox" class="radio" value="1" name="gender[1][]" />male
		   <span class="checkmarks"></span>
		 </label>
		 <label class="box">
		   <input class="checkmark" type="checkbox" class="radio" value="1" name="gender[1][]" />female
		   <span class="checkmarks"></span>
		 </label>
		 <label class="box">
		   <input class="checkmark" type="checkbox" class="radio" value="1" name="gender[1][]" />not specified
		   <span class="checkmarks"></span>
		 </label>
	</form>
	<form>
		 <h3>Gender</h3>
		 <label class="box">
		   <input class="checkmark" type="checkbox" class="radio" value="1" name="gender[2][]" />male
		   <span class="checkmarks"></span>
		 </label>
		 <label class="box">
		   <input class="checkmark" type="checkbox" class="radio" value="1" name="gender[2][]" />female
		   <span class="checkmarks"></span>
		 </label>
		 <label class="box">
		   <input class="checkmark" type="checkbox" class="radio" value="1" name="gender[2][]" />specified
		   <span class="checkmarks"></span>
		 </label>
	</form>
</div>

 </body>

</html>
