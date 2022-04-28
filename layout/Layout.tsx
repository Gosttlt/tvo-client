import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import s from './s.module.scss'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>asd</title>
      </Head>
      <div className={s.wrapper}>
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout
