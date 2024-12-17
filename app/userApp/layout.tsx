import React from 'react'
import UserAppHeader from '../../components/header/UserAppHeader'


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <UserAppHeader/>
    {children}

    </>
  )
}
