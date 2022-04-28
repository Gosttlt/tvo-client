import React from 'react'
import {techs} from '../assets/tempdata'
import s from './s.module.scss'
import Item from './Item'
import AddButton from './AddButton'
import CtxMenu, {CtxMenuItem} from '../../CtxMenu'
import {useTSelector} from '../../../hooks/useTSelector'

const HeaderMenu: React.FC = () => {
  const currentIdMain = useTSelector(store => store.menu.curIdMain)
  const currentIdSub = useTSelector(store => store.menu.curIdSub)

  return (
    <div className={s.wrapper}>
      {techs.map(tech => (
        <Item type='main' item={tech} key={tech._id}>
          <div
            className={s.sub_menu}
            style={
              currentIdMain === tech._id
                ? {
                    display: 'block',
                  }
                : {}
            }
          >
            {tech.subTechs.map(subTech => {
              return <Item type='sub' item={subTech} key={subTech._id} />
            })}
            <AddButton />
          </div>
        </Item>
      ))}
      <AddButton />
      <CtxMenu>
        <CtxMenuItem onClick={() => console.log('Изменить')}>
          Измени
        </CtxMenuItem>
        <CtxMenuItem onClick={() => console.log('delete')}>Удалить</CtxMenuItem>
      </CtxMenu>
    </div>
  )
}

export default HeaderMenu
