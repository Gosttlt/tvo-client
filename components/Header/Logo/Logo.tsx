import Link from 'next/link'
import React from 'react'
import s from './s.module.scss'

const HeaderLogo = () => {
  return (
    <div className={s.logo}>
      <Link href='/'>
        <a>TVO code</a>
      </Link>
    </div>
  )
}

export default HeaderLogo
