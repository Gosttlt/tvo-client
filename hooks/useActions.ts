import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreaters from '../store/menu/action-creaters'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actionCreaters, dispatch)
}
