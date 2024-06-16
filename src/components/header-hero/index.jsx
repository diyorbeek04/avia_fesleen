import React from 'react';
import styles from './style.module.css';
import Logo from "../../images/logo.svg"
import Hero from "../../images/hero.svg"
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { PostContact } from '../../redux/contact';


const HeaderHero = () => {
  const dispatch = useDispatch()
  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    }
    dispatch(PostContact(body))
    console.log(body);
  };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.card__logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.card__ul}>
            <ul className={styles.cards__ul}>
              <li><a className={styles.ul__li__a} href="#home">Home</a></li>
              <li><a className={styles.ul__li__a} href="#hero">Booking</a></li>
              <li><a className={styles.ul__li__a} href="#jet"> Private Jet </a></li>
              <li><a className={styles.ul__li__a} href="#blog">Specification</a></li>
              <li><a className={styles.ul__li__a} href="#charters">Luxury Charters </a></li>
              <li><a className={styles.ul__li__a} href="#membership">membership</a></li>
            </ul>
          </div>
          <div className={styles.card__button}>
            <button className={styles.button}>Sign In</button>
            <div className={styles.hamburger}>
              <MenuIcon className={styles.hamburger} />
            </div>
          </div>
        </div>
        <div className={styles.hero} id='hero'>
          <div className={styles.hero__left}>
            <h1 className={styles.cards_h1}>Enjoy Reserved   Overhead bin space</h1>
            <p className={styles.cards_p}>Explore Now <ArrowForwardIosIcon className={styles.icons} /></p>
          </div>
          <div className={styles.hero__right}>
            <img className={styles.images} src={Hero} alt="" />
          </div>
        </div>
        <div className={styles.cards__form} id='contact'>
          <h1 className={styles.cards__form__h1}>Fill in the table to contact us!</h1>
          <form onSubmit={HandleSubmit}>
            <input className={styles.input} id="outlined-basic" type='text' placeholder='Name' name='name' />
            <input className={styles.input} id="outlined-basic" type='email' placeholder='Email' name='email' />
            <input className={styles.input} id="outlined-basic" type='number' placeholder='Mobil phone' name='phone' />
            <div className={styles.cards__button}>
              <button className={styles.card__form__button} type='submit'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderHero;
