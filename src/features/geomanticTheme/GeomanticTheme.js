import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mountTheme, getGeomanticTheme } from './geomanticThemeSlice';

export const GeomanticTheme = () => {
  const displayTheme = useSelector(getGeomanticTheme);
  const dispatch = useDispatch();
  //   console.log(displayTheme);
  return (
    <div>
      <h1>GeomanticTheme</h1>
      <button onClick={() => dispatch(mountTheme())}>mount Theme</button>
      {/* <p>{displayTheme.map((e) => console.log(e.name))} </p> */}
    </div>
  );
};
