import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => {
  return (
    <div className='flex justify-center my-20 items-center'>
    <SignIn/>
  </div>
  )
}

export default SignInPage