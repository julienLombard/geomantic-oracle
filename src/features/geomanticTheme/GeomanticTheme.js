import React from 'react';
import { useSelector } from 'react-redux';
import { getGeomanticTheme } from './geomanticThemeSlice';
import { figureHouseData } from '../../data/figureHouseData';
import geomanticThemeTemplate from './geomantic_theme_template.png';
import './geomanticTheme.css';
import { Figure } from '../../components/figure/Figure';
import Form from '../../components/form/Form';
import { motherFormData } from '../../data/motherFormData';
import { ThemeReader } from '../../components/themeReader/ThemeReader';
import { RandomThemeButton } from '../../components/randomThemeButton/RandomThemeButton';

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
      <h1>Geomantic Theme</h1>
      <Form name={'motherForm'} data={motherFormData} />
      <RandomThemeButton />
      <div className="themeTemplateContainer">
        <div className="themeTemplate">
          <img src={geomanticThemeTemplate} alt="geomantic theme template" />
          {renderFigures}
        </div>
      </div>
      <ThemeReader figures={displayTheme} />
    </div>
  );
};
