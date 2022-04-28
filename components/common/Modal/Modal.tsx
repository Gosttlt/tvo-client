import React, {MouseEvent, ReactNode, useState} from 'react'
import CloseIcon from '@mui/icons-material/Close'
import s from './s.module.scss'
import ReactDOM from 'react-dom'
import {useEffect} from 'react'
import {useRef} from 'react'

type Props = {
  children: ReactNode
  isOpen: boolean
  closeHandler: () => void
}

const Modal: React.FC<Props> = ({children, isOpen, closeHandler}) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const ref = useRef(null)

  const onClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (e.target === ref.current) {
      closeHandler()
    }
  }

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) {
    return null
  }

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={s.wrapper} ref={ref} onClick={onClose}>
            <div className={s.content}>
              <CloseIcon className={s.close_button} onClick={closeHandler} />
              {children}
            </div>
          </div>,
          document.getElementById('modal-root'),
        )}
    </>
  )
}

export default Modal
