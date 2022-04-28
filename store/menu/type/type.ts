export interface ICoordinates {
  x: number
  y: number
}

export interface ICurentIds {
  main: string
  sub: string
}

export interface IMenuState {
  coordinates: ICoordinates
  isVisible: boolean
  curIdMain: string
  curIdSub: string
}

export enum MenuActionsEnum {
  SET_COORDINATES = 'SET_COORDINATES',
  IS_VISIBLE_CONTEXT_MENU = 'IS_VISIBLE_CONTEXT_MENU',
  SET_CURRENT_ID = 'SET_CURRENT_ID',
}

export interface setCoordinatesAction {
  type: MenuActionsEnum.SET_COORDINATES
  payload: ICoordinates
}

export interface setVisibleContextMenuAction {
  type: MenuActionsEnum.IS_VISIBLE_CONTEXT_MENU
  payload: boolean
}

export interface setCurrentIdAction {
  type: MenuActionsEnum.SET_CURRENT_ID
  payload: ICurentIds
}

export type MenuActionsType =
  | setCoordinatesAction
  | setVisibleContextMenuAction
  | setCurrentIdAction
