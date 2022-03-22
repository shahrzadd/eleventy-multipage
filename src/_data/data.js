const axios = require('axios');

module.exports = async function () {
  let filmData = {
    historyFilms: [],
    westernFilms: [],
    crimeFilms: [],
  };

  try {
    const historyFilms = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=9e826d14cc4782bee96eb79cb7b834ec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36%2C%2037%2C%2080&with_watch_monetization_types=flatrate'
    );
    for (let i = 0; i < historyFilms.data.results.length; i++) {
      let tempFilmObj = {
        title: historyFilms.data.results[i].title,
        poster_path: historyFilms.data.results[i].poster_path,
      };
      filmData.historyFilms.push(tempFilmObj);
    }

    const westernFilms = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=9e826d14cc4782bee96eb79cb7b834ec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37%2C%2037%2C%2080&with_watch_monetization_types=flatrate'
    );

    for (let i = 0; i < westernFilms.data.results.length; i++) {
      let tempFilmObj = {
        title: westernFilms.data.results[i].title,
        poster_path: westernFilms.data.results[i].poster_path,
      };
      filmData.westernFilms.push(tempFilmObj);
    }

    const crimeFilms = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=9e826d14cc4782bee96eb79cb7b834ec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80%2C%2037%2C%2080&with_watch_monetization_types=flatrate'
    );

    for (let i = 0; i < crimeFilms.data.results.length; i++) {
      let tempFilmObj = {
        title: crimeFilms.data.results[i].title,
        poster_path: crimeFilms.data.results[i].poster_path,
      };
      filmData.crimeFilms.push(tempFilmObj);
    }

    //console.log(filmData);

    return filmData;
  } catch (error) {
    console.log(error);
  }
};
