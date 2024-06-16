import React from 'react'
import styles from "./style.module.css"
import Logo from '../../images/Frame 2.svg'

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <img src={Logo} alt="" />
        </div>
        <hr className={styles.cards__hr} />
        <div className={styles.cards__btm}>
          <ul className={styles.cards__ul}>
            <li className={styles.cards__li}><a className={styles.cards__a} href="#membership">SERVICES</a></li>
            <li className={styles.cards__li}><a className={styles.cards__a} href="#jet">ABOUT US</a></li>
            <li className={styles.cards__li}><a className={styles.cards__a} href="#purposes">NEWS</a></li>
            <li className={styles.cards__li}><a className={styles.cards__a} href="#contact">CONTACT</a></li>
          </ul>
          <h3 className={styles.cards__h3}>© 2021 Air. All rights reserved.</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer