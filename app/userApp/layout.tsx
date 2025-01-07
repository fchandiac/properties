import React from 'react'
import UserAppHeader from '../../components/header/UserAppHeader'
import Footer from '@/components/footer/Footer'


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <UserAppHeader/>
    {children}
    <Footer/>

    </>
  )
}
