import React from 'react';
import { useSelector } from 'react-redux';
import { getGeomanticTheme } from './geomanticThemeSlice';
import { figureHouseData } from '../../data/figureHouseData';
import geomanticThemeTemplate from './geomantic_theme_template.png';
import './geomanticTheme.css';
import { Figure } from '../../components/Figure';
import Form from '../../components/Form';
import { motherFormData } from '../../data/motherFormData';

export const GeomanticTheme = () => {
  const displayTheme = useSelector(getGeomanticTheme);
  const renderFigures =
    displayTheme.mother1.name !== ''
      ? figureHouseData.map((e, i) => {
          return (
            <Figure
              key={i}
              id={'figure-' + (i + 1)}
              figure={displayTheme[e.name]}
            />
          );
        })
      : null;

  return (
    <div>
      <h1>GeomanticTheme</h1>
      <Form name={'motherForm'} data={motherFormData} />
      <div>
        <img src={geomanticThemeTemplate} alt="geomantic theme template" />
      </div>
      {renderFigures}
    </div>
  );
};
