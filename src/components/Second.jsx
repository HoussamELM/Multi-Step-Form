import React from 'react'
import styles from '../styles/Second.module.css'
import { useState } from 'react'
import { useGlobalContext } from '../context'

const Second = () => {

  const {toggle,setToggle,price,setFormData,formData} = useGlobalContext()

console.log(formData)

  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className={styles.cards}>
        <button className={styles.card} onClick={()=>setFormData({...formData,price:price.price[0]})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E" /><path fill="#FFF" fillRule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" /></g>
          </svg>
          <div className={styles.planInfo}>
            <h3>Arcade</h3>
            <p>${price.price[0]}{price.label}</p>
            <h6>{toggle && '2 months free'}</h6>
          </div>
        </button>
        <button className={styles.card} onClick={()=>setFormData({...formData,price:price.price[1]})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E" /><path fill="#FFF" fillRule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" /></g></svg>
          <div className={styles.planInfo}>
            <h3>Advanced</h3>
            <p>${price.price[1]}{price.label}</p>
            <h6>{toggle && '2 months free'}</h6>
          </div>
        </button>
        <button className={styles.card} onClick={()=>setFormData({...formData,price:price.price[2]})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF" /><path fill="#FFF" fillRule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" /></g></svg>
          <div className={styles.planInfo}>
            <h3>Pro</h3>
            <p>${price.price[2]}{price.label}</p>
          <h6>{toggle && '2 months free'}</h6>            
          </div>
        </button>
      </div>
      <div className={styles.plan}>
        <span>Monthly</span>
        <button className={styles.toggleButton} onClick={()=>setToggle(!toggle)}>
        <svg width="40" height="40" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.5 400C77.5 319.916 187.919 216 268 216C348.081 216 533.333 319.916 533.333 400C533.333 480.083 348.081 586 268 586C187.919 586 77.5 480.083 77.5 400Z" fill="#09244B"/>
<path fillRule="evenodd" clipRule="evenodd" d="M266.667 166.667C137.8 166.667 33.3333 271.134 33.3333 400C33.3333 528.867 137.8 633.333 266.667 633.333H533.333C662.2 633.333 766.667 528.867 766.667 400C766.667 271.134 662.2 166.667 533.333 166.667H266.667ZM266.667 266.667C193.029 266.667 133.333 326.362 133.333 400C133.333 473.637 193.029 533.333 266.667 533.333C340.303 533.333 400 473.637 400 400C400 326.362 340.303 266.667 266.667 266.667Z" fill="#09244B"/>
<path d="M112 400C112 314.394 181.396 245 267 245C352.604 245 422 314.394 422 400C422 485.606 352.604 555 267 555C181.396 555 112 485.606 112 400Z" fill="white" className={`${toggle == 1 && styles.Togglecircle}`}/>
</svg>
        </button>
        <span>Yearly</span>
      </div>

    </div>
  )
}

export default Second