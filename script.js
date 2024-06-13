// http://www.omdbapi.com/?i=tt3896198&apikey=52bdb4f5

//BURGER MENU

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove('menu--open')
};

// PIC FADE IN

var scroll = window.requestAnimationFrame
    || function (callbck) {
        window.setTimeout(callback, 1000 / 60)
    }

var elemToShow = document.querySelectorAll('.show__on-scroll')



function loop() {
    elemToShow.forEach(function (elem) {
        if (elemInViewport(elem)) {
            elem.classList.add('is__visible')
        }
        else {
            elem.classList.remove('is__visible')
        }
    })
    scroll(loop)
}

const callback = function (entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("is__visible");
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show__on-scroll");
targets.forEach(function (target) {
    observer.observe(target);
});


// FETCH API

async function main() {
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=52bdb4f5")
    const movieData = await response.json()
    const movieListEl = document.querySelector('.movie__list')
    console.log(movieData)
    movieListEl.innerHTML = movieHTML(movieData)
}

main()


function showMovieContent(movie) {
    console.log(movie)
}

function movieHTML(movie) {
    return `<div class="movie__content">
    <figure class="movie__posters">
    <a href="./description.html"><img class="movie__poster" src="${movie.Poster}" alt="${movie.Title}"></a>
    <a href="./description.html"><div class="movie__title">${movie.Title}</div></a>
        <div class="movie__rating">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        class="rating__star" viewBox="0 0 24 24" fill="currentColor"
        role="presentation">
        <path
            d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z">
        </path>
    </svg>
    ${movie.imdbRating}</div>
    </figure>
</div>`
}




// ENTER TO SEARCH


let input = document.querySelector('input')

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        console.log(e.target.value)
    }
})