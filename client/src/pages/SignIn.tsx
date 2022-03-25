import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <main className='signIn'>
      <header>
        <Link to='/'>
          <img src='/images/netflix.png' alt='logo' width='166px' />
        </Link>
      </header>
      <img src='/images/home-bg.jpg' alt='home-bg' />
      <div className='container'>
        <div className='wrapped'>
          <h3>Sign In</h3>
          <form action='' method='post' className='form'>
            <div className='form-item'>
              <input
                type='text'
                name='emailOrPhone'
                autoComplete='off'
                required
              />
              <label htmlFor='emailOrPhone'>Email or phone number</label>
            </div>
            <div className='form-item'>
              <input
                type='password'
                name='password'
                autoComplete='off'
                required
              />
              <label htmlFor='password'>Password</label>
            </div>
            <button type='submit'>Sign In</button>
            <div className='flex flex-jc-sb extra-info'>
              <div>
                <input type='checkbox' name='remember' />
                <label htmlFor='remember'>Remember me</label>
              </div>
              <a href='https://www.netflix.com/vn-en/LoginHelp'>Need help?</a>
            </div>
          </form>
          <form method='post'>
            <button type='submit' className='btn__fb'>
              <img
                src='https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png'
                alt='facebook-icon'
                width={20}
                height={20}
              />
              <p>Login with Facebook</p>
            </button>
            <div className='flex flex-ai-c'>
              <p>New to Netflix?</p>
              <Link to='' className='link-to-signUp'>
                Sign up now
              </Link>
            </div>
            <div className='more-info'>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                {!learnMore && (
                  <span onClick={() => setLearnMore(true)}>Learn more</span>
                )}
              </p>

              {learnMore && (
                <p>
                  The information collected by Google reCAPTCHA is subject to
                  the Google{' '}
                  <span>
                    <a href='https://policies.google.com/privacy'>
                      Privacy Policy
                    </a>
                  </span>{' '}
                  and{' '}
                  <span>
                    <a href='https://policies.google.com/terms'>
                      Terms of Service
                    </a>
                  </span>{' '}
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                </p>
              )}
            </div>
          </form>
        </div>
        <footer>
          <div className='footer'>
            <div className='footer__header'>
              <a href='https://help.netflix.com/en/contactus'>
                Questions? Contact us.
              </a>
            </div>
            <div className='footer__info'>
              <a href='https://help.netflix.com/en/node/412'>FAQ</a>
              <a href='https://help.netflix.com/en/'>Help Center</a>
              <a href='https://help.netflix.com/legal/termsofuse'>
                Terms of Use
              </a>
              <a href='https://help.netflix.com/legal/privacy'>Privacy</a>
              <a href='https://www.netflix.com/vn-en/#'>Cookie Preferences</a>
              <a href='https://help.netflix.com/legal/corpinfo'>
                Corporate Information
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default SignIn;
