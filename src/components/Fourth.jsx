import React from 'react'
import styles from '../styles/Fourth.module.css'
import { useGlobalContext } from '../context'

const Fourth = () => {

  const {price} = useGlobalContext()

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.prices}>
        <div className={styles.plan}>
          <div>
            <h5> Arcade (yearly)</h5>
            <a>Change</a>
          </div>
          <h5>${price.price[0]}{price.label}</h5>
        </div>
        <hr />
        <div className={styles.addon}>
          <p>Online service</p>
          <p>+10/yr</p>
        </div>
        <div className={styles.addon}>
          <p>Larger storage</p>
          <p>+20/yr</p>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total (per year)</p>
        <h2>$120/yr</h2>
      </div>

    </div>
  )
}

export default Fourth