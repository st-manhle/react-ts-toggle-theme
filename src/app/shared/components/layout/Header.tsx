import React from 'react';
import { Link } from 'react-router-dom';

const THEMES = [
  'light',
  'dark'
];

export function Header() {

  const selectedThemeRef = React.useRef(localStorage.getItem('theme'));

  React.useEffect(() => {
    changeTheme(selectedThemeRef.current);
  }, []);

  const changeTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    console.log('Theme updated...');
  }

  return (
    <header>
      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="articles">Articles</Link>
        </li>
        <li>
          <Link to="auth/login">Login</Link>
        </li>
        <li>
          <Link to="auth/register">Register</Link>
        </li>
        <li>
        <select defaultValue={selectedThemeRef.current} onChange={(e) => changeTheme(e.target.value)}>
          {THEMES.map((theme, index) =>
            <option value={theme} key={index}>{theme}</option>
          )}
        </select>
        </li>
      </ul>
    </header>
  );
}
