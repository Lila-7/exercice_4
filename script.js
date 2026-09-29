const searchForm = document.getElementById("searchForm");
const searchQuery = document.getElementById("searchQuery");
const searchResults = document.getElementById("searchResults");
const API_KEY = "59b22ff9"; 

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = searchQuery.value.trim();
    searchResults.innerHTML = ""; // Clear previous results

   if (query) {
        try{ const response = await fetch('http://www.omdbapi.com/?apikey=APIKEY&s=term', {)

        }
   }
    
});

// helper function to create Bootstrap card for a movie
function createMovieCard(movie) {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3 mb-4";

    const posterSrc = movie.Poster !== "N/A" 
        ? movie.Poster 
        : "https://placehold.co/300x450?text=No+Image";

    col.innerHTML = `
        <div class="card h-100">
            <img src="${posterSrc}" class="card-img-top" alt="Poster of ${movie.Title}"">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
            </div>
        </div>
    `;

    return col;
}

