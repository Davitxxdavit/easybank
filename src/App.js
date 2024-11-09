import logo from './assets/logo.svg';
import './App.css';
import HeaderLinks from './components/HeadeLinks/HeaderLinks';
import Button from './components/Button/Button';
import intro from './assets/bg-intro-desktop.svg';
import introPhoneImg from './assets/image-mockups.png';
import Item from './components/Item/Item';
import item1IMG from './assets/icon-online.svg';
import item2IMG from './assets/icon-budgeting.svg';
import item3IMG from './assets/icon-onboarding.svg';
import item4IMG from './assets/icon-api.svg';
import LatestArticlesItem from './components/LatestArticlesItem/LatestArticlesItem';
import latestIMG1 from './assets/image-currency.jpg';
import latestIMG2 from './assets/image-restaurant.jpg';
import latestIMG3 from './assets/image-plane.jpg';
import latestIMG4 from './assets/image-confetti.jpg';

import facebook from './assets/icon-facebook.svg';
import instagram from './assets/icon-instagram.svg';
import twitter from './assets/icon-twitter.svg';
import youtube from './assets/icon-youtube.svg';
import pinterest from './assets/icon-pinterest.svg';
import logoWhite from './assets/logowhite.svg';
import burger from './assets/icon-hamburger.svg';
import mobileIntro from './assets/bg-intro-mobile.svg';
import iconClose from './assets/211652_close_icon.png';

import React, {useState} from 'react';

function App() {

    const [on, setOn] = useState(true)
    function burgerOnClick (arr) {

      setOn(on ? false : true)
     
    }


  return (
    <>
    <div className="App"> 


      <div className="header">
        <div className='content' >
            <img className='logo' src={logo} alt='#' />
            <HeaderLinks />
            <Button />
        </div>
      </div>

      
      <div className='intro-content-main' >
        <div className='content'>
          <div className='intro-content'>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button />
          </div>
          <div className='intro-images' >
            <img className='intro-img' src={intro} alt='#' />
            <img className='intro-mobile-img' src={introPhoneImg} alt='#' /> 
          </div>
        </div>
      </div>


      <div className='section-easyBank'>
        <div className='content'>
        <div className='section-easyBank-content'>
            <div className='content-inner-1'>
              <h2>Why choose Easybank?</h2>
              <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className='content-inner-2'>
              <Item itemIMG={item1IMG} title='Online Banking' paragraph='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' />
              <Item itemIMG={item2IMG} title='Simple Budgeting' paragraph='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits' />
              <Item itemIMG={item3IMG} title='Fast Onboarding' paragraph='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.' />
              <Item itemIMG={item4IMG} title='Open API' paragraph='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.' />
            </div>
            </div>
        </div>
      </div>


    <div className='latest-articles'>
      <div className='content-new'>
          <div className='latest-articles-content'>
              <h2>Latest Articles</h2>
              <div className='latest-articles-items'>
                  <LatestArticlesItem articlesIMG={latestIMG1} articlesSpan='By Claire Robinson' articlesTitle='Receive money in any currency with no fees' articlesParagraph='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …' />
                  <LatestArticlesItem articlesIMG={latestIMG2} articlesSpan='By Wilson Hutton' articlesTitle='Treat yourself without worrying about money' articlesParagraph='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …' />
                  <LatestArticlesItem articlesIMG={latestIMG3} articlesSpan='By Wilson Hutton' articlesTitle='Take your Easybank card wherever you go' articlesParagraph='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …' />
                  <LatestArticlesItem articlesIMG={latestIMG4} articlesSpan='By Claire Robinson' articlesTitle='Our invite-only Beta accounts are now live!' articlesParagraph='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...' />
              </div>
          </div>
      </div>
    </div>


    <div className='footer'>

      <div className='content-new'>
        <div className='footer-flex'>
              <div className='footer-item'>
                    <img className='footer-logo1' src={logoWhite} alt='#' />
                    <div className='footer-soc-links'>
                      <img src={facebook} alt='#' />
                      <img src={youtube} alt='#' />
                      <img src={twitter} alt='#' />
                      <img src={pinterest} alt='#' />
                      <img src={instagram} alt='#' />
                    </div>
              </div>

              <div className='footer-item2'>
                    <ul>
                      <li>About Us</li>
                      <li>Contact</li>
                      <li>Blog</li>
                    </ul>
                    <ul>
                      <li>Careers</li>
                      <li>Support</li>
                      <li>Privacy Policy</li>
                    </ul>
              </div>

              <div className='footer-item'>
                    <Button />
                    <span className='footer-span'>© Easybank. All Rights Reserved</span>
              </div>
         </div> 
      </div>


    </div>


    </div>


    <div className='MobileApp'>

        <div className='mobile-header'>
          <img src={logo} alt='#' />
          <img onClick={burgerOnClick} className='burger' src={on ? burger : iconClose} alt='#' />
        </div>
          <div className={on ? 'menu-off' : 'menu-on'} >
            <ul>
              <li><a href='https://github.com/Davitxxdavit'>Home</a></li>
              <li><a href='https://github.com/Davitxxdavit'>About</a></li>
              <li><a href='https://github.com/Davitxxdavit'>Contact</a></li>
              <li><a href='https://github.com/Davitxxdavit'>Blog</a></li>
              <li><a href='https://github.com/Davitxxdavit'>Careers</a></li>
            </ul>
          </div>

                 
        <div className='mobile-main'>
          <img className='mobile-intro-img' src={mobileIntro} alt='#' />
          <img className='mobile-intro-img2' src={introPhoneImg} alt='#' />
          <div className='mobile-main-content'>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button />
          </div>
        </div>

        <div className='section-mobile-easybank'>
            <div className='mobile-content-inner-1'>
              <h2>Why choose Easybank?</h2>
              <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className='mobile-content-inner-2'>
              <Item itemIMG={item1IMG} title='Online Banking' paragraph='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.' />
              <Item itemIMG={item2IMG} title='Simple Budgeting' paragraph='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits' />
              <Item itemIMG={item3IMG} title='Fast Onboarding' paragraph='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.' />
              <Item itemIMG={item4IMG} title='Open API' paragraph='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.' />
            </div>
        </div>

        <div className='mobile-latest-articles' >
              <h2>Latest Articles</h2>
              <div className='mobile-latest-articles-items'>
                  <LatestArticlesItem articlesIMG={latestIMG1} articlesSpan='By Claire Robinson' articlesTitle='Receive money in any currency with no fees' articlesParagraph='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …' />
                  <LatestArticlesItem articlesIMG={latestIMG2} articlesSpan='By Wilson Hutton' articlesTitle='Treat yourself without worrying about money' articlesParagraph='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …' />
                  <LatestArticlesItem articlesIMG={latestIMG3} articlesSpan='By Wilson Hutton' articlesTitle='Take your Easybank card wherever you go' articlesParagraph='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …' />
                  <LatestArticlesItem articlesIMG={latestIMG4} articlesSpan='By Claire Robinson' articlesTitle='Our invite-only Beta accounts are now live!' articlesParagraph='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...' />
              </div>

        </div>

        <div className='mobile-footer'>
            <img className='mobile-footer-img' src={logoWhite} alt='#' />
            <div className='mobile-footer-soc-links'>
                      <img src={facebook} alt='#' />
                      <img src={youtube} alt='#' />
                      <img src={twitter} alt='#' />
                      <img src={pinterest} alt='#' />
                      <img src={instagram} alt='#' />
             </div>
             <ul>
                      <li>About Us</li>
                      <li>Contact</li>
                      <li>Blog</li>
                      <li>Careers</li>
                      <li>Support</li>
                      <li>Privacy Policy</li>
              </ul>

              <Button />

              <span className='mobile-footer-span'>© Easybank. All Rights Reserved</span>

        </div>
                
    </div>
</>
  );
}

export default App;
