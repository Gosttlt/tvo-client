import Link from 'next/link'
import React, {MouseEvent, ReactNode, RefObject, useRef} from 'react'
import {useActions} from '../../../../hooks/useActions'
import {useTSelector} from '../../../../hooks/useTSelector'
import {ISubTechModel, ITechModel} from '../../../../models/menu/TechModel'
import s from './s.module.scss'

type MenuItemProps = {
  item: ITechModel | ISubTechModel
  children?: ReactNode
  type: 'sub' | 'main'
}

const Item: React.FC<MenuItemProps> = ({item, children, type}) => {
  const mainId = useTSelector(store => store.menu.curIdMain)
  const subId = useTSelector(store => store.menu.curIdSub)
  const {setCoordinates, setVisibleContextMenu, setCurrentId} = useActions()

  const ref = useRef(null) as RefObject<HTMLDivElement> | null

  const isActive = type === 'main' ? mainId === item._id : subId === item._id

  const contextMenuHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (type === 'main') {
      setCurrentId({main: item._id, sub: ''})
    } else {
      setCurrentId({main: (item as ISubTechModel).techId, sub: item._id})
    }
    setCoordinates({x: e.clientX + 10, y: e.clientY + 10})
    setVisibleContextMenu(true)
  }
  const ClockHandler = () => {
    setVisibleContextMenu(false)
  }

  return (
    <div
      className={s.wrapper}
      key={item._id}
      onClick={ClockHandler}
      onContextMenu={contextMenuHandler}
      style={isActive ? {background: '#fff', color: '#000'} : {}}
      ref={ref}
    >
      <div className={s.item_box}>
        {(item as ISubTechModel).url ? (
          <Link href={`/${(item as ISubTechModel).url}`}>
            <a className={s.item_name}>{item.name}</a>
          </Link>
        ) : (
          <div className={s.item_name}>{item.name}</div>
        )}
      </div>
      {children}
    </div>
  )
}

export default Item
