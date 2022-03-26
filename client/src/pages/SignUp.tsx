import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <main className='signUp'>
      <header className='flex flex-jc-sb flex-ai-c'>
        <Link to='/'>
          <img src='/images/netflix.png' alt='logo' width='166px' />
        </Link>
        <Link to={'signIn'} className='btn__signIn'>
          Sign In
        </Link>
      </header>
      <div className='flex flex-jc-c flex-ai-c container'>
        <div className='wrapped'>
          <p>
            STEP <b>1</b> OF <b>3</b>
          </p>
          <h3>
            Welcome back!
            <br />
            Joining Netflix is easy.
          </h3>
          <h4>Enter your password and you'll be watching in no time.</h4>
          <h5>
            Email
            <br /> <b>test@gmail.com</b>
          </h5>
          <div className='form'>
            <form method='post' className='form-item'>
              <input
                type='password'
                name='password'
                autoComplete='off'
                required
              />
              <label htmlFor='password'>Enter your password</label>
            </form>
          </div>
          <Link to='#'>
            <p className='link-forgot-pass'>Forgot your password?</p>
          </Link>
          <button>Next</button>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
