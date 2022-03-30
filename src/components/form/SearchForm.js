import React, { useState } from "react";
import { Form, Alert, Button, Col, Row } from "react-bootstrap";
import { fetchMovie } from "../../helpers/axiosHelper";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = ({ handleOnAddToList }) => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const movie = await fetchMovie(search);
    setMovie(movie.data);
  };
  console.log(movie);

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="search..."
              onChange={handleOnChange}
              required
            ></Form.Control>
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList}></CustomCard>
          )}
          {movie.Response === "False" && (
            <Alert variant="danger">{movie.Error}</Alert>
          )}
        </Col>
      </Row>
    </>
  );
};
