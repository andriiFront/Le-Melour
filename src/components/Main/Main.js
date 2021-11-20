import React from 'react';
import { useSelector } from 'react-redux';
import { GoodsPage } from '../GoodsPage';
import { getSox, getToy } from '../../store';
import './Main.scss';

export const Main = () => {
  const soxes = useSelector(getSox);
  const toys = useSelector(getToy);

  return (
    <main className="main">
      <section className="main__section" id="sox">
        <h2 className="main__header">
          SOCKS
        </h2>
        <GoodsPage data={soxes} />
      </section>
      <section className="main__section" id="toys">
        <h2 className="main__header">
          TOYS
        </h2>
        <GoodsPage data={toys} />
      </section>
    </main>
  );
};
