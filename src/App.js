import { useState } from "react";
import { Container } from "react-bootstrap";
import { Title } from "./components/title/Title";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { MovieList } from "./components/movie-list/MovieList";
import { SearchForm } from "./components/form/SearchForm";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const handleOnAddToList = (cat, movie) => {
    console.log(cat, movie);
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} />
        <MovieList />
      </Container>
    </div>
  );
};
export default App;
