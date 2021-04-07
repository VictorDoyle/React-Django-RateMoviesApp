/* API call to Django Backend */
const API = 'http://127.0.0.1:8000/api/movies/'



class MovieModel {

    static allMovies = () => {
        return fetch(`${API}`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 15b6c54a53b59e352f85061be0a320710e0975f1',
          }
        }).then(res => res.json())
        .catch( error => console.log(error))
      }











}

export default MovieModel