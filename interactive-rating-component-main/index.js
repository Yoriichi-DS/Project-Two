

$(document).ready(function() {
  // Add click event listener to all buttons with the class .numbers
  $('.numbers').click(function() {
      // hide the p below the buttons when any of the option buttons are clicked
      // Shows the submit button when any of the option buttons is clicked
      $(".hint").fadeOut(0);
      $('.submit').fadeIn(900);

  });
});

  //Original JQuery Code
   /* 
      $(document).ready(function() {
        $(".numbers").click(function() {
          var Text = $(this).text();
          console.log(Text);
        });
      
        $(".submit").click(function() {
          $(".loading").show();
          $(".container").toggle();
          
          
          setTimeout(function() {
            // Fades out every now and then for the loading animation then removes it from the DOM
            $(".loading").fadeOut( 22000, function() {
              $(this).remove();
            });
      
            // Shows the class .container2 after the loading animation
            $(".container2").fadeIn( 9000 , function(){
              $(this).remove();
            });
            setTimeout(function(){
              $(".container3").toggle();
            } , 9000)
          }, 1000); 
          
        });
      });
  */


      //Modified from JQuery to JavaScript with the help from AI
      document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".numbers").forEach(function(element) {
          element.addEventListener("click", function() {
            var Text = this.textContent;
            console.log(Text);
            document.getElementById("number-rating").innerText = Text;
          });
        });
  
        document.querySelector(".submit").addEventListener("click", function() {
          console.log("Submit button clicked");
  
          var loading = document.querySelector(".loading");
  
          // Show the loading animation
          loading.style.display = "flex";
          // Use a timeout to ensure the transition is applied
          setTimeout(function() {
            loading.style.opacity = 1;
          }, 10);
  
          // Hide the class .container
          document.querySelector(".container").style.display = "none";
  
          // loading with a delay
          setTimeout(function() {
            console.log("Loading complete");
  
            // Fading out the loading animation
            loading.style.opacity = 0;
            setTimeout(function() {
              loading.style.display = "block";
            }, 20); 
  
            // Show class .container2 after the loading animation
            var container2 = document.querySelector(".container2");
            container2.style.display = "block";
            container2.style.opacity = 1;
            setTimeout(function() {
              container2.style.opacity = 1;
            }, 10); 
  
            setTimeout(function() {
              // Hide class .container2 and show class .container3
              container2.style.display = "none";
              var container3 = document.querySelector(".container3");
              container3.style.display = "block";
              container3.style.opacity = 0;
              setTimeout(function() {
                container3.style.opacity = 1;
              }, 10); 
            }, 10); 
          }, 4000); 
        });
      });