import React, { FC } from "react";
import "./styles.css";
import { ResultsEntity } from "../../types/characters";

interface ICard {
  ResultsEntity: ResultsEntity;
}

const Card: FC<ICard> = ({ ResultsEntity }) => {
  return (
    <div className="card">
      <img
        src={ResultsEntity.image}
        alt={ResultsEntity.name}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{ResultsEntity.name}</h2>
        <span className="card-tag">{ResultsEntity.gender}</span>
        <p className="card-description">
          {(ResultsEntity.type && ResultsEntity.type) ||
            "No description available"}
        </p>
        <div className="card-info">
          <p>Status: {ResultsEntity.status}</p>
          <p>Species: {ResultsEntity.species}</p>
          <p>Origin: {ResultsEntity.origin.name}</p>
          <p>Location: {ResultsEntity.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
