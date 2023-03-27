import React from 'react';

const Card = (props) => {
  return (
    <div class="card mb-3 shadow navbarLogo2">
      <img
        className="card-img-top mt-3"
        src={props.cardImage}
        alt="thereIsNoImage"
      />
      <div className="card-body text-center">
        <h5 className="card-title text-center">{props.cardTitle}</h5>
        <p class="card-text text-center">{props.cardText}</p>
        <a
          class="btn btn-primary text-center "
          role="button"
          href={props.cardDirection}
          onClick={props.cardAlert}
        >
          {props.cardButtonName}
        </a>
      </div>
    </div>
  );
};

export default Card;
