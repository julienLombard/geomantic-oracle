import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mountTheme, getGeomanticTheme } from './geomanticThemeSlice';
import { figureHouseData } from '../../data/figureHouseData';
import geomanticThemeTemplate from './geomantic_theme_template.png';
import { isOdd } from './geomanticThemeFunctions';
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const fourMothers = [];
    for (let i = 0; i < 16; i++) {
      if (e.target[i].value !== '') {
        fourMothers.push(isOdd(e.target[i].value));
      }
    }

    if (fourMothers.length === 16) {
      dispatch(mountTheme(fourMothers));
    }
  };

  return (
    <div>
      <h1>GeomanticTheme</h1>
      <form className="motherForm" onSubmit={handleSubmit}>
        <div className="motherForm-div">
          <label className="motherForm-label">
            First mother:
            <input className="motherForm-input" type="number" placeholder="1" />
            <input className="motherForm-input" type="number" placeholder="2" />
            <input className="motherForm-input" type="number" placeholder="3" />
            <input className="motherForm-input" type="number" placeholder="4" />
          </label>
        </div>

        <div className="motherForm-div">
          <label className="motherForm-label">
            Second mother:
            <input className="motherForm-input" type="number" placeholder="5" />
            <input className="motherForm-input" type="number" placeholder="6" />
            <input className="motherForm-input" type="number" placeholder="7" />
            <input className="motherForm-input" type="number" placeholder="8" />
          </label>
        </div>

        <div className="motherForm-div">
          <label className="motherForm-label">
            Third mother:
            <input className="motherForm-input" type="number" placeholder="9" />
            <input
              className="motherForm-input"
              type="number"
              placeholder="10"
            />
            <input
              className="motherForm-input"
              type="number"
              placeholder="11"
            />
            <input
              className="motherForm-input"
              type="number"
              placeholder="12"
            />
          </label>
        </div>

        <div className="motherForm-div">
          <label className="motherForm-label">
            Fourth mother:
            <input
              className="motherForm-input"
              type="number"
              placeholder="13"
            />
            <input
              className="motherForm-input"
              type="number"
              placeholder="14"
            />
            <input
              className="motherForm-input"
              type="number"
              placeholder="15"
            />
            <input
              className="motherForm-input"
              type="number"
              placeholder="16"
            />
          </label>
        </div>

        <button type="submit">mount Theme</button>
      </form>
      <div>
        <img src={geomanticThemeTemplate} alt="geomantic theme template" />
      </div>
      {renderFigures}
    </div>
  );
};
