import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'


function App() {
  const[showSignup,setShowSignup]=useState(false)
  return (
    <>
    {showSignup?<Signup setShowSignup={setShowSignup}/>:<Login setShowSignup={setShowSignup}/>}
    </>
  )
}

export default App;