import {ICoordinates, ICurentIds, setCurrentIdAction} from './../type/type'
import {
  setVisibleContextMenuAction,
  MenuActionsEnum,
  setCoordinatesAction,
} from '../type/type'

export const setCoordinates = (payload: ICoordinates): setCoordinatesAction => {
  return {type: MenuActionsEnum.SET_COORDINATES, payload}
}

export const setVisibleContextMenu = (
  payload: boolean,
): setVisibleContextMenuAction => {
  return {type: MenuActionsEnum.IS_VISIBLE_CONTEXT_MENU, payload}
}

export const setCurrentId = (payload: ICurentIds): setCurrentIdAction => {
  return {type: MenuActionsEnum.SET_CURRENT_ID, payload}
}
