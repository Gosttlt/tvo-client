import React, {MouseEvent, useState} from 'react'
import s from './s.module.scss'
import AddIcon from '@mui/icons-material/Add'
import Modal from '../../../common/Modal'

const AddButton: React.FC = () => {
  const [isShowModal, setShowModal] = useState(false)

  const ContextMenuHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const closeHandler = () => {
    setShowModal(false)
  }

  return (
    <div
      onClick={() => setShowModal(true)}
      className={s.menu_item}
      onContextMenu={ContextMenuHandler}
    >
      <AddIcon />
      <Modal isOpen={isShowModal} closeHandler={closeHandler}>
        <div>Добавитьasdads</div>
      </Modal>
    </div>
  )
}

export default AddButton
