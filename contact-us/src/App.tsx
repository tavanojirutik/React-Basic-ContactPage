// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/navigation/Navigation'
import ContactHeader from './component/contactHeader/contactHeader'
import ContatctForm from './component/ContatctForm/ContatctForm'


function App() {
  return (
    <>
      <div>
        <Navigation /> 
        <main className='mainContainer'>
          <ContactHeader />
          <ContatctForm />
        </main>
       </div>
    </>
  )
}

export default App
