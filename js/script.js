
$(document).ready(function(){


	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		timestamp : (new Date()).getTime() + 08*10*60*60*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});

$(document).ready(function() {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	let birthday = "Sep 30, 2021 00:00:00",
		countDown = new Date(birthday).getTime(),
		x = setInterval(function() {    
  
		  let now = new Date().getTime(),
			  distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			let headline = document.getElementById("headline"),
				countdown = document.getElementById("countdown"),
				content = document.getElementById("content");
  
			headline.innerText = "It's my birthday!";
			countdown.style.display = "none";
			content.style.display = "block";
  
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());