import React from 'react'
import s from './s.module.scss'
import Logo from './Logo'
import Menu from './Menu'

const Header: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <Logo />
      <Menu />
    </div>
  )
}

export default Header
