# transate-pipe
(No subject)

GA
 
Gowrishankar, Arthi
Sat 12/21/2019 2:26 PM
Inbox; Sent Items
To:
Gowrishankar, Arthi;
<!DOCTYPE html>

<html>

<body>

 

<h1>My First JavaScript</h1>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">

</script>

<input type="tel" id="valueOfSolarPanelSystem" name="valueOfSolarPanelSystem" pattern="\d*" maxlength="8" value="" class="form-control inputTypeTel validate[requiredbr]"/>

 

<script>

$(document).on('keypress, paste, input','#valueOfSolarPanelSystem',function(event){

            debugger;

            if($(this).val() != ''){

                debugger;

            var x = $(this).val()

               var replaceamount = x.replace(/\$/g,'').replace(/,/g, '');

               var y = Number(replaceamount)

               console.log(y)

          

                if(event.which >= 37 && event.which <= 40) return;

                $(this).val().replace('$','');

                // format number

                $(this).val(function(index, value) {

                    return '$'+ value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                });

            }

               

        });

 

 

</script>

 

 

</body>

</html>
