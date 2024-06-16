import React from 'react'
import styles from "./style.module.css"
import Images1 from "../../images/Mask Group.svg"
import Images2 from "../../images/Mask Group (1).svg"
import Images3 from "../../images/Mask Group (2).svg"
import Images4 from "../../images/Mask Group (3).svg"

export const Charters = () => {
  return (
    <div className={styles.container} id='charters'>
      <h1 className={styles.cards__h1}>Luxury Charters</h1>
      <div className={styles.cards}>
        <div className={styles.cards__item}>
          <img className={styles.img} src={Images1} alt="" />
          <p className={styles.cards__p}>Piaggio P.180 Avanti</p>
        </div>
        <div className={styles.cards__item}>
          <img className={styles.img} src={Images2} alt="" />
          <p className={styles.cards__p}>Pilatus PC-12</p>
        </div>
        <div className={styles.cards__item}>
          <img className={styles.img} src={Images3} alt="" />
          <p className={styles.cards__p}>piper pa27 aztec</p>
        </div>
        <div className={styles.cards__item}>
          <img className={styles.img} src={Images4} alt="" />
          <p className={styles.cards__p}>Beech BE100 King Air</p>
        </div>
      </div>
    </div>
  )
}
