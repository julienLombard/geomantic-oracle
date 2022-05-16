import React, { useEffect } from 'react';
import logo from './logo.svg';
import { GeomanticTheme } from './features/geomanticTheme/GeomanticTheme';
import './App.css';
import { mountTheme } from './features/geomanticTheme/geomanticThemeSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mountTheme());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GeomanticTheme />
      </header>
    </div>
  );
}

export default App;
