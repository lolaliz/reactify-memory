import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div  className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default ImageCard;

//onClick={() => props.setClicked(props.id)}