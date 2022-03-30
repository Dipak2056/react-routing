import React from "react";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ movie, fun }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.title}</Card.Title>
        <Card.Text>Rating:{movie?.imdbRating}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="info" onClick={() => fun("happy", movie)}>
            Happy
          </Button>
          <Button variant="secondary" onClick={() => fun("lazy", movie)}>
            Lazy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
