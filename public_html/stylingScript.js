/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 
         
$(document).ready(function(){
             
   $("#login").click(function () {
        var name = $("#useridLogin").val();
        var pass_word=$("#passwordLogin").val();
        if(name!=""||pass_word!=""){
            var cookieTemp = getCookie(name);
            if (cookieTemp !="") {
            var user = $.parseJSON(cookieTemp);    
            if(user.userid==name&&user.pwd==pass_word){
            var url = "userprofile.html?" + name;
            location.href = url;
             }   else
            alert("Please enter correct username and password");
        } else {
            alert("Please Register First");
        }
        } else{
          alert("Please enter username and password");
            return;
        }

    });
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function start() {
                    var windowsize = $( window ).width();
                    if (windowsize < 600){
                    return false;
                }
                    else{
                    $('#logo').animate({left: '350px'}, 5000, 'swing');
                    $('#logo').animate({left: '0px'}, 2500, 'swing');
                    start();
                }
                }
                start();
     // Initialize Tooltip
     $('[data-toggle="tooltip"]').tooltip(); 
   // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 10000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  });
  
 


