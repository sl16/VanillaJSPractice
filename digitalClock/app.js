function updateClock(){
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, 0);
	const mins = now.getMinutes().toString().padStart(2, 0);
	const secs = now.getSeconds().toString().padStart(2, 0);

	const string = `${hours}:${mins}:${secs}`;
	document.getElementById("clock").textContent = string;
}

updateClock();
setInterval(updateClock, 1000);