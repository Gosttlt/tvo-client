import React from 'react'

import s from './s.module.scss'

const Loader: React.FC = () => (
  <div className={s.wrapper}>
    <div className={s.text}>Loading...</div>
    <div className={s.spinner}>
      <div />
    </div>
  </div>
)

export default Loader
