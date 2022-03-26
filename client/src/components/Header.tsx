import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeBackground();
    console.log(window.scrollY);
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <nav className={scroll ? 'header scroll' : 'header un-scroll'}>
      <div className='left-side'>
        <Link to='/'>
          <img src='/images/netflix.png' alt='logo' width='90px' />
        </Link>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/'>
          <p>TV Shows</p>
        </Link>
        <Link to='/'>
          <p>Movies</p>
        </Link>
        <Link to='/'>
          <p>News & Popular</p>
        </Link>
        <Link to='/'>
          <p>My List</p>
        </Link>
      </div>
      <div className='right-side'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#FFFFFF'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
        </svg>
        <svg
          className='header__icon'
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#FFFFFF'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z' />
        </svg>
        <div className='avatar'></div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill='#FFFFFF'
        >
          <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
          <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
