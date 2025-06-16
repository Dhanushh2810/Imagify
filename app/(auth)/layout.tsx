import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex items-center justify-center mx-auto mt-28  px-4">
 


    

      {children}
    </div>
  )
}

export default Layout