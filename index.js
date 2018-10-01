// ///////////////////////////// slideshow animation
    let current = 0,
    slides = document.getElementsByClassName("slide");

    setInterval(function() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
    }, 3000);



const subscribers = document.getElementById('submitInput');
// const usersTxt = url('subUsers.txt');

subscribers.addEventListener('click', function() {
	let usersList = document.getElementById('emailInput').value;

	if(usersList.slice(-4) != ".com" && usersList.slice(-4) != ".edu"){
		alert("Please enter a valid email")
	}

	else{
	console.log(usersList);
	}
});



