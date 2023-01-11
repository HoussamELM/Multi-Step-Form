import React from 'react'
import styles from '../styles/NextButton.module.css'
import { useGlobalContext } from '../context'

const NextButton = ({prevStep,nextStep,stepCount}) => {
  return (
    <div className={`${styles.NextButtonContainer} ${stepCount == 5 && styles.hidden}`}>
        <button onClick={()=>prevStep()} type='submit' className={styles.prevButton}>
           {`${stepCount !== 1 ? 'Go back' : ''}`} 
        </button>
        <button onClick={()=>nextStep()} type='submit' className={styles.NextButton}>
        {`${stepCount === 4 ? 'Confirm':'Next Step'}`}
        </button>
    </div>
  )
}

export default NextButton