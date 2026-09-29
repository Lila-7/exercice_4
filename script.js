const searchForm = document.getElementById("searchForm");
const searchQuery = document.getElementById("searchQuery");
const searchResults = document.getElementById("searchResults");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = searchQuery.value.trim();
    searchResults.innerHTML = ""; 


        try{ const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
         const data = await response.json();

         if (data.Response === "False"){
            searchResults.innerHTML = `<p class="text-danger">No results found for "${data.Title}". 
            Please try a different search term.</p>`;
            return;
         }

        
        data.Search.forEach(movie => {
            const movieCard = createMovieCard(movie);
            searchResults.appendChild(movieCard);
        });

        } catch (error) {
            console.error("Error fetching movies:", error);
            searchResults.innerHTML = `<p class="text-danger">Error occurred while fetching data
        .</p>`;
        }
            
    })
    


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

