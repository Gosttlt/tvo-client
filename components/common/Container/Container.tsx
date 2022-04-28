import React, {ReactNode} from 'react'

import s from './s.module.scss'

type Props = {
  children: ReactNode
}

const Container: React.FC<Props> = ({children}) => (
  <div className={s.container}>{children}</div>
)

export default Container
