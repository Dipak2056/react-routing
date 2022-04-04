import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Title } from "./components/title/Title";
import "./App.css";
import { MovieList } from "./components/movie-list/MovieList";
import { SearchForm } from "./components/form/SearchForm";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [warningAlert, setWarningAlert] = useState(false);
  const [category, setCategory] = useState("");

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };
    !movieList.length && setMovieList([obj]);
    const movieExists = movieList.find((item) => item.imdbID === movie.imdbID);
    if (movieExists) {
      setWarningAlert(true);
    } else {
      setMovieList([...movieList, obj]);
    }
  };
  const handleOnDelete = (imdbID) => {
    console.log(imdbID);
    const newFun = movieList.filter((x) => x.imdbID !== imdbID);
    setMovieList(newFun);
  };
  const movieToDisplay = category
    ? movieList.filter((item) => item.cat === category)
    : movieList;
  return (
    <div className="wrapper">
      {warningAlert ? (
        <Alert
          variant="danger"
          onClose={() => setWarningAlert(false)}
          dismissible
        >
          <p className="text-center">Item already added to a List.</p>
        </Alert>
      ) : (
        ""
      )}
      <Container>
        <Title />
        <SearchForm
          handleOnAddToList={handleOnAddToList}
          handleOnDelete={handleOnDelete}
        />
        <p>
          selected:
          {category === "" ? "All" : category === "Happy" ? "Happy" : category}
        </p>
        <MovieList
          handleOnAddToList={handleOnAddToList}
          movieList={movieToDisplay}
          handleOnDelete={handleOnDelete}
          setCategory={setCategory}
        />
      </Container>
    </div>
  );
};
export default App;
