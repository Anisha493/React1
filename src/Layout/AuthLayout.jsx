import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <nav className='h-50 bg-amber-300 w-full'></nav>
        {children}
        <footer className='h-50 bg-red-300 w-full'></footer>
    </div>
  )
}

export default AuthLayout