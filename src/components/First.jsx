import React from 'react'
import styles from '../styles/First.module.css'
import NextButton from './NextButton'
import { useGlobalContext } from '../context'

const handleChange = (e) => {
   e.preventDefault()         
}

const First = () => {
    return (
        <form className={styles.container}>
            <div className={styles.titles}>
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                <div className={styles.labels}>
                <label htmlFor="name">Name</label>
                <label htmlFor="name" className={styles.required}>This field is required</label>
                </div>
                    <input type="text" id='name' placeholder='e.g. Houssam El Masoudi'/>
                </div>
                <div className={styles.input}>
                <div className={styles.labels}>
                <label htmlFor="email">Email Address</label>
                <label htmlFor="email" className={styles.required}>This field is required</label>
                </div>
                    <input type="text" id='email' placeholder='e.g. Houssam@gmail.com'/>
                </div>
                <div className={styles.input}>
                <div className={styles.labels}>
                <label htmlFor="phone">Phone Number</label>
                <label htmlFor="phone" className={styles.required}>This field is required</label>
                </div>
                    <input type="text" id='phone' placeholder='e.g. +212 619 834 123'/>
                </div>
            </div>
            
        </form>
    )
}

export default First