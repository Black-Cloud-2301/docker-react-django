import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Browse = () => {
  const [choseProfile, setChoseProfile] = useState<boolean>(true);

  return (
    <>
      {!choseProfile ? (
        <main className='browse'>
          <header>
            <Link to='/'>
              <img src='/images/netflix.png' alt='logo' width='100px' />
            </Link>
          </header>
          <div className='flex flex-jc-c flex-ai-c'>
            <div className='container'>
              <h3>Who's watching?</h3>
              <div className='grid-box'>
                <div className='grid-item'>
                  <div className='avatar'></div>
                  <p>Megan</p>
                </div>
                <div className='grid-item'>
                  <div className='avatar'></div>
                  <p>Linda</p>
                </div>
                <div className='grid-item'>
                  <div className='avatar'></div>
                  <p>Chloe</p>
                </div>
                <div className='grid-item'>
                  <div className='avatar'></div>
                  <p>Bella</p>
                </div>
                <div className='grid-item'>
                  <div className='avatar'></div>
                  <p>Scar</p>
                </div>
              </div>
              <button>Manage Profile</button>
            </div>
          </div>
        </main>
      ) : (
        <main className='browse-profile'>
          <Header />
        </main>
      )}
    </>
  );
};

export default Browse;
