import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mountTheme, getGeomanticTheme } from './geomanticThemeSlice';
import { figureHouseData } from '../../data/figureHouseData';

export const GeomanticTheme = () => {
  const displayTheme = useSelector(getGeomanticTheme);
  const dispatch = useDispatch();
  console.log(displayTheme);
  const renderFigures =
    displayTheme.mother1.name !== ''
      ? figureHouseData.map((e, i) => {
          return (
            <div key={i}>
              <p>{'Maison ' + e.house + ' : ' + displayTheme[e.name].name}</p>
              <p>{displayTheme[e.name].firstLine === 1 ? ' * ' : '* *'}</p>
              <p>{displayTheme[e.name].secondLine === 1 ? ' * ' : '* *'}</p>
              <p>{displayTheme[e.name].thirdLine === 1 ? ' * ' : '* *'}</p>
              <p>{displayTheme[e.name].fourthLine === 1 ? ' * ' : '* *'}</p>
              <br />
            </div>
          );
        })
      : null;
  return (
    <div>
      <h1>GeomanticTheme</h1>
      <button onClick={() => dispatch(mountTheme())}>mount Theme</button>
      {renderFigures}
    </div>
  );
};
