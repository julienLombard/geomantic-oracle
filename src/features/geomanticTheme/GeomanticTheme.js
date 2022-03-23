import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mountTheme, getGeomanticTheme } from './geomanticThemeSlice';
import { figureHouseData } from '../../data/figureHouseData';
import geomanticThemeTemplate from './geomantic_theme_template.png';
import './geomanticTheme.css';

export const GeomanticTheme = () => {
  const displayTheme = useSelector(getGeomanticTheme);
  const dispatch = useDispatch();
  const renderFigures =
    displayTheme.mother1.name !== ''
      ? figureHouseData.map((e, i) => {
          return (
            <div key={i} className="figure-div" id={'figure-' + (i + 1)}>
              <p className="figure-points">
                {displayTheme[e.name].firstLine === 1 ? ' . ' : '. .'}
              </p>
              <p className="figure-points">
                {displayTheme[e.name].secondLine === 1 ? ' . ' : '. .'}
              </p>
              <p className="figure-points">
                {displayTheme[e.name].thirdLine === 1 ? ' . ' : '. .'}
              </p>
              <p className="figure-points">
                {displayTheme[e.name].fourthLine === 1 ? ' . ' : '. .'}
              </p>
              <p className="figure-name">{displayTheme[e.name].name}</p>
            </div>
          );
        })
      : null;
  return (
    <div>
      <h1>GeomanticTheme</h1>
      <button onClick={() => dispatch(mountTheme())}>mount Theme</button>
      <div>
        <img src={geomanticThemeTemplate} alt="geomantic theme template" />
      </div>
      {renderFigures}
    </div>
  );
};
