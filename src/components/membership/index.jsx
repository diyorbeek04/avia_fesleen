import React from 'react'
import styles from "./style.module.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Images from "../../images/plane-large 1.svg"

const Membership = () => {
  return (
    <div className={styles.container} id='membership'>
      <h1 className={styles.cards__h1}>Enjoy our membership</h1>
      <div className={styles.cards}>
        <div className={styles.cards__item}>
          <h2 className={styles.cards__h2}>Popular</h2>
          <p className={styles.cards__p}>What You’ll Get</p>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>One-time initiation fee $0</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Deposit $50k</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Pricing / rates  Dynamic</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Priority fleet access Yes</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Guaranteed fleet access No</span>
          </div>
          <hr className={styles.hr} />
          <div className={styles.cards__item__btm}>
            <h3 className={styles.cards__h3}>$250</h3>
            <span className={styles.card__span}>/month</span>
          </div>
          <button className={styles.button}>Choose</button>
        </div>
        <div className={styles.cards__main}>
        <h2 className={styles.cards__btm__h2}>Business</h2>
          <p className={styles.cards__btm__p}>What You’ll Get</p>
          <div className={styles.cards__btm__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__btm__span}>One-time initiation fee $0</span>
          </div>
          <div className={styles.cards__btm__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__btm__span}>Deposit $50k</span>
          </div>
          <div className={styles.cards__btm__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__btm__span}>Pricing / rates  Dynamic</span>
          </div>
          <div className={styles.cards__btm__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__btm__span}>Priority fleet access Yes</span>
          </div>
          <div className={styles.cards__btm__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__btm__span}>Guaranteed fleet access No</span>
          </div>
          <hr className={styles.hr} />
          <div className={styles.cards__item__btm}>
            <h3 className={styles.cards__btm__h3}>$480</h3>
            <span className={styles.card__btm__span}>/month</span>
          </div>
          <button className={styles.cards__button}>Choose</button>
        </div>
        <div className={styles.card__item}>
          <h2 className={styles.cards__h2}>Elite</h2>
          <p className={styles.cards__p}>What You’ll Get</p>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>One-time initiation fee $0</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Deposit $50k</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Pricing / rates  Dynamic</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Priority fleet access Yes</span>
          </div>
          <div className={styles.cards__item__top}>
            <CheckCircleIcon className={styles.icons} />
            <span className={styles.cards__span}>Guaranteed fleet access Yes</span>
          </div>
          <hr className={styles.hr} />
          <div className={styles.cards__item__btm}>
            <h3 className={styles.cards__h3}>$680</h3>
            <span className={styles.card__span}>/month</span>
          </div>
          <button className={styles.button}>Choose</button>
        
        </div>
      </div>
      <div className={styles.cards__btm}>
      <img className={styles.img}  src={Images} alt="" />
      </div>
    </div>
  )
}

export default Membership