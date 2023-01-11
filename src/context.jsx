import React, { useState,useEffect, useContext } from 'react'
import { addons,steps } from './data/steps'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

  const [currentStep, setCurrentStep] = useState(1)
  const [price, setPrice] = useState({})
  const [AddonPrice, setAddonPrice] = useState({})
  const [toggle, setToggle] = useState(false)
  const finalPrice = 0

  const handlePricing = () => {
    if(toggle){
      setPrice({price:[90,120,150],label:'/yr'})
      setAddonPrice({price:[10,20,20],label:'/yr'})
    }else{
      setPrice({price:[9,12,15],label:'/mo'})
      setAddonPrice({price:[1,2,2],label:'/mo'})
    }
  }
  const nextStep = () => {
    if(currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }
  const prevStep = () => {
    if(currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  useEffect(() => {
    handlePricing()
  },[toggle])

  return (
    <AppContext.Provider value={{toggle,setToggle,price,AddonPrice,nextStep,prevStep,currentStep}}>
    {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}