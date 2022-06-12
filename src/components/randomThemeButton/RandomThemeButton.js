import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { mountTheme } from '../../features/geomanticTheme/geomanticThemeSlice';

export const RandomThemeButton = () => {
  const dispatch = useDispatch();
  const scrollToTheme = useRef(null);

  const randomTheme = () => {
    const fourMothers = [];

    for (let i = 0; i < 16; i++) {
      fourMothers.push(Math.ceil(Math.random() * 2));
    }

    dispatch(mountTheme(fourMothers));

    scrollToTheme.current.scrollIntoView();
  };

  return (
    <div>
      <button
        type="button"
        ref={scrollToTheme}
        onClick={randomTheme}
        className="App-button"
      >
        Générer un thème aléatoire
      </button>
    </div>
  );
};
