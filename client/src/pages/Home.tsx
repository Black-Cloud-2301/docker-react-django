import { frequentlyQuestion } from '../data/json-data';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <main className='home'>
      <header>
        <img src='/images/netflix.png' alt='logo' width='134px' />
        <Link to={'signIn'} className='btn__signIn'>
          Sign In
        </Link>
      </header>
      <section className='first-section'>
        <img src='/images/home-bg.jpg' alt='home-bg' />
        <div className='flex flex-jc-c flex-ai-c container'>
          <article>
            <h3>Unlimited movies, TV shows, and more.</h3>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className='form'>
              <form action='post' className='form-item'>
                <input type='text' name='email' autoComplete='off' required />
                <label htmlFor='email'>Email address</label>
                <button type='submit'>Get Started</button>
              </form>
            </div>
          </article>
        </div>
      </section>
      <section className='second-section'>
        <article>
          <h3>Have an Android Phone? Get our new free plan!</h3>
          <h4>
            Watch a selection of new movies and TV shows without adding any
            payment details!
          </h4>
          <a href='https://play.google.com/store/apps/details?id=com.netflix.mediaclient'>
            Get the app
          </a>
        </article>
        <article>
          <img src='/images/home-bg-2.jpg' alt='home-bg-2' />
        </article>
      </section>
      <section className='third-section'>
        <h2>Frequently Asked Questions</h2>
        <article>
          {frequentlyQuestion.map((item, index) => {
            return <Accordion key={index} item={item} />;
          })}
        </article>
      </section>
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
            <a href='https://www.netflix.com/vn-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'>
              Account
            </a>
            <a href='https://media.netflix.com/en/'>Media Center</a>
            <a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>
              Investor Relations
            </a>
            <a href='https://jobs.netflix.com/'>Jobs</a>
            <a href='https://devices.netflix.com/en/'>Ways to Watch</a>
            <a href='https://help.netflix.com/legal/termsofuse'>Terms of Use</a>
            <a href='https://help.netflix.com/legal/privacy'>Privacy</a>
            <a href='https://www.netflix.com/vn-en/#'>Cookie Preferences</a>
            <a href='https://help.netflix.com/legal/corpinfo'>
              Corporate Information
            </a>
            <a href='https://help.netflix.com/en/contactus'>Contact Us</a>
            <a href='https://fast.com/'>Speed Test</a>
            <a href='https://help.netflix.com/legal/notices'>Legal Notices</a>
            <a href='https://www.netflix.com/vn-en/browse/genre/839338'>
              Only on Netflix
            </a>
          </div>
          <p>Netflix Vietnam</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
