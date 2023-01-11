import React, { useEffect, useState } from 'react'
import styles from '../styles/Third.module.css'
import { addons } from '../data/steps'
import { useGlobalContext } from '../context'

console.log(addons)

const Third = () => {

  const {AddonPrice} = useGlobalContext()

  const [checked, setChecked] = useState([false, false, false])

  const handleCheck = (number) => {
    setChecked(number)
  }

  const test = 'online'



  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className={styles.Addons}>
        {addons.map((addon) => {
          return (
            <div className={styles.Addon} key={addon.id}>
              <div className={styles.AddonLeft}>
                <input type="checkbox" />

                <div>
                  <h5>{addon.title}</h5>
                  <p>{addon.text}</p>
                </div>
              </div>
              <div className={styles.AddonRight}>
                <p>+{AddonPrice.price[addon.id - 1]}${AddonPrice.label}</p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Third