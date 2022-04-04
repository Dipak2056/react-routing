import React from "react";
import { Row, Col, Button } from "react-bootstrap";
export const ListItem = ({
  movie,
  handleOnAddToList,
  btnDelete,
  handleOnDelete,
}) => {
  return (
    <Row>
      <Col md={3}>
        <img src={movie.Poster} alt="moviePoster" className="w-100" srcset="" />
      </Col>
      <Col className="d-flex justify-content-center row">
        {movie?.imdbRating ? (
          <span>
            IMDB Rating: <b>{movie.imdbRating}</b>
          </span>
        ) : (
          ""
        )}
        {movie?.Director ? (
          <span className="d-block">
            Directed By : <b>{movie.Director}</b>
          </span>
        ) : (
          "N/A"
        )}
        {movie?.Writer ? (
          <span className="d-block">
            Written By : <b>{movie.Writer}</b>
          </span>
        ) : (
          "N/A"
        )}
        {btnDelete ? (
          <Button
            variant="btn btn-danger "
            onClick={() => handleOnDelete(movie.imdbID)}
          >
            <box-icon name="trash">Delete</box-icon>
          </Button>
        ) : (
          <div className="d-flex justify-content-between">
            <Button
              variant="btn btn-outline"
              onClick={() => handleOnAddToList("Happy", movie)}
            >
              <box-icon name="like"></box-icon>
            </Button>
            <Button
              variant="btn btn-outline"
              onClick={() => handleOnAddToList("Sad", movie)}
            >
              <box-icon name="dislike"></box-icon>
            </Button>
          </div>
        )}
      </Col>
    </Row>
  );
};
