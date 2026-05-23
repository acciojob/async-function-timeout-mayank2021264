//your JS code here. If required.
let output = document.getElementById('output');
let button = document.getElementById('btn');
let form = document.getElementById('form');

async function display(event) {
	let delay = parseInt(document.getElementById('delay').value);
	let text = document.getElementById('text').value;
	event.preventDefault();
	setTimeout(() => {
		console.log(text);
		output.innerText = text;
	},delay);
}

form.addEventListener('submit', display);
