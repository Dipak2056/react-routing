import React from "react";
import { Card, Button, Col } from "react-bootstrap";

export const CustomCard = ({
  movie,
  handleOnAddToList,
  handleOnDelete,
  btnDelete,
}) => {
  const generatedCard = (movie) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie?.Poster} />
        <Card.Body>
          <Card.Title>{movie?.title}</Card.Title>
          <Card.Text>
            Rating:{movie?.imdbRating}
            Directed by:{movie?.Director}
            Writer:{movie?.Writer}
          </Card.Text>
          {btnDelete ? (
            <Button
              variant="btn btn-danger w-100"
              onClick={() => handleOnDelete(movie.imdbID)}
            >
              <box-icon name="trash">Delete</box-icon>
            </Button>
          ) : (
            <div className="d-flex justify-content-between">
              <Button
                variant="info"
                onClick={() => handleOnAddToList("Happy", movie)}
              >
                Happy
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleOnAddToList("Sad", movie)}
              >
                Lazy
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  };
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      {movie?.Poster && movie?.Title && movie?.imdbRating
        ? generatedCard(movie)
        : ""}
    </Col>
  );
};
