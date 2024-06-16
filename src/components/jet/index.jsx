import React from 'react'
import styles from "./style.module.css"
import Images from "../../images/plane-1 1.svg"
import Images1 from "../../images/seat (1) 1.svg"
import Images2 from "../../images/schedule 1.svg"
import Images3 from "../../images/web-browser 1.svg"
import Images4 from "../../images/captain 1.svg"

const Jet = () => {
  return (
    <div className={styles.container} id='jet'>
      <h1 className={styles.cards__h1}>Private Jet Performance and Specifications</h1>
      <div className={styles.cards}>
        <div className={styles.cards__left}>
          <div className={styles.cards__top}>
            <img className={styles.icon} src={Images1} alt="" />
            <h2 className={styles.cards__h2} >Luxury And Comfort</h2>
            <p className={styles.cards__p}>It is a long established fact that a reader will be distracted by the readable</p>
          </div>
          <div className={styles.cards__btm}>
            <img className={styles.icon} src={Images2} alt="" />
            <h2 className={styles.cards__h2}>Personal schedule & booking</h2>
            <p className={styles.cards__p}>It is a long established fact that a reader will be distracted by the readable</p>
          </div>
        </div>
        <div className={styles.cards__main}>
          <img className={styles.Images} src={Images} alt="" />
        </div>
        <div className={styles.cards__right}>
          <div className={styles.cards__top}>
            <img className={styles.icon} src={Images3} alt="" />
            <h2 className={styles.cards__h2}>SAFETY AND SECURITY</h2>
            <p className={styles.cards__p}>It is a long established fact that a reader will be distracted by the readable</p>
          </div>
          <div className={styles.cards__btm}>
            <img className={styles.icon} src={Images4} alt="" />
            <h2 className={styles.cards__h2}>EXPERIENCED CREW</h2>
            <p className={styles.cards__p}>It is a long established fact that a reader will be distracted by the readable</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jet