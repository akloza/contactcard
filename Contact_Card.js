$(document).ready(function(){


    $('button').click(function(){

        var new_card = '<div class="contact_card">'
        new_card += '<span class="name">'+$("#firstname").val() + " " + $("#lastname").val() + 
        '</span><span class="description" style="display:none">'+ $("#description").val() +
         '</span></div>';
        // Add the new card we made to the parent
        $(this).parent().append(new_card);
    });
    
    
    //
    $(document).on("click",".contact_card",function() {
        //This function will apply eto every contact card.
         $(this).children().toggle();
    });
    //
    
});




