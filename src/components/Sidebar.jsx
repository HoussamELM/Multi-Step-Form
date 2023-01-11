import React from 'react'
import styles from '../styles/Sidebar.module.css'
import { steps } from '../data/steps'
import { useGlobalContext } from '../context'

const Sidebar = ({currentStep}) => {
  // console.log(currentStep)
  
  return (
    <div className={styles.sidebarContainer}>
    <ul className={styles.steps}>
        {steps.map((step)=>{
            return(
                <li className={styles.step} key={step.id}>
                    <div className={`${styles.titleLeft} ${currentStep == step.id && styles.currentStep}`}>
                    <p>{step.id}</p>
                    </div>
                    <div className={styles.titleRight}>
                    <p className={styles.subtitle}>STEP {step.id}</p>
                    <p className={styles.title}>{step.label}</p>
                    </div>
                </li>
            )
        })}
    </ul>
    </div>
  )
}

export default Sidebar