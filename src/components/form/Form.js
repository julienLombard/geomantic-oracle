import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { isOdd } from '../../features/geomanticTheme/geomanticThemeFunctions';
import { mountTheme } from '../../features/geomanticTheme/geomanticThemeSlice';
import './form.css';

const Form = (props) => {
  const dispatch = useDispatch();
  const { name, data } = props;
  const scrollToTheme = useRef(null);

  const renderInput =
    data !== undefined
      ? data.map((e) => {
          return (
            <div key={e.id} className={name + '-div'}>
              <label className={name + '-label'}>
                <div>{e.name}</div>
                <input
                  className={name + '-input'}
                  type="number"
                  placeholder={e.lines.first}
                />
                <input
                  className={name + '-input'}
                  type="number"
                  placeholder={e.lines.second}
                />
                <input
                  className={name + '-input'}
                  type="number"
                  placeholder={e.lines.third}
                />
                <input
                  className={name + '-input'}
                  type="number"
                  placeholder={e.lines.fourth}
                />
              </label>
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

    scrollToTheme.current.scrollIntoView();
  };

  return (
    <form className={name} onSubmit={handleSubmit}>
      {renderInput}

      <button type="submit" ref={scrollToTheme} className="App-button">
        Calculer le thème
      </button>
    </form>
  );
};

export default Form;
