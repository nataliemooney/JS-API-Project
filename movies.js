// API FETCHING 

async function main() {
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=52bdb4f5")
    const movieData = await response.json()
    const movieListEl = document.querySelector('.movie__descrip')
    console.log(movieData)
    movieListEl.innerHTML = movieHTML(movieData)
}

main()

function showMovieContent(movie) {
    console.log(movie)
}

function movieHTML(movie) {
    return `<div class="description__bg--wrapper">
    <div class="bg__overlay">
        <h4 class="movie__title--2">${movie.Title}</h4>
    </div>
    <div class="bg__overlay--lists">
        <ul class="overlay__lists">
            <li class="movie__year">${movie.Year} •</li>
            <li class="movie__age-rating">${movie.Rated} •</li>
            <li class="movie__duration">${movie.Runtime}</li>
        </ul>
    </div>
    <div class="overlay__movie--poster">
        <img class="movie__poster--2" src="${movie.Poster}">
    
    <div class="overlay__movie--descrip">
        <p class="movie__description">${movie.Plot}</p>
    </div>
    </div>
</div>`
}

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
};