import './style.css'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c9fb26915mshb60c79b6006990bp13d41fjsn7b4e4e9d7830',
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
	}
};

fetch('https://movies-app1.p.rapidapi.com/api/genres', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));