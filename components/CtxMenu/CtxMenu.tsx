import React, {MouseEvent, ReactNode, useRef} from 'react'
import {useActions} from '../../hooks/useActions'
import {useTSelector} from '../../hooks/useTSelector'
import s from './s.module.scss'

type Props = {
  children: ReactNode
}

const CtxMenu: React.FC<Props> = ({children}) => {
  const ref = useRef(null)
  const {setCurrentId} = useActions()
  const isVisible = useTSelector(state => state.menu.isVisible)
  const cord = useTSelector(state => state.menu.coordinates)
  const {setVisibleContextMenu} = useActions()

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.target === ref.current) {
      setVisibleContextMenu(false)
      setCurrentId({main: '', sub: ''})
    }
  }

  if (!isVisible) {
    return null
  }
  return (
    <div>
      <div
        ref={ref}
        className={s.wrapper_box}
        onClick={onClose}
        onContextMenu={onClose}
      ></div>
      <div
        style={{left: `${cord.x}px`, top: `${cord.y}px`}}
        className={s.menu_box}
      >
        {children}
      </div>
    </div>
  )
}

export default CtxMenu
