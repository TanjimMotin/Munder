




























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



