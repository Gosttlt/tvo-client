import {useSelector} from 'react-redux'
import {TypedUseSelectorHook} from 'react-redux'
import {RootState} from '../store/menu/reducers'

export const useTSelector: TypedUseSelectorHook<RootState> = useSelector
