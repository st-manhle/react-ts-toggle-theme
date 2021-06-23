import React from 'react';

const Home = () => {
  const changeTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    console.log('Theme updated...');
}

  const themes = [
    'light',
    'dark'
  ];

  React.useEffect(() => {
    changeTheme(localStorage.getItem('theme'));
  }, []);

  return (
    <select defaultValue={localStorage.getItem('theme')} onChange={(e) => changeTheme(e.target.value)}>
      {themes.map((theme, index) =>
        <option value={theme} key={index}>{theme}</option>
      )}
    </select>
  );
};

export default Home;
