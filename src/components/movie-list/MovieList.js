import React from "react";
import { useState } from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { ListItem } from "../../list-item/ListItem";

export const MovieList = ({ handleOnDelete, movieList, setCategory }) => {
  const [displayview, setDisplayView] = useState("Grid");
  return (
    <div>
      <Row>
        <Col>
          <div className="filter d-flex justify-content-between py-3">
            <ButtonGroup aria-label="Basic example" size="lg">
              <Button variant="warning" onClick={() => setCategory("")}>
                ALL
              </Button>
              <Button variant="primary" onClick={() => setCategory("Happy")}>
                HAPPY
              </Button>
              <Button variant="danger" onClick={() => setCategory("Sad")}>
                SAD
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example" size="lg">
              <Button variant="primary" onClick={() => setDisplayView("Grid")}>
                GRID
              </Button>
              <Button
                variant="secondary"
                onClick={() => setDisplayView("List")}
              >
                LIST
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
      <Row>
        {movieList.map((movie, index) => {
          return displayview === "Grid" ? (
            <CustomCard
              movie={movie}
              key={index}
              handleOnDelete={handleOnDelete}
              btnDelete={true}
            />
          ) : (
            <ListItem
              movie={movie}
              key={index}
              handleOnDelete={handleOnDelete}
              btnDelete={true}
            />
          );
        })}
      </Row>
    </div>
  );
};
