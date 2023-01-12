import React, { useState,useEffect, useContext } from 'react'
import { addons,steps } from './data/steps'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

  const [currentStep, setCurrentStep] = useState(1)
  const [price, setPrice] = useState({})
  const [AddonPrice, setAddonPrice] = useState({})
  const [toggle, setToggle] = useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    plan:'',
    addons:{}
  })
  const [valid, setValid] = useState({name:false,email:false,phone:false})

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

  const handleNameChange = (e) => {
    e.preventDefault()
    setFormData({...formData,name:e.target.value})
    console.log(formData)
    if(formData.name.length < 3){
      e.target.style.border = '1px solid red'
      setValid({...valid,name:false})
    }else{
      e.target.style.border = '1px solid blue'
      setValid({...valid,name:true})
    }
  }
  const handleEmailChange = (e) => {
    e.preventDefault()
    setFormData({...formData,email:e.target.value})
    console.log(formData)
    if(!validEmail.test(formData.email)){
      e.target.style.border = '1px solid red'
      setValid({...valid,email:false})
    }else{
      e.target.style.border = '1px solid blue'
      setValid({...valid,email:true})
      setFormData({...formData,email:e.target.value})
    }
  }
  const handlePhoneChange = (e) => {
    e.preventDefault()
    setFormData({...formData,phone:e.target.value})
    console.log(formData)
    if(formData.phone.length < 9 || formData.phone.length > 12){
      e.target.style.border = '1px solid red'
      setValid({...valid,phone:false})
    }else{
      e.target.style.border = '1px solid blue'
      setValid({...valid,phone:true})
      setFormData({...formData,phone:e.target.value})
    }
  }

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
    <AppContext.Provider value={{toggle,setToggle,price,AddonPrice,nextStep,prevStep,currentStep,handleNameChange,handleEmailChange,handlePhoneChange,valid,formData,setFormData}}>
    {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}