$(document).ready(function(){
    /*var $nav = $('#Scroll-nav');
    var lastScrollTop = 0;
    var direction;
    $(function () {
        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();

            if (lastScrollTop < scrollTop && scrollTop > $nav.outerHeight() && direction != 'down') {
                //Scroll down
                $nav.stop().fadeOut();
                direction = 'down';
            } else if (lastScrollTop > scrollTop  && direction != 'up') {
                // Scroll up
                $nav.stop().fadeIn();
                direction = 'up';
            }
            lastScrollTop = scrollTop;
        });
    });  
    */
    

    $('#show-more').click(function($e){
        $e.preventDefault();
        $('#show-more').hide();
        $('.second-row').show();
    })
    $('#show-less').click(function($e){
        $e.preventDefault();
        $('.second-row').hide();
        $('#show-more').show()
    });
    
    $("#filter").keyup(function(){
        document.getElementById("live").style.display = "block";
        var filter = $(this).val(), count=0;
 
        // Loop through the comment list
        $("section ul li").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
            
        });

        /*var isempty=![].some.call(document.querySelector("input[type=text]"), function(input) {
            return input.value.length;
        });   
        if(isempty.length>0){
            document.getElementById("live").style.display = "block";
        }  else{
            document.getElementById("live").style.display = "none";
        }*/
 
        $("section ul li").click(function(){
            var text=document.createTextNode();
            $("input").append(text);
        })
        
    });
    
})


    