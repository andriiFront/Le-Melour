import React from 'react';
import PropTypes from 'prop-types';
import './GoodCard.scss';

export const GoodCard = ({ data }) => {
  const {
    imgUrl,
    title,
    desc,
    other,
  } = data;

  return (
    <div className="good-card">
      <img src={imgUrl} alt="sox" className="good-card__img" />
      <h2 className="good-card__title">{title}</h2>
      <div className="good-card__categories">
        {desc}
      </div>
      <div className="good-card__eta">
        {other}
      </div>
    </div>
  );
};

GoodCard.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
