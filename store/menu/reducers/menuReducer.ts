import {IMenuState, MenuActionsType, MenuActionsEnum} from './../type/type'

const initialState: IMenuState = {
  coordinates: {
    x: 0,
    y: 0,
  },
  isVisible: false,
  curIdMain: '',
  curIdSub: '',
}

export const menuReducer = (
  state = initialState,
  action: MenuActionsType,
): IMenuState => {
  switch (action.type) {
    case MenuActionsEnum.IS_VISIBLE_CONTEXT_MENU: {
      return {...state, isVisible: action.payload}
    }
    case MenuActionsEnum.SET_COORDINATES: {
      return {
        ...state,
        coordinates: action.payload,
      }
    }
    case MenuActionsEnum.SET_CURRENT_ID: {
      return {
        ...state,
        curIdMain: action.payload.main,
        curIdSub: action.payload.sub,
      }
    }

    default:
      return state
  }
}
