
// ISOTOPE FILTER
jQuery(document).ready(function($){

  if ( $('.iso-box-wrapper').length > 0 ) { 

      var $container  = $('.iso-box-wrapper'), 
        $imgs     = $('.iso-box img');

      $container.imagesLoaded(function () {

        $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
        });

        $imgs.load(function(){
          $container.isotope('reLayout');
        })

      });

      //filter items on button click

      $('.filter-wrapper li a').click(function(){

          var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({ 
        filter: filterValue,
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});

// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });

});

let fruitsObject = {};

function addFruit() {
  let fruitName = document.getElementById('fruitName').value;
  let fruitQuantity = parseInt(document.getElementById('fruitQuantity').value);

  let key = fruitQuantity > 1 ? fruitName + 's' : fruitName;

  fruitsObject[key] = fruitQuantity;

  document.getElementById('fruitName').value = '';
  document.getElementById('fruitQuantity').value = '';
}

function stopInput() {
  document.getElementById('result').textContent = JSON.stringify(fruitsObject, null, 2);
}


function updateRealTimeClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  
  document.getElementById('real-time-clock').innerText = formattedTime;
}

// อัปเดตเวลาทุก 1 วินาที
setInterval(updateRealTimeClock, 1000);

// อัปเดตเวลาเมื่อหน้าเว็บโหลด
updateRealTimeClock();


var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "Please enter some values";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "BMI ของคุณ คือ " + bmi + " which means " + "you are Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "BMI ของคุณ คือ " + bmi + " which means " + "You are Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "BMI ของคุณ คือ " + bmi + " which means " + "You are Overweight";
	} else if (bmi >= 30) {
		measure = "BMI ของคุณ คือ " + bmi + " which means " + "You are Obese";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}





const dataContainer = document.getElementById("data-containeer");

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        data.forEach(post =>{
          console.log(post);
          const postElemrnt= document.createElement("p");
          postElemrnt.textContent = `
          Post userID: ${post.userid} - Title: ${post.title} - ID: ${post.id} - Completed: ${post.completed}
          `;
dataContainer.appendChild(postElemrnt);
        })
      })
      .catch(error => {
        console.log("Error fetching data:",error);
      })
      