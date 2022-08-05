

class DataSource {
    static searchClub(keyword) {
         
        return   fetch(`https://api.themoviedb.org/3/search/movie?api_key=81b57e3aa4ae0ad4f12481185d57b3fb&query=${keyword}`)

        .then(response => {
        return response.json();
        })

        .then(responseJson => {
            if(responseJson.results) {
            return Promise.resolve(responseJson.results);
            } else {
             return Promise.reject(`${keyword} is not found`);
             }
        })
    }
}
