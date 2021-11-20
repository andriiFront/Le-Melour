import React from 'react';
import PropTypes from 'prop-types';
import { GoodCard } from '../GoodCard';
import './GoodsPage.scss';

export const GoodsPage = ({ data }) => (
  <div className="goods-list">
    {data.map(item => (
      <GoodCard
        key={item.id}
        data={item}
      />
    ))}
  </div>
);

GoodsPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired),
  ).isRequired,
};
