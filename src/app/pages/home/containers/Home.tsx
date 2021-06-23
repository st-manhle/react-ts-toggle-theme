import React from 'react';

const THEMES = [
  'light',
  'dark'
];

const Home = () => {

  React.useEffect(() => {
    changeTheme(localStorage.getItem('theme'));
  }, []);

  const changeTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    console.log('Theme updated...');
  }

  return (
    <select defaultValue={localStorage.getItem('theme')} onChange={(e) => changeTheme(e.target.value)}>
      {THEMES.map((theme, index) =>
        <option value={theme} key={index}>{theme}</option>
      )}
    </select>
  );
};

export default Home;
