import { useEffect, useState } from 'react'
import './styles/App.css'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import NextButton from './components/NextButton'
import Sidebar from './components/Sidebar'
import { useGlobalContext } from './context'

function App() {

  const {currentStep, setCurrentStep,nextStep,prevStep} = useGlobalContext()

  return (
    <>
    <div className="App">
      <div className='leftContainer'>
        <Sidebar currentStep={currentStep}/>
      </div>
      <div className='RightContainer'>
        {currentStep === 1 && <First />}
        {currentStep === 2 && <Second />}
        {currentStep === 3 && <Third />}
        {currentStep === 4 && <Fourth/>}
        {currentStep === 5 && <Fifth/>}
        <NextButton nextStep={nextStep} prevStep={prevStep} stepCount={currentStep}/> 
      </div>
      
    </div>
    </>
  )
}

export default App
