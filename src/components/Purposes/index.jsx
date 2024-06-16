import React from 'react'
import styles from "./style.module.css"
import ImagesLeft from "../../images/adobestock_1417261 1.svg"
import ImagesRight from "../../images/adobestock_98400582 1.svg"

const Purposes = () => {
  return (
    <div className={styles.container} id='purposes'>
      <h1 className={styles.cards__h1}>Private Jet for Business & Leisure Purposes</h1>
      <div className={styles.cards}>
        <div className={styles.cards__left}>
          <img className={styles.Images} src={ImagesLeft} alt="" />
        </div>
        <div className={styles.cards__right}>
          <p className={styles.cards__p}>Private Jet Charter</p>
          <span className={styles.cards__span}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.card__left}>
          <p className={styles.cards__p}>Business Jet Charter</p>
          <span className={styles.cards__span}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</span>
        </div>
        <div className={styles.card__right}>
          <img className={styles.Images} src={ImagesRight} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Purposes