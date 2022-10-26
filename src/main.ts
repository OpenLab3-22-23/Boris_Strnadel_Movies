import './style.css';
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  


  document.getElementById('app')!.innerHTML = `
  <body>
    <header>
    <form id="form">
        <input type="text" id="search" placeholder="Search" class="search" />
		<span class="main-title">
			Movies
	</span>
    </form>
    </header>
    <main id="main"></main>
  </body>
</html>
`;




const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getMovies = async (url) => {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);

  showMovies(respData.results);
};

const showMovies = (movies) => {
	main.innerHTML = "";
  
	movies.forEach((movie) => {
	  const { poster_path, title} = movie;
  
	  const movieEl = document.createElement("div");
	  movieEl.classList.add("movie");
  
	  movieEl.innerHTML = `
		<img
		src="${IMGPATH + poster_path}"
		alt="${title}"
		/>`; 
		main.appendChild(movieEl);
	});
  };

 

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const searchTerm = search.value;
  
	if (searchTerm) {
	  getMovies(SEARCHAPI + searchTerm);
	  search.value = "";
	}
  });
