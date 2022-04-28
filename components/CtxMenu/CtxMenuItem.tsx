import React, {ReactNode} from 'react'

import s from './s.module.scss'

type Props = {
  children: ReactNode
  onClick: () => void
}

const CtxMenuItem: React.FC<Props> = ({children, onClick}) => {
  return (
    <div onClick={onClick} className={s.menu_item}>
      {children}
    </div>
  )
}

export default CtxMenuItem
